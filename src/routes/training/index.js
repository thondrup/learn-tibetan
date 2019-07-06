import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import CharacterPoolCard from '../../components/CharacterPoolCard';
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
						Pronounce the consonant you see, then tap the play button to hear the correct pronunciation. 
						Tapping the randomize button will give you new random consonants.
					</p>
					<CharacterPoolCard pool={this.state.pool} />
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
