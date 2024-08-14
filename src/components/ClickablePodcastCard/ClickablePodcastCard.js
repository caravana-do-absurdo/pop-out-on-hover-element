import React from 'react';
import './ClickablePodcastCard.css';

export default class ClickablePodcastCard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      elementWrapperStyle: this.generateElementWrapperStyle(props)
    }
  }

  generateElementWrapperStyle(props) {
    let availableWidth = props.width
    let availableHeight = props.height
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
    window.open(this.props.podcast.link, "_blank");
  };

  componentDidUpdate(props) {
    if (this.state.elementWrapperStyle.width !== props.width && this.state.elementWrapperStyle.height !== props.height) {
      this.setState({ elementWrapperStyle: this.generateElementWrapperStyle(props) })
    }
  }


  requireImageForPodcast(podcastId, imagePosition) {
    return require(`../../assets/img/${podcastId}_${imagePosition}.png`);
  }

  render() {
    return (
      <a className="link-wrapper" href="#" onClick={this.handlePodcastClick} style={{ height: this.props.height, width: this.props.width }}>
        <div className="element-wrapper" style={this.state.elementWrapperStyle}>
          <img
            className="background-image"
            src={this.requireImageForPodcast(this.props.podcast.id, 'background')}
            alt='podcast background'
          />
          <img
            className="foreground-image"
            src={this.requireImageForPodcast(this.props.podcast.id, 'foreground')}
            alt='podcast foreground'
          />
          <img
            className="podcast-name"
            src={require('../../assets/img/caravana_podcasts.png')}
            alt='podcast footer'
          />
        </div>
      </a>
    );
  }

}
