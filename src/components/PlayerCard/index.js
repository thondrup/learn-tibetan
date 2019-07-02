import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import Button from 'preact-material-components/Button';
import Character from '../Character';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class PlayerCard extends Component {
  constructor(props) {
    super(props);
    this.state.isPlaying = false;
  }

  togglePlay() {
    this.state.isPlaying ? this.stop() : this.play();
  };

  play() {
    this.audio.load();
    this.audio.play();     
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;  
  }

  audioLoaded() {
    this.audio.onplay = () => {
      this.setState({isPlaying: true});
    };

    this.audio.onpause = () => {
      this.setState({isPlaying: false});
    };
  }

  componentDidMount() {
    this.audio.onloadedmetadata = () => {
      this.audioLoaded();
    };
  }

  render({src, character}, {isPlaying}) {
    return (
      <Card class={style.cardBody}>
        <Button class={style.btn} raised ripple onClick={this.togglePlay.bind(this)}> 
          <Character character={character} characterStyle={style.character} />
          <audio ref={(audio) => { this.audio = audio }}>
            <source src={src} type="audio/mp4" />
          </audio>
        </Button> 
      </Card>
    );
  }
}
