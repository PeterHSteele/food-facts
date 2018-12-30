//display message on addProduct submit
//figure out browser 'back button'
//add fields?
//purgatory
//geolocation/mileage estimation
//search function - which food from each category ('ie, diced tomatoes') is grown closes to you
//in season fruits
//manufacturing geography hints

const React=require('react'),bootstrap=require('bootstrap');
const Form = require('./Form.js'),
TextInput=require('./TextInput.js'),
Header=require('./Header.js'),
Footer=require('./Footer.js'),
ProductDisplay=require('./ProductDisplay.js'),
InfoBox=require('./InfoBox.js'),
Button=require('./Button.js'),
View=require('./View.js'),
ResultsList=require('./ResultsList.js')
require('bootstrap/dist/css/bootstrap.min.css')
require('../../index.css')


class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			view:'Home',
			name:"",
			brand:"",
			parent_company:"",
			imageSrc:"",
			displayProduct:"",
			keyword:"",
			searchTerm:"",
			grown_or_manufactured:"",
			queryData:[]
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleNavClick=this.handleNavClick.bind(this);
		this.fetchRandomDocument=this.fetchRandomDocument.bind(this);
		this.handleSubmitSearchForm=this.handleSubmitSearchForm.bind(this)
		this.handleSubmitAddProductForm=this.handleSubmitAddProductForm.bind(this)
	}

	handleChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleNavClick(e){
		if (!this.state.searchTerm){
			return
		}
		this.setState({
			view:e.target.innerHTML
		})
	}

	handleSubmitSearchForm(e,search){
		e.preventDefault()
		const that=this
		let url="http://localhost:3000/search"
		let options={
			method:'POST',
			headers:{'Content-Type': 'application/json',"Accept":"application/json"},
			body:JSON.stringify({keyword:this.state.keyword.toLowerCase()})
		}
		fetch(url,options)
		.then(response=>response.json())
		.then(function(json){
			that.setState({
				queryData:json
			})	
		})
		.catch(function(err){console.log(err)})
		this.setState({
			searchTerm:this.state.keyword,
			keyword:'',
			view:'Results'
		})
	}

	handleSubmitAddProductForm(e){
		e.preventDefault()
		const that=this
		let url="http://localhost:3000/"
		let options={
			method:'POST',
			headers:{'Content-Type': 'application/json',"Accept":"application/json"},
			body:JSON.stringify({
				name:this.state.name.toLowerCase(),
				brand:this.state.brand.toLowerCase(),
				parent_company:this.state.parent_company.toLowerCase(),
				grown_or_manufactured:this.state.grown_or_manufactured.toLowerCase()
			})
		}
		fetch(url,options)
		.then(response=>response.json())
		.then(function(json){
				
		})
		.catch(function(err){console.log(err)})
		this.setState({
				name:'',
				brand:'',
				parent_company:'',
				grown_or_manufactured:''
			})
	}

	

	fetchRandomDocument(){
		const that=this;
		fetch("http://localhost:3000")
		.then(function(response){
			return response.json()
		})
		.then(function(json){
			console.log(json)
			that.setState({
				displayProduct:json
			})
		})
	}

	componentDidMount(){
		this.fetchRandomDocument();
	}

	render(){
		const that=this
		const view=this.state.view,searchTerm=this.state.searchTerm;
		//Generate inputs,titles,descriptions,etc for forms
		const searchFormProps={
			inputsArr:['keyword'],
			description:"Enter a brand name, company, or product.",
			title:"Search for Product"
		}
		const addProductFormProps={
			inputsArr:['name','brand','parent_company','grown_or_manufactured'],
			description:"All fields required.",
			title:"Add Product"
		}
		let generateInputs=function(inputNames,changeHandler){
			return inputNames.map((e,i)=>{
				let words = e.split('_')
				let uppercased=[]
				for (let i=0;i<words.length;i++){
					let letters=words[i].split('')
					let firstLetter=letters[0].toUpperCase()
					letters.splice(0,1,firstLetter)
					uppercased.push(letters.join(''))
				}
				let displayName=uppercased.join(' ')
				
				return	<TextInput 
						key={i} 
						name={e} 
						handleChange={changeHandler} 
						displayName={displayName}
						value={that.state[e]}/>
			})
		}
		const searchFormInputs=generateInputs(searchFormProps.inputsArr,this.handleChange);
		const addProductFormInputs=generateInputs(addProductFormProps.inputsArr,this.handleChange)

		//About text for info box
		const infoBoxText='Sometimes I\'m surprised to learn that one of my favorite grocery brands, one I had always envisioned as a small, independent, '+ 
		'mom-and-pop style operation, is actually owned by Nestle or General Mills. The packaging depicts serene fields of neatly planted rows, '+
		'too pristine to actually exist. So where did these items really come from? I decided '+
		'to start this little database to collect some information about corporate ownership of brands I buy. I try to add one product each day.'
		
		//Generate nav links
		const navLinks=['Home','Results'].map((e,i)=>{
			let className='nav-link ';
			if (!searchTerm&&e=='Results'){className+='disabled'}else{}
			return <a className={className} href='#' onClick={(e)=>this.handleNavClick(e)}>{e}</a>
		})

		//Create an information card for each record returned from database
		const results = this.state.queryData.map((e,i)=>(
			<li key={i} className="float-left m-2">
				<ProductDisplay 
				product={e}
				render={true}/>
			</li>
			))
		const classes="col-md-3 mb-2"
		return( 
			<div>
				<Header className='mb-5 border-bottom border-primary flex-column' navLinks={navLinks}/>
				<div className='container-fluid'>

					<View 
						product={this.state.displayProduct} 
						view={view} 
						searchFormTitle={searchFormProps.title} 
						searchFormDescription={searchFormProps.description} 
						searchFormInputs={searchFormInputs}
						addProductFormTitle={addProductFormProps.title} 
						addProductFormDescription={addProductFormProps.description} 
						addProductFormInputs={addProductFormInputs}
						infoBoxText={infoBoxText}
						handleNewRandomEntry={this.fetchRandomDocument}
						handleSubmitSearchForm={this.handleSubmitSearchForm}
						handleSubmitAddProductForm={this.handleSubmitAddProductForm}
						results={results}
						searchTerm={this.state.searchTerm}/>
					<Footer className='bg-primary fixed-bottom text-center'/>
				</div>
			</div>
		)
	}
}

module.exports=App