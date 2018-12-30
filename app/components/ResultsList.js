const React=require('react');
const ProductDisplay=require('./ProductDisplay.js')

class ResultsList extends React.Component {
	render(){
		return this.props.results.length>0?(
			
				<ul className='col-md-12'>
					{this.props.results}
				</ul>
			
		):(
		null
		)
	}
}

module.exports=ResultsList