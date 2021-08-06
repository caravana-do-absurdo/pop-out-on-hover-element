
const foregroundConstantURL = 'https://github.com/caravana-do-absurdo/pop-out-on-hover-element/blob/main/res/img/$ID_OF_PODCAST_foreground.png?raw=true'
const backgroundConstantURL = 'https://github.com/caravana-do-absurdo/pop-out-on-hover-element/blob/main/res/img/$ID_OF_PODCAST_background.png?raw=true'
const podcastURLs = {
  rpg: 'https://caravanadoabsurdo.com.br/tag/mas-e-o-rpg/',
  cos: 'https://caravanadoabsurdo.com.br/tag/maldicao-de-strahd/',
  dl:  'https://caravanadoabsurdo.com.br/tag/descanso-longo/'
}
const getReleaseDate = {
  rpg: new Date('2021-09-30'),
  cos: new Date('2021-10-02'),
  dl:  new Date('2021-10-01')
}

const getTreatedPodcastID = (podcastID) => {
  return podcastID.toLowerCase()
}

const PodcastInfoFetcher = (podcastID) => ({
  getForegroundImageURL: () => {
    return foregroundConstantURL.replace('$ID_OF_PODCAST', podcastID.toLowerCase());
  },
  getBackgroundImageURL: () => {
    return backgroundConstantURL.replace('$ID_OF_PODCAST', podcastID.toLowerCase());
  },
  getOnClickURLToRedirect: () => {
    return podcastURLs[getTreatedPodcastID(podcastID)] ? podcastURLs[getTreatedPodcastID(podcastID)] : null
  },
  getReleaseDate: () => {
    return getReleaseDate[getTreatedPodcastID(podcastID)] ? getReleaseDate[getTreatedPodcastID(podcastID)] : null
  },
  isPodcastReleased: (today) => {
    let releaseDateOfPodcast = getReleaseDate[getTreatedPodcastID(podcastID)] ? getReleaseDate[getTreatedPodcastID(podcastID)] : null
    if(releaseDateOfPodcast == null) {
      return true
    } else {
      return today >= releaseDateOfPodcast
    }
  },
});

module.exports = PodcastInfoFetcher;