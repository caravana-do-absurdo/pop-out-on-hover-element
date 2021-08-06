const { ClickablePodcastCard } = require("../ClickablePodcastCard/ClickablePodcastCard");
const PodcastTypesController = require("../PodcastTypesController/PodcastTypesController");

const DEFAULT_SIZE = 500

const HorizontalPodcastsList = async (width) => {
  const { getAllPodcastTypes } = PodcastTypesController()
  let arrayOfPodcastIDs = getAllPodcastTypes()

  let renderedClickablePodcastCards = await renderClickaBlePodcastCardsForIDs(arrayOfPodcastIDs, width)
  width = parseInt(width) || DEFAULT_SIZE

  return `
  <div class="horizontal-slider">
    ${renderedClickablePodcastCards}
  </div>
    
    <style>
      .horizontal-slider {
        width: 100%;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;
      }

      .horizontal-slider::-webkit-scrollbar {
        display: none;
      }

      .horizontal-slider {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }

      a.link-wrapper {
        height: ${width * 1.30}px;
        width: ${width}px;
      }

      .element-wrapper {
        margin: 0px 0px ${width * 0.05}px ${width * 0.1}px;
        position: relative;
        height: ${width * 1.30}px;
        width: ${width}px;
        perspective: ${width * 1.6}px;
        transition: .4s ease;
        -webkit-transition: .4s ease;
        text-align: center;
      }
      
      .background-image {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 80%;
        height: auto;
        transition: .4s ease;
        transform-style: preserve-3d;
        transform: rotateX(0deg);
        filter: brightness(100%);
        -webkit-transition: .4s ease;
        -webkit-transform-style: preserve-3d;
        -webkit-transform: rotateX(0deg);
        -webkit-filter: brightness(100%);
      }
    
      .element-wrapper:hover .background-image {
        transform: rotateX(40deg);
        filter: brightness(50%) blur(2px);
        -webkit-transform: rotateX(40deg);
        -webkit-filter: brightness(50%) blur(2px);
      }

      .release-date {
        z-index: 999;
        position: absolute;
        bottom: ${width / 3}px;
        left: 0px;
        right: 0px;
        text-align: center;
        width: 80%;
        font-size: 24px;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 2px #000;
        transition: .5s ease;
        -webkit-transition: .5s ease;
      }

      .element-wrapper:hover .release-date {
        transform: translate3d(0px, -${width * 0.25}px, ${width / 3}px);
        -webkit-transform: translate3d(0px, -${width * 0.25}px, ${width / 3}px);
      }
      
      .foreground-image {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 80%;
        transition: .5s ease;
        filter: brightness(90%);
        -webkit-transition: .5s ease;
        -webkit-filter: brightness(90%);
      }

      .foreground-image.hidden {
        filter: brightness(0%);
        -webkit-filter: brightness(0%);
      }
      
      .element-wrapper:hover .foreground-image {
        opacity: 1;
        display: block;
        filter: brightness(100%);
        -webkit-filter: brightness(100%)
        transform: translate3d(0px, -${width * 0.35}px, ${width / 3}px);
        -webkit-transform: translate3d(0px, -${width * 0.35}px, ${width / 3}px);
      }

      .element-wrapper:hover .foreground-image.hidden {
        filter: brightness(0%);
        -webkit-filter: brightness(0%);
      }
      
      .podcast-name {
        z-Index: 10;
        position: absolute; 
        bottom: 0px;
        right: 20%;
        max-width: 30%;
        margin: auto;
        transition: .5s ease;
        -webkit-transition: .5s ease;
      }
      
      .element-wrapper:hover .podcast-name {
        transform: scale(1.3) translate3d(-${width * 0.15}px, -${width * 0.15}px, ${width / 3}px);
        -webkit-transform: scale(1.3) translate3d(-${width * 0.15}px, -${width * 0.15}px, ${width / 3}px);
      }
    </style>
  </html>
  `;
};

const renderClickaBlePodcastCardsForIDs = async (podcastIDs, width) => {
  let result = ''
  let promises = podcastIDs.map(async (podcastID) => {
    let renderedClickablePodcastCard = await ClickablePodcastCard(podcastID, width)
    result += renderedClickablePodcastCard
    return renderedClickablePodcastCard
  })

  await Promise.all(promises)

  return result
};

module.exports = {
  DEFAULT_SIZE,
  HorizontalPodcastsList,
};