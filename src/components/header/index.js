import { h, Component } from 'preact';
import TopAppBar from 'preact-material-components/TopAppBar';
import { Link } from 'preact-router';
import 'preact-material-components/TopAppBar/style.css';
import style from './style';

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	render({selectedRoute}) {
		return (
			<div>
				<TopAppBar className="topappbar">
					<TopAppBar.Row>
              <TopAppBar.Section align-start>
								{
										selectedRoute === '/training' ?
											<Link class={style.back} href="/">
												<TopAppBar.Icon navigation>arrow_back</TopAppBar.Icon>
											</Link>
											: ''
								}
                <TopAppBar.Title>
                  Learn Tibetan
                </TopAppBar.Title>
              </TopAppBar.Section>
            </TopAppBar.Row>
				</TopAppBar>
			</div>
		);
	}
}
