import scrape from 'website-scraper';
import path from 'path';

const options = {
  urls: ['https://alfawad.com/'],
  directory: path.join(process.cwd(), 'public', 'alfawad'),
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'},
    {selector: 'script', attr: 'src'}
  ]
};

scrape(options).then((result) => {
  console.log('Website successfully downloaded');
}).catch((err) => {
  console.error("Error downloading website", err);
});
