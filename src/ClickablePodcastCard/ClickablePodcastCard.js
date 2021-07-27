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

  const {foregroundImgURL, backgroundImgURL, onClickURLToRedirect} = fetchAllDataForPodcastID(podcastID)
  width = parseInt(width) || DEFAULT_SIZE

  return `
    <a class="link-wrapper" href="${onClickURLToRedirect}" target="_blank">
      <div class="element-wrapper">
        <img class="background-image" src="${backgroundImgURL}" />
        <img class="static-foreground-image" src="${foregroundImgURL}" />
        <img class="foreground-image" src="${foregroundImgURL}" />
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
  const { getForegroundImageURL, getBackgroundImageURL, getOnClickURLToRedirect } = PodcastInfoFetcher(podcastID);

  const foregroundImgURL = getForegroundImageURL()
  const backgroundImgURL = getBackgroundImageURL()
  const onClickURLToRedirect = getOnClickURLToRedirect()

  return {foregroundImgURL, backgroundImgURL, onClickURLToRedirect}
}

module.exports = {
  DEFAULT_SIZE,
  ClickablePodcastCard,
};