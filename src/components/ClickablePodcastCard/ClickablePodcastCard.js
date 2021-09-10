import React from 'react';
import './ClickablePodcastCard.css';

export default class ClickablePodcastCard extends React.Component {

  constructor(props) {
    super(props)

    let today = new Date()

    this.state = {
      isPodcastLaunched: today > this.props.podcast.releaseDate,
      elementWrapperStyle: this.generateElementWrapperStyle()
    }
  }

  generateElementWrapperStyle() {
    let availableWidth = this.props.width
    let availableHeight = this.props.height
    let marginTop = (availableHeight - availableWidth) / 2

    return {
      width: availableWidth,
      height: availableHeight - (marginTop * 2),
      marginTop,
      marginBottom: marginTop
    }
  }

  handlePodcastClick = (e) => {
    e.preventDefault();
    if(this.state.isPodcastLaunched) {
      window.open(this.props.podcast.link, "_blank"); 
    }
  };

  render() {
    return (
      <a class="link-wrapper" href="#" onClick={this.handlePodcastClick} style={{height: this.props.height, width: this.props.width}}>
        <div class="element-wrapper" style={this.state.elementWrapperStyle}>
          {
            this.state.isPodcastLaunched ? null : 
              <p class="release-date">
                {`Lançamento em:\n${this.props.podcast.releaseDate.getDate()}.${this.props.podcast.releaseDate.getMonth() + 1}.${this.props.podcast.releaseDate.getFullYear()}`}
              </p>
          }
          <img class="background-image" src={this.state.isPodcastLaunched || !this.props.podcast.blackedOutBackgroundImageURL  ? this.props.podcast.backgroundImageURL : this.props.podcast.blackedOutBackgroundImageURL} />
          <img className={['foreground-image', this.state.isPodcastLaunched ? null : 'hidden'].join(" ")} src={this.props.podcast.foregroundImageURL} />
          <img class="podcast-name" src="./img/caravana_podcasts.png" />
        </div>
      </a>
    );
  }
  
}
