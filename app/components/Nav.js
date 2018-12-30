const React=require('react');
require('bootstrap/dist/css/bootstrap.min.css')

class Nav extends React.Component {
	render(){
		return (
			<nav className="nav navbar navbarDefault navbar-expand-lg navbar-light">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					{this.props.navLinks}
				</div>
				<div className=''>
					<h1 className="text-right text-primary mr-2">Grocery Lookup</h1>
				</div>
				
			</nav>
		)
	}
}

module.exports=Nav