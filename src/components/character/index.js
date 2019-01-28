import { h, Component } from 'preact';
import style from './style';

export default class Character extends Component {
	render({character}) {
		return (
			<div class={style.character}>
        {character.text}
			</div>
		);
	}
}
