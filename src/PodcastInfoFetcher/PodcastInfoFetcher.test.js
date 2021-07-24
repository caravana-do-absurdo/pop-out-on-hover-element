const { expect } = require("@jest/globals");
const PodcastInfoFetcher = require("./PodcastInfoFetcher");

describe("Podcast Image Fetcher", () => {
  it("should generate a valid foreground image URL for a valid Podcast ID", async () => {

    const podcastID = 'RPG'

    const { getForegroundImageURL } = PodcastInfoFetcher(podcastID);

    const foregroundImageURL = getForegroundImageURL()

    expect(foregroundImageURL).toBeTruthy()
    expect(foregroundImageURL).toContain(podcastID.toLowerCase() + '_foreground.png')
    expect(foregroundImageURL).toContain('https://github.com/caravana-do-absurdo/pop-out-on-hover-element/')
  });

  it("should generate a valid background image URL for a valid Podcast ID", async () => {

    const podcastID = 'RPG'

    const { getBackgroundImageURL } = PodcastInfoFetcher(podcastID);

    const backgroundImageURL = getBackgroundImageURL()

    expect(backgroundImageURL).toBeTruthy()
    expect(backgroundImageURL).toContain(podcastID.toLowerCase() + '_background.png')
    expect(backgroundImageURL).toContain('https://github.com/caravana-do-absurdo/pop-out-on-hover-element/')
  });

  
});