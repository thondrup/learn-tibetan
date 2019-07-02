import { h, Component } from 'preact';
import TopAppBar from 'preact-material-components/TopAppBar';
import 'preact-material-components/TopAppBar/style.css';

export default class Header extends Component {
	drawerRef = drawer => (this.drawer = drawer);
	dialogRef = dialog => (this.dialog = dialog);

	render() {
		return (
			<div>
				<TopAppBar className="topappbar">
					<TopAppBar.Row>
						<TopAppBar.Section align-start>
							<TopAppBar.Title>Learn Tibetan</TopAppBar.Title>
						</TopAppBar.Section>
					</TopAppBar.Row>
				</TopAppBar>
			</div>
		);
	}
}
