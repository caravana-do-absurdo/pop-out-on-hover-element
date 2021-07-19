const PodcastImageFetcher = require("../PodcastImageFetcher/PodcastImageFetcher");

const ClickablePodcastCard = async (podcastID, width) => {
  const { getForegroundImageURL, getBackgroundImageURL } = PodcastImageFetcher(podcastID);

  const foregroundImgURL = getForegroundImageURL()
  const backgroundImgURL = getBackgroundImageURL()

  return `
    <div class="element-wrapper">
      <img class="background-image" src="${backgroundImgURL}" />
      <img class="static-foreground-image" src="${foregroundImgURL}" />
      <img class="foreground-image" src="${foregroundImgURL}" />
      <img class="podcast-name" src="https://github.com/caravana-do-absurdo/pop-out-on-hover-element/blob/main/res/img/caravana_podcasts.png?raw=true" />
    </div>
    
    <style>
      .element-wrapper {
        margin: 0px 0px ${width * 0.05}px ${width * 0.1}px;
        position: relative;
        height: ${width * 1.30}px;
        width: ${width}px;
        perspective: ${width * 1.6}px;
        transition: .4s ease;
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
      }
    
      .element-wrapper:hover .background-image {
        transform: rotateX(40deg);
        filter: brightness(50%) blur(2px);
      }
    
      .static-foreground-image {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 80%;
        height: auto;
        transition: .1s ease;
      }
    
      .element-wrapper:hover .static-foreground-image {
        opacity: 0;
      }
      
      .foreground-image {
        opacity: 0;
        position: absolute; 
        bottom: 0px; 
        left: -10%; 
        width: 100%;
        transition: .4s ease;
        filter: brightness(30%);
      }
      
      .element-wrapper:hover .foreground-image {
        filter: brightness(100%);
        opacity: 1;
        bottom: ${width * 0.26}px;
        display: block;
      }
      
      .podcast-name {
        transition: .4s ease;
        position: absolute; 
        bottom: 0px;
        right: 20%;
        max-width: 30%;
        margin: auto;
      }
      
      .element-wrapper:hover .podcast-name {
        bottom: ${width * 0.06}px;
        right: 35%;
        transform: scale(1.3);
        max-width: 40%;
      }
    </style>
  </html>
  `;
};

module.exports = ClickablePodcastCard;