const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, 'src/pages/alfawad');

function updateFileContent(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const newContent = content.replace(/https:\/\/alfawad\.com\/images\//g, '/src/assets/alfawad/');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Updated: ${path.basename(filePath)}`);
  }
}

fs.readdirSync(targetDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    updateFileContent(path.join(targetDir, file));
  }
});
