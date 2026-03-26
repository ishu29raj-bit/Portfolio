const https = require('https');

https.get('https://ibb.co/XrX61fpj', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    const match = data.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) {
      console.log(match[1]);
    } else {
      console.log('Not found');
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
