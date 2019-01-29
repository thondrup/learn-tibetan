import { h, Component } from 'preact';
import CharacterCard from '../../components/CharacterCard';
import { entries } from 'tibetan-alphabet';
import style from './style';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			pool: this.getPool()
		};
	}

	getPool = () => {
		return entries();
	}

	render({}, { pool }) {
		return (
			<div class={`${style.home} page`}>
				<CharacterCard pool={pool} />
			</div>
		);
	}
}
