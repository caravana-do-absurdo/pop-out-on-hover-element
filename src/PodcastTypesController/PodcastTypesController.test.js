const { expect } = require("@jest/globals");
const PodcastTypesController = require("./PodcastTypesController");

describe("Podcast Image Fetcher", () => {
  it("should return true when checking validity of podcastID = 'rpg'", async () => {
    const { checkValidityOfPodcastID } = PodcastTypesController()

    const podcastID = 'RPG'
    const result = checkValidityOfPodcastID(podcastID)

    expect(result).toBeTruthy()
  });

  it("should return true when checking validity of podcastID = 'cos'", async () => {
    const { checkValidityOfPodcastID } = PodcastTypesController()

    const podcastID = 'COS'
    const result = checkValidityOfPodcastID(podcastID)

    expect(result).toBeTruthy()
  });

  it("should return true when checking validity of podcastID = 'dl'", async () => {
    const { checkValidityOfPodcastID } = PodcastTypesController()

    const podcastID = 'DL'
    const result = checkValidityOfPodcastID(podcastID)

    expect(result).toBeTruthy()
  });

  it("should return true when checking validity of podcastID = 'random_string'", async () => {
    const { checkValidityOfPodcastID } = PodcastTypesController()

    const podcastID = 'random_string'
    const result = checkValidityOfPodcastID(podcastID)

    expect(result).toBeFalsy()
  });

  it("should return true when checking validity of podcastID = null", async () => {
    const { checkValidityOfPodcastID } = PodcastTypesController()

    const podcastID = null
    const result = checkValidityOfPodcastID(podcastID)

    expect(result).toBeFalsy()
  });
  
});