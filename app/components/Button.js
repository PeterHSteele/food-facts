const React = require('react')

class Button extends React.Component{
	render(){
		return (
			<button className="btn btn-primary" onClick={(e)=>this.props.handleClick(e)}>{this.props.text}</button>
		)
	}
}

module.exports=Button