import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import { Link } from 'preact-router';
import CharacterCard from '../../components/CharacterCard';
import { entries } from 'tibetan-alphabet';
import style from './style';

export default class Training extends Component {
	constructor() {
		super();
		this.state = {
			pool: []
		};
	}

	componentWillMount() {
		this.setRandom();
	}

	setRandom = () => {
		const items = entries();
		const randomCharacters = [];

		const size = 15;
		let i = 0;
		for(i; i<size; i++) {
			const randomCharacter = this.getRandomItem(items);
			randomCharacters.push(randomCharacter);
		}

		this.setState({
			pool: randomCharacters
		})
	}

	getRandomItem = (items) => {
		return items[Math.floor(Math.random() * (items.length -1))];
	}

	render({}, { pool }) {
		return (
			<div class={`${style.consonants} page`}>
				<div class={style.content}>
					<Link href="/">
						<Button class={style.btn} raised ripple> 
							Back
						</Button>
					</Link>
					<h2>Random consonants</h2>
					<p class={style.text}>
						See if you can pronounce these randomly chosen consonants.
					</p>
					<CharacterCard pool={pool} />
				</div>
			</div>
		);
	}
}
