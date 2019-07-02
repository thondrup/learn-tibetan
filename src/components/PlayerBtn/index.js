import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import Icon from 'preact-material-components/Icon';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class PlayerBtn extends Component {
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

  render({src}, {isPlaying}) {
    return (
      <Button class={style.btn} raised ripple onClick={this.togglePlay.bind(this)}> 
        <Icon class={style.player} 
          ref={(progress) => { this.progress = progress }}>
          {isPlaying ? 'stop' : 'play_arrow'}
        </Icon>
        <audio ref={(audio) => { this.audio = audio }}>
          <source src={src} type="audio/mp4" />
        </audio>
      </Button>
    );
  }
}
