import { h, Component } from 'preact';

export default class Character extends Component {
	render({character, characterStyle}) {
		return (
			<div class={characterStyle}>
        {character.text}
			</div>
		);
	}
}
