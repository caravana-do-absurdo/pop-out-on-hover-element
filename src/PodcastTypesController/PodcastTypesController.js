
const podcastTypes = ['rpg', 'cos', 'dl']

const PodcastTypesController = () => ({
  checkValidityOfPodcastID: (podcastID) => {

    return podcastID ? podcastTypes.includes(podcastID.toLowerCase()) : false
  },
});

module.exports = PodcastTypesController;