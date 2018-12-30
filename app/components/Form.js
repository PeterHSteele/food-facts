const React=require('react')

class Form extends React.Component {
	render(){
		return (
			<form onSubmit={(e)=>this.props.handleSubmit(e)} className='p-1 shadow-sm border'>
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
				{this.props.inputs}
				<input type='submit' onClick={(e)=>this.props.handleSubmit(e,this.props.search)} className='btn btn-primary' value='submit'/>
			</form>	
		)
	}
}

module.exports=Form