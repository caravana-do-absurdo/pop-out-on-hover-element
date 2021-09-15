import './App.css';
import React from 'react';
import ClickablePodcastCard from './components/ClickablePodcastCard/ClickablePodcastCard';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      podcasts: [
        {
          id: 'dl',
          backgroundImageURL: './img/dl_background.png',
          foregroundImageURL: './img/dl_foreground.png',
          releaseDate: new Date("2021-09-30T06:00:00.000-03:00"),
          link: 'https://caravanadoabsurdo.com.br/tag/descanso-longo/'
        },
        {
          id: 'rpg',
          backgroundImageURL: './img/rpg_background.png',
          foregroundImageURL: './img/rpg_foreground.png',
          releaseDate: new Date("2021-10-01T06:00:00.000-03:00"),
          link: 'https://caravanadoabsurdo.com.br/tag/mas-e-o-rpg/'
        },
        {
          id: 'cos',
          backgroundImageURL: './img/cos_background.png',
          blackedOutBackgroundImageURL: './img/cos_background_hidden.png',
          foregroundImageURL: './img/cos_foreground.png',
          releaseDate: new Date("2021-10-02T06:00:00.000-03:00"),
          link: 'https://caravanadoabsurdo.com.br/tag/maldicao-de-strahd/'
        }
      ],
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      isHorizontal: window.innerWidth > window.innerHeight 
    }

    window.addEventListener('resize', () => {
      this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        isHorizontal: window.innerWidth > window.innerHeight
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className={[this.state.isHorizontal ? 'horizontal-slider' : 'vertical-slider']}>
            {
              this.state.podcasts.map(singlePodcast => {
                return <ClickablePodcastCard 
                        key={singlePodcast.id}
                        podcast={singlePodcast} 
                        height={this.state.windowHeight} 
                        width={this.state.isHorizontal ? this.state.windowWidth / 3 : this.state.windowWidth} 
                      />
              })
            }
          </div>
        </header>
      </div>
    );
  }
  
}
