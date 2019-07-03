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
				<p class={style.text}>
					The Tibetan alphabet has thirty consonants and are traditionally a good place to start learning Tibetan.
					The consonants are arranged in rows and columns. Traditionally they are read by row, left to right and top to bottom.
					Click on the consonants and listen to the pronunciation.
				</p>
				<Consonants consonantsStyle={style.consonants}/>
				
				<p class={style.text} >
					Train your memory by trying to recognize random consonants. 
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
