
const foregroundConstantURL = 'https://github.com/caravana-do-absurdo/pop-out-on-hover-element/blob/main/res/img/$ID_OF_PODCAST_foreground.png?raw=true'
const backgroundConstantURL = 'https://github.com/caravana-do-absurdo/pop-out-on-hover-element/blob/main/res/img/$ID_OF_PODCAST_background.png?raw=true'

const PodcastImageFetcher = (podcastID) => ({
  getForegroundImageURL: () => {
    return foregroundConstantURL.replace('$ID_OF_PODCAST', podcastID.toLowerCase());
  },
  getBackgroundImageURL: () => {
    return backgroundConstantURL.replace('$ID_OF_PODCAST', podcastID.toLowerCase());
  }
});

module.exports = PodcastImageFetcher;