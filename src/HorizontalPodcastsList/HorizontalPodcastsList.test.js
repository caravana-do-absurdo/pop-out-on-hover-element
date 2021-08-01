const { expect } = require("@jest/globals");
const { HorizontalPodcastsList, DEFAULT_SIZE } = require("./HorizontalPodcastsList");

describe("Horizontal Podcast List", () => {
  it("should generate a valid horizontal podcast list without the width", async () => {

    const result = await HorizontalPodcastsList();

    expect(result).toBeTruthy()
    expect(result).toContain('<div class="horizontal-slider">')
    expect(result).toContain('rpg')
    expect(result).toContain('dl')
    expect(result).toContain('cos')
    expect(result).toContain('<style>')
  });

  it("should generate a valid horizontal podcast list with a custom width value", async () => {

    const result = await HorizontalPodcastsList(936);

    expect(result).toContain('936px')
    expect(result).toContain(936 * 1.6 + 'px')
  });

  it("should return a default size when width is null", async () => {

    const result = await HorizontalPodcastsList(null);

    expect(result).toContain(DEFAULT_SIZE + 'px')
    expect(result).toContain(DEFAULT_SIZE * 1.6 + 'px')
  });

  
});