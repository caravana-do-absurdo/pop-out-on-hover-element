const http = require('http');
const url = require('url');
const { ClickablePodcastCard } = require('./src/ClickablePodcastCard/ClickablePodcastCard');

http.createServer(async (req, res) => {
  const reqURL = url.parse(req.url, true);
  let { podcastID, width } = reqURL.query;

  let result = null

  try {
    result = await ClickablePodcastCard(podcastID, width);

    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('Expires', '-1');
    res.setHeader('Pragma', 'no-cache');

    res.write(result);
    res.end();

  } catch (error) {
    res.write(JSON.stringify(error));
    res.end();
    return;
  }

  
}).listen(process.env.PORT || 3000, function(){
 console.log("Server running on port 3000 🚀");
});