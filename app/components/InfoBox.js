const React = require('react')

class InfoBox extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col-12">
					<h4>{this.props.heading}</h4>
					<p>{this.props.text}</p>
				</div>
			</div>
		)
	}
}

module.exports = InfoBox