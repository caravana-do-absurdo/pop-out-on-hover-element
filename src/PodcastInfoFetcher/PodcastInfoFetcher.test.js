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

  it("should generate a valid URL for PodcastID = 'rpg'", async () => {

    const podcastID = 'RPG'

    const { getOnClickURLToRedirect } = PodcastInfoFetcher(podcastID);

    const redirectURL = getOnClickURLToRedirect()

    expect(redirectURL).toBeTruthy()
    expect(redirectURL).toContain('caravanadoabsurdo.com.br/tag/mas-e-o-rpg/')
  });

  it("should generate a valid URL for PodcastID = 'cos'", async () => {

    const podcastID = 'COS'

    const { getOnClickURLToRedirect } = PodcastInfoFetcher(podcastID);

    const redirectURL = getOnClickURLToRedirect()

    expect(redirectURL).toBeTruthy()
    expect(redirectURL).toContain('caravanadoabsurdo.com.br/tag/maldicao-de-strahd/')
  });

  it("should generate a valid URL for PodcastID = 'dl'", async () => {

    const podcastID = 'DL'

    const { getOnClickURLToRedirect } = PodcastInfoFetcher(podcastID);

    const redirectURL = getOnClickURLToRedirect()

    expect(redirectURL).toBeTruthy()
    expect(redirectURL).toContain('caravanadoabsurdo.com.br/tag/descanso-longo/')
  });

  it("should return null when PodcastID has an invalid value", async () => {

    const podcastID = 'bla_bla_bla'

    const { getOnClickURLToRedirect } = PodcastInfoFetcher(podcastID);

    const redirectURL = getOnClickURLToRedirect()

    expect(redirectURL).toBe(null)
  });

  
});