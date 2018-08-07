import React, { Component} from 'react';
import News from '../containers/News';

class Home extends Component {
	render(){
		return (
			<div>
				<div>Welcome to Duncans News</div>

				<div>
					<News />
				</div>
			</div>
		)
	}
}

export default Home