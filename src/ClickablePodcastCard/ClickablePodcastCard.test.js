const { expect } = require("@jest/globals");
const { ClickablePodcastCard, DEFAULT_SIZE } = require("./ClickablePodcastCard");

describe("Podcast Image Fetcher", () => {
  it("should generate a valid clickable Podcast card for a valid PodcastID and width values", async () => {

    const podcastID = 'RPG'
    const width = 500

    const result = await ClickablePodcastCard(podcastID, width);

    expect(result).toBeTruthy()
    expect(result).toContain('<div class="element-wrapper">')
    // expect(result).toContain('<style>')
    expect(result).toContain(podcastID.toLowerCase())
  });

  it("should generate a valid clickable Podcast card for a valid PodcastID and a valid string width value", async () => {

    const podcastID = 'RPG'
    const width = '700'

    const result = await ClickablePodcastCard(podcastID, width);

    expect(result).toBeTruthy()
    expect(result).toContain('<div class="element-wrapper">')
    // expect(result).toContain('700px')
    expect(result).toContain(podcastID.toLowerCase())
  });

  it("should generate a valid clickable Podcast card for a valid PodcastID and an INVALID string width value", async () => {

    const podcastID = 'RPG'
    const width = 'invalid_number'

    const result = await ClickablePodcastCard(podcastID, width);

    expect(result).toBeTruthy()
    expect(result).toContain('<div class="element-wrapper">')
    // expect(result).toContain('<style>')
    // expect(result).toContain(DEFAULT_SIZE + 'px')
    expect(result).toContain(podcastID.toLowerCase())
  });

  it("should generate a valid clickable Podcast card for a valid PodcastID, but when width equals null", async () => {

    const podcastID = 'RPG'
    const width = null

    const result = await ClickablePodcastCard(podcastID, width);

    expect(result).toBeTruthy()
    expect(result).toContain('<div class="element-wrapper">')
    // expect(result).toContain('<style>')
    // expect(result).not.toContain('nullpx')
    expect(result).toContain(podcastID.toLowerCase())
  });

  it("should throw an error when inserting null as PodcastID", async () => {

    const podcastID = null
    const width = 500

    let error = null
    let result = null

    try {
      result = await ClickablePodcastCard(podcastID, width);
    } catch(e) {
      error = e
    }
    
    expect(error).toBeTruthy()
    expect(result).toBeFalsy()
    expect(error.message).toBeTruthy()
    expect(error.message).toContain('podcastID missing!')
  });

  it("should throw an error when inserting a PodcastID that doesn't exist", async () => {

    const podcastID = 'RANDOM_TEXT'
    const width = 500

    let error = null
    let result = null

    try {
      result = await ClickablePodcastCard(podcastID, width);
    } catch(e) {
      error = e
    }
    
    expect(error).toBeTruthy()
    expect(result).toBeFalsy()
    expect(error.message).toBeTruthy()
    expect(error.message).toContain('invalid podcastID!')
  });
});