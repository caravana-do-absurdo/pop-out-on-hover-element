import React from 'react';
import './ClickablePodcastCard.css';

export default class ClickablePodcastCard extends React.Component {

  constructor(props) {
    super(props)

    let today = new Date()

    this.state = {
      isPodcastLaunched: today > this.props.podcast.releaseDate,
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
    if(this.state.isPodcastLaunched) {
      window.open(this.props.podcast.link, "_blank"); 
    }
  };

  componentDidUpdate(props) {
    if(this.state.elementWrapperStyle.width != props.width && this.state.elementWrapperStyle.height != props.height) {
      this.setState({elementWrapperStyle: this.generateElementWrapperStyle(props)})
    }
  }

  generateReleaseDateLabelStyle() {
    return {
      bottom: this.state.elementWrapperStyle.width / 3,
      fontSize: this.getSuitableFontSizeForWidth()
    }
  }

  getSuitableFontSizeForWidth() {
    let widthAvailable = this.state.elementWrapperStyle.width
    let fontSizeThatFits = 24

    if(widthAvailable < 100) {
      fontSizeThatFits = 6
    } else if(widthAvailable < 150) {
      fontSizeThatFits = 10
    } else if(widthAvailable < 200) {
      fontSizeThatFits = 14
    } else if(widthAvailable < 250) {
      fontSizeThatFits = 16
    } else if(widthAvailable < 300) {
      fontSizeThatFits = 18
    } else if(widthAvailable < 350) {
      fontSizeThatFits = 20
    } else if(widthAvailable < 400) {
      fontSizeThatFits = 22
    } 

    return fontSizeThatFits
  }

  getTreatedDate(date) {
    if(date > 10) {
      return date
    } else {
      return '0' + date
    }
  }


  render() {
    return (
      <a class="link-wrapper" href="#" onClick={this.handlePodcastClick} style={{height: this.props.height, width: this.props.width}}>
        <div class="element-wrapper" style={this.state.elementWrapperStyle}>
          {
            this.state.isPodcastLaunched ? null : 
              <p class="release-date" style={this.generateReleaseDateLabelStyle()}>
                {`Lançamento em: ${this.getTreatedDate(this.props.podcast.releaseDate.getDate())}.${this.props.podcast.releaseDate.getMonth() + 1}.${this.props.podcast.releaseDate.getFullYear()}`}
              </p>
          }
          <img class="background-image" src={this.state.isPodcastLaunched || !this.props.podcast.blackedOutBackgroundImageURL  ? this.props.podcast.backgroundImageURL : this.props.podcast.blackedOutBackgroundImageURL} />
          <img class="foreground-image" src={this.state.isPodcastLaunched ? this.props.podcast.foregroundImageURL : this.props.podcast.foregroundImageURL.replace('.png', '_hidden.png')} />
          <img class="podcast-name" src="./img/caravana_podcasts.png" />
        </div>
      </a>
    );
  }
  
}
