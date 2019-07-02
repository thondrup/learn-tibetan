import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import Character from '../../components/Character';
import PlayerBtn from '../../components/PlayerBtn';
import style from './style';

export default class CharacterCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			pool: props.pool,
			character: props.pool[0]
		};
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
      <Card>
        <div class={style.cardBody}>
          <Character character={character} characterStyle={style.characterStyle} />
          <div>
            {index + 1} of {pool.length}
          </div>
        </div>
        <Card.Actions class={style.cardActions}>
          <Card.ActionButton disabled={index === 0} onclick={this.previous}>Prev</Card.ActionButton>
          <PlayerBtn src={`./assets/audio/alphabet/row${character.row}-col${character.col}.m4a`} />
          <Card.ActionButton disabled={index === pool.length - 1} onclick={this.next}>Next</Card.ActionButton>
        </Card.Actions>
      </Card>
		);
	}
}
