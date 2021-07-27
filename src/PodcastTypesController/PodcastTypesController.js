
const podcastTypes = ['rpg', 'cos', 'dl']

const PodcastTypesController = () => ({
  getAllPodcastTypes: () => {
    return podcastTypes
  },
  checkValidityOfPodcastID: (podcastID) => {
    return podcastID ? podcastTypes.includes(podcastID.toLowerCase()) : false
  },
});

module.exports = PodcastTypesController;