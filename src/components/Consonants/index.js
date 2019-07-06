import { h, Component } from 'preact';
import { row } from 'tibetan-alphabet';
import style from './style';
import SimpleCharacterCard from '../SimpleCharacterCard';

export default class Consonants extends Component {
	constructor(props) {
		super(props);
	}

	render({consonantsStyle}) {
		return (
			<div class={consonantsStyle}>
				<div class={style.table}>
				{ 
					row([1,2,3,4,5,6,7,8]).map(r => 
						<p class={style.row}>
						{
							r.map(character => <SimpleCharacterCard character={character} key={character.text}></SimpleCharacterCard>)
						}
						</p>
					)
				}
				</div>
			</div>
		);
	}
}
