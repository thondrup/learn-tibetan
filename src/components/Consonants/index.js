import { h, Component } from 'preact';
import { row } from 'tibetan-alphabet';
import style from './style';
import PlayerCard from '../PlayerCard';

export default class Consonants extends Component {
	constructor(props) {
		super(props);
	}

	render({consonantsStyle}) {
		return (
			<div class={consonantsStyle}>
				{ 
					row([1,2,3,4,5,6,7,8]).map(r => 
						<p class={style.row}>
						{
							r.map(character =>
								<PlayerCard 
									src={`./assets/audio/alphabet/row${character.row}-col${character.col}.m4a`}
									character={character} 
									key={character.text}>
								</PlayerCard>
							)
						}
						</p>
					)
				}
			</div>
		);
	}
}
