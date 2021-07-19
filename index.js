const http = require('http');
const url = require('url');
const ClickablePodcastCard = require('./src/ClickablePodcastCard/ClickablePodcastCard');

http.createServer(async (req, res) => {
  const reqURL = url.parse(req.url, true);
  let { podcast, width = 500 } = reqURL.query;

  width = parseInt(width)

  if (!podcast) {
    res.write(JSON.stringify({error: "Podcast string query missing! insert one of the following: RPG, COS or DL"}));
    res.end();
    return;
  }

  const result = await ClickablePodcastCard(podcast, width);

  res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.setHeader('Expires', '-1');
  res.setHeader('Pragma', 'no-cache');
  //res.writeHead(200, { 'Content-Type': 'image/svg+xml' });

  res.write(result);
  res.end();
}).listen(process.env.PORT || 3000, function(){
 console.log("Server running on port 3000");
});