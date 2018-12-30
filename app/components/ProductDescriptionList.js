const React=require('react')
 
class ProductDescriptionList extends React.Component {
	render(){
		return (
			<dl className="list-group list-group-flush">
				<dt>Product</dt>
				<dd>{this.props.name}</dd>
				<dt>Brand</dt>
				<dd>{this.props.brand}</dd>
				<dt>Parent Company</dt>
				<dd>{this.props.parentCompany}</dd>
			</dl>
		)
	}
}

module.exports = ProductDescriptionList