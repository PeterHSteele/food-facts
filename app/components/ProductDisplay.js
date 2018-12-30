const React = require('react');
const ProductDescriptionList=require('./ProductDescriptionList'),Placeholder=require('./Placeholder.js')

class ProductDisplay extends React.Component {
	render(){
		const image=this.props.product.imageSrc?<img src={this.props.product.imageSrc} alt={"Picture of "+this.props.brand} />:<Placeholder />
		return this.props.render?(
			<div className='card shadow-sm border mb-2'>
				{image}
				<div className='card-body'>
					<ProductDescriptionList 
					name={this.props.product.name} 
					brand={this.props.product.brand} 
					parentCompany={this.props.product.parent_company}/>
				</div>
			</div>
		):null
	}
}

module.exports=ProductDisplay;