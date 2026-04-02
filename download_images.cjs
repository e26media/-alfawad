const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  'q.png', 'w.png', 'e.png', 'a.png', '1.jpg', '2.jpg', '3.jpg', 'bg.jpg',
  'slider/1.jpg', 'slider/2.jpg', 'slider/3.jpg', 'slider/4.jpg', 'slider/5.jpg', 'slider/6.jpg', 'slider/7.jpg',
  'services/1.jpg', 'services/2.jpg', 'services/3.jpg',
  'client-logo/saudi-aramco.jpg', 'client-logo/SABIC.jpg', 'client-logo/Saudi-electricity.jpg', 'client-logo/Saipem.jpg', 'client-logo/petrofac.jpg', 'client-logo/Royal-commission.jpg'
];

const baseDir = path.resolve('./src/assets/alfawad');

function download(url, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const file = fs.createWriteStream(dest);
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded ' + url);
      });
    } else {
      console.error('Failed ' + url + ' - Status: ' + response.statusCode);
      fs.unlink(dest, () => {});
    }
  }).on('error', (err) => {
    console.error('Error ' + url + ' - ' + err.message);
    fs.unlink(dest, () => {});
  });
}

images.forEach(img => {
  const url = 'https://alfawad.com/images/' + img;
  const dest = path.join(baseDir, img);
  download(url, dest);
});
