import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import Icon from 'preact-material-components/Icon';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class PlayerBtn extends Component {
  constructor(props) {
    super(props);
  }

  play = () => {
    this.audio.load();
    this.audio.play();     
  }

  audioLoaded = () => {
    this.audio.onended = () => {
      this.props.onEnded();
    };
  }

  componentDidMount() {
    this.audio.onloadedmetadata = () => {
      this.audioLoaded();
    };
  }

  render({src}, {isPlaying}) {
    return (
      <Button class={style.btn} raised ripple onClick={this.play}> 
        <Icon class={style.player}>play_arrow</Icon>
        <audio ref={(audio) => { this.audio = audio }}>
          <source src={src} type="audio/mp4" />
        </audio>
      </Button>
    );
  }
}
