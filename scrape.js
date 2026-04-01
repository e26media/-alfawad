const https = require('https');
const fs = require('fs');

https.get('https://alfawad.com', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('al.html', data);
    console.log('Saved to al.html');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
