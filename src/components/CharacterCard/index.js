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
			index: 0
		};
	}

	componentWillReceiveProps() {
		this.setState({
			index: 0
		})
	}

	previous = () => {
		if(this.state.index === 0) {
			return;
		}

		this.setState(prev => ({
			index: (prev.index - 1)
		}));
	}

	next = () => {
		if(this.state.index === this.props.pool.length - 1) {
			return;
		}

		this.setState(prev => ({
			index: (prev.index + 1)
		}));
	}

	audioEnded = () => {
		this.next();
	}

	render({pool}, {index}) {
		return (
      <Card>
        <div class={style.cardBody}>
          <Character character={pool[index]} characterStyle={style.characterStyle} />
          <div>
            {index + 1} of {pool.length}
          </div>
        </div>
        <Card.Actions class={style.cardActions}>
          <Card.ActionButton disabled={index === 0} class={style.navBtn} onclick={this.previous}>Prev</Card.ActionButton>
          <PlayerBtn src={`./assets/audio/alphabet/row${pool[index].row}-col${pool[index].col}.m4a`} onEnded={this.audioEnded} />
          <Card.ActionButton disabled={index === pool.length - 1} class={style.navBtn} onclick={this.next}>Next</Card.ActionButton>
        </Card.Actions>
      </Card>
		);
	}
}
