
const foregroundConstantURL = 'https://github.com/caravana-do-absurdo/pop-out-on-hover-element/blob/main/res/img/$ID_OF_PODCAST_foreground.png?raw=true'
const backgroundConstantURL = 'https://github.com/caravana-do-absurdo/pop-out-on-hover-element/blob/main/res/img/$ID_OF_PODCAST_background.png?raw=true'
const podcastURLs = {
  rpg: 'https://caravanadoabsurdo.com.br/tag/mas-e-o-rpg/',
  cos: 'https://caravanadoabsurdo.com.br/tag/maldicao-de-strahd/',
  dl:  'https://caravanadoabsurdo.com.br/tag/descanso-longo/'
}

const PodcastInfoFetcher = (podcastID) => ({
  getForegroundImageURL: () => {
    return foregroundConstantURL.replace('$ID_OF_PODCAST', podcastID.toLowerCase());
  },
  getBackgroundImageURL: () => {
    return backgroundConstantURL.replace('$ID_OF_PODCAST', podcastID.toLowerCase());
  },
  getOnClickURLToRedirect: () => {
    return podcastURLs[podcastID] ? podcastURLs[podcastID] : null
  }
});

module.exports = PodcastInfoFetcher;