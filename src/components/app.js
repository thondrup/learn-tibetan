import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';
import Home from '../routes/home';
import NotFound from '../routes/404';
import Training from '../routes/Training';

export default class App extends Component {
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		return (
			<div id="app">
				<Header selectedRoute={this.state.currentUrl} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Training path="/training" />
					<NotFound default />
				</Router>
			</div>
		);
	}
}
