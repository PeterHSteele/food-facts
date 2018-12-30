const React=require('react')

class TextInput extends React.Component {
	render(){
		return (
			<div className="form-group">
				<label htmlFor={this.props.name}>{this.props.displayName}</label>
				<input 
				type="text" 
				id={this.props.name}
				name={this.props.name} 
				value={this.props.value} 
				onChange={(e)=>this.props.handleChange(e)} 
				className='form-control'/>
			</div>
		)
	}
}

module.exports=TextInput;