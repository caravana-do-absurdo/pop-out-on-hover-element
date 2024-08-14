import './App.css';
import React from 'react';
import ClickablePodcastCard from './components/ClickablePodcastCard/ClickablePodcastCard';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      podcasts: {
        'dc': {
          id: 'dc',
          link: 'https://caravanadoabsurdo.com.br/tag/descanso-curto/',
        },
        'dl': {
          id: 'dl',
          link: 'https://caravanadoabsurdo.com.br/tag/descanso-longo/',
        },
        '15mdc': {
          id: '15mdc',
          link: 'https://caravanadoabsurdo.com.br/tag/15-minutos-de-caos/',
        },
        'rpg': {
          id: 'rpg',
          link: 'https://caravanadoabsurdo.com.br/tag/mas-e-o-rpg/',
        },
        'cos': {
          id: 'cos',
          link: 'https://caravanadoabsurdo.com.br/tag/maldicao-de-strahd/',
        },
      },
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
    const cardHeight = (this.state.windowHeight) / 2;
    const cardWidth = this.state.isHorizontal ? (this.state.windowWidth) / 4 : this.state.windowWidth;
    return (
      <div className="App">
        <header className="App-header">
          <div className={[this.state.isHorizontal ? 'horizontal-slider' : 'vertical-slider']}>
            <ClickablePodcastCard
              key={'dc'}
              podcast={this.state.podcasts['dc']}
              height={cardHeight}
              width={cardWidth}
            />
            <ClickablePodcastCard
              key={'dl'}
              podcast={this.state.podcasts['dl']}
              height={cardHeight}
              width={cardWidth}
            />
            <ClickablePodcastCard
              key={'15mdc'}
              podcast={this.state.podcasts['15mdc']}
              height={cardHeight}
              width={cardWidth}
            />
          </div>
          <div className={[this.state.isHorizontal ? 'horizontal-slider' : 'vertical-slider']}>
            <ClickablePodcastCard
              key={'rpg'}
              podcast={this.state.podcasts['rpg']}
              height={cardHeight}
              width={cardWidth}
            />
            <ClickablePodcastCard
              key={'cos'}
              podcast={this.state.podcasts['cos']}
              height={cardHeight}
              width={cardWidth}
            />
          </div>
        </header>
      </div>
    );
  }

}
