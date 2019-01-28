import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import { entries } from 'tibetan-alphabet';
import Character from '../../components/character';
import style from './style';

export default class Home extends Component {
	constructor() {
		super();
		const allCharacters = this.getPool()

		this.state = {
			index: 0,
			pool: allCharacters,
			character: allCharacters[0]
		};
	}

	getPool = () => {
		return entries();
	}

	previous = () => {
		if(this.state.index === 0) {
			return;
		}

		this.setState(prev => ({
			index: (prev.index - 1),
			character: (prev.pool[prev.index - 1])
		}));
	}

	next = () => {
		if(this.state.index === this.state.pool.length - 1) {
			return;
		}

		this.setState(prev => ({
			index: (prev.index + 1),
			character: (prev.pool[prev.index + 1])
		}));
	}

	render({}, { character, index, pool }) {
		return (
			<div class={`${style.home} page`}>
				<Card>
					<div class={style.cardBody}>
						<Character character={character} />
						<div>
							{index + 1} of {pool.length}
						</div>
					</div>
					<Card.Actions class={style.cardActions}>
						<Card.ActionButton disabled={this.state.index === 0} onclick={this.previous}>Previous</Card.ActionButton>
						<Card.ActionButton disabled={this.state.index === this.state.pool.length - 1} onclick={this.next}>Next</Card.ActionButton>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}
