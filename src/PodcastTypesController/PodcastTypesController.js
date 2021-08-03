
const podcastTypes = ['rpg', 'dl', 'cos']

const PodcastTypesController = () => ({
  getAllPodcastTypes: () => {
    return podcastTypes
  },
  checkValidityOfPodcastID: (podcastID) => {
    return podcastID ? podcastTypes.includes(podcastID.toLowerCase()) : false
  },
});

module.exports = PodcastTypesController;