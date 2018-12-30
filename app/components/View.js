const React=require('react'),ProductDisplay=require('./ProductDisplay.js'),Form=require('./Form.js'),InfoBox=require("./InfoBox.js"),Button=require('./Button.js'),ResultsList=require('./ResultsList.js')

class View extends React.Component {
	render(){
		
		let classes="col-md-3 mb-2"
		return this.props.view==="Home"?(
			<div className='row'>
				<div className={classes}>
					<h3 className="p3 text-center">Random Entry</h3>
					<ProductDisplay render={this.props.view==="Home"?true:false} product={this.props.product}/>
					<Button text="New Random Entry" handleClick={this.props.handleNewRandomEntry}/>
				</div>
				<div className={classes}>
					<Form 
						inputs={this.props.searchFormInputs}
						title={this.props.searchFormTitle}
						description={this.props.searchFormDescription}
						handleSubmit={this.props.handleSubmitSearchForm}
						search={true}/>
				</div>
				<div className={classes}>
					<Form 
						inputs={this.props.addProductFormInputs}
						title={this.props.addProductFormTitle}
						description={this.props.addProductFormDescription}
						handleSubmit={this.props.handleSubmitAddProductForm}
						search={false}/>
				</div>
				<div className={classes}>
					<InfoBox heading="About" text={this.props.infoBoxText}/>
				</div>
			</div>
		):(
			<div>
				<h2>{'Search results for: '+this.props.searchTerm}</h2>
				<ResultsList keyword={this.props.keyword} results={this.props.results} />
			</div>
		)
	}
}

module.exports=View