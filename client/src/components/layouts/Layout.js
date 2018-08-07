import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Authentication from '../containers/Authentication';

class Layout extends Component {
	render() {
	return (
		<div>
			<div>
				<h1>Duncans News - Breaking news about Duncs</h1>
			</div>
			<div>
				<Authentication />
			</div>
			<div>
				<ul>
					<li><Link to={'/'}>News</Link></li>
					<li><Link to={'/about'}>About</Link></li>
					<li><Link to={'/submit'}>Submit News</Link></li>
				</ul>
			</div>			
			<div>
				{ this.props.children }
			</div>
		</div>
		);
	}
}

export default Layout;