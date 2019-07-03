import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import CharacterCard from '../../components/CharacterCard';
import { entries } from 'tibetan-alphabet';
import style from './style';

export default class Training extends Component {
	constructor() {
		super();
		this.state = {
			pool: [],
			randomSize: 15
		};
	}

	componentWillMount() {
		this.setRandom();
	}

	setRandom = () => {
		let items = entries();
		const randomCharacterSet = [];

		for(let i = 0; i < this.state.randomSize; i++) {
			const index = this.getRandomIndex(items);
			randomCharacterSet.push(items[index]);
			items = items.filter((value, i) => index !== i);
		}

		this.setState({
			pool: randomCharacterSet
		})
	}

	getRandomIndex = (items) => {
		return Math.floor(Math.random() * (items.length - 1));
	}

	render() {
		return (
			<div class={`${style.consonants} page`}>
				<div class={style.content}>
					<h2>Random consonants</h2>
					<p class={style.text}>
						Below is a set of 15 randomly chosen consonants. Try to pronounce the consonant you see, 
						then click the play button to hear the correct pronunciation. The next consonant will 
						then automatically appear. You may at any time click the randomize button to get
						a new set of random consonants.
					</p>
					<CharacterCard pool={this.state.pool} />
					<div class={style.btnWrapper}>
						<Button class={style.btn} raised ripple onClick={this.setRandom}> 
							Randomize
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
