const React = require('react')

class Footer extends React.Component{
	render(){
		return (
			<footer className={this.props.className}>
				<p className="text-white m-3">By Peter | <a className="text-white" href="https://github.com/PeterHSteele">Github</a></p>
			</footer>
		)
	}
}

module.exports=Footer