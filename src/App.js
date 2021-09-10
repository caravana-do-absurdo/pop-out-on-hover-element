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
          releaseDate: new Date('2021-09-30'),
          link: 'https://caravanadoabsurdo.com.br/tag/descanso-longo/'
        },
        {
          id: 'rpg',
          backgroundImageURL: './img/rpg_background.png',
          foregroundImageURL: './img/rpg_foreground.png',
          releaseDate: new Date('2021-10-01'),
          link: 'https://caravanadoabsurdo.com.br/tag/mas-e-o-rpg/'
        },
        {
          id: 'cos',
          backgroundImageURL: './img/cos_background.png',
          foregroundImageURL: './img/cos_foreground.png',
          releaseDate: new Date('2021-10-02'),
          link: 'https://caravanadoabsurdo.com.br/tag/maldicao-de-strahd/'
        }
      ],
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="horizontal-slider">
            {
              this.state.podcasts.map(singlePodcast => {
                return <ClickablePodcastCard 
                        podcast={singlePodcast} 
                        height={this.state.windowHeight} 
                        width={this.state.windowWidth / 3} 
                      />
              })
            }
          </div>
        </header>
      </div>
    );
  }
  
}
