const PodcastInfoFetcher = require("../PodcastInfoFetcher/PodcastInfoFetcher");
const PodcastTypesController = require("../PodcastTypesController/PodcastTypesController");

const DEFAULT_SIZE = 500

const ClickablePodcastCard = async (podcastID, width) => {
  try {
    isPodcastValid(podcastID)
  } catch(error) {
    console.log('catched', error)
    throw(error)
  }

  const {foregroundImgURL, backgroundImgURL, blackedOutBackgroundImgURL, onClickURLToRedirect, releaseDate, isPodcastAvailable} = fetchAllDataForPodcastID(podcastID)
  width = parseInt(width) || DEFAULT_SIZE

  let backgroundImgURLToUse = backgroundImgURL
  if(podcastID == 'cos' && !isPodcastAvailable) {
    backgroundImgURLToUse = blackedOutBackgroundImgURL
  }

  return `
    <a class="link-wrapper" href="${onClickURLToRedirect}" target="_blank">
      <div class="element-wrapper">
        ${isPodcastAvailable ? '' : `<p class="release-date">Lan&ccedil;amento em: </br>${releaseDate.getDate()}.${releaseDate.getMonth() + 1}.${releaseDate.getFullYear()}</p>`}
        <img class="background-image" src="${backgroundImgURLToUse}" />
        <img class="foreground-image ${isPodcastAvailable ? '' : 'hidden'}" src="${foregroundImgURL}" />
        <img class="podcast-name" src="https://github.com/caravana-do-absurdo/pop-out-on-hover-element/blob/main/res/img/caravana_podcasts.png?raw=true" />
      </div>
    </a>
  `;
};

const isPodcastValid = (podcastID) => {
  let { checkValidityOfPodcastID } = PodcastTypesController()

  if(!podcastID) {
    throw({message: 'podcastID missing!'})
  } else if(!checkValidityOfPodcastID(podcastID)) {
    throw({message: 'invalid podcastID!'})
  }

  return true
};

const fetchAllDataForPodcastID = (podcastID) => {
  const { getForegroundImageURL, getBackgroundImageURL, getBlackedOutBackgroundImageURL, getOnClickURLToRedirect, getReleaseDate, isPodcastReleased } = PodcastInfoFetcher(podcastID);

  const foregroundImgURL = getForegroundImageURL()
  const backgroundImgURL = getBackgroundImageURL()
  const blackedOutBackgroundImgURL= getBlackedOutBackgroundImageURL()
  const onClickURLToRedirect = getOnClickURLToRedirect()
  const releaseDate = getReleaseDate()
  const isPodcastAvailable = isPodcastReleased(new Date())

  return {foregroundImgURL, backgroundImgURL, blackedOutBackgroundImgURL, onClickURLToRedirect, releaseDate, isPodcastAvailable}
}

module.exports = {
  DEFAULT_SIZE,
  ClickablePodcastCard,
};