const React=require('react');
const Nav = require('./Nav.js')

class Header extends React.Component {
	render(){
		return (
		
				<header className={this.props.className}>
					
						<div className="">
							<Nav navLinks={this.props.navLinks}/>
						</div>
						
					
				</header>
		)	
	}
}

module.exports=Header