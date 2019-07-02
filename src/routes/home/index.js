import { h, Component } from 'preact';
import style from './style';
import Consonants from '../../components/Consonants';
import Button from 'preact-material-components/Button';
import { Link } from 'preact-router';
import 'preact-material-components/Button/style.css';

export default class Home extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class={`${style.home} page`}>
				<h2>The Thirty Consonants</h2>
				<p class={style.text} >
					The consonants are arranged in rows and columns. Traditionally they are read by row, left to right and top to bottom.
				</p>
				<Consonants consonantsStyle={style.consonants}/>
				
				<p class={style.text} >
					Train you memory by trying to recognize 15 random consonants. 
				</p>
				<div class={style.btnWrapper}>
					<Link href="/training">
						<Button class={style.btn} raised ripple> 
							Train
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}
