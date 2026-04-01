const fs = require('fs');
const path = require('path');

const directories = [
  './src/components/alfawad',
  './src/pages/alfawad'
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Update Tailwind classes
      content = content.replace(/text-orange-500/g, 'text-alfawad-primary');
      content = content.replace(/bg-orange-500/g, 'bg-alfawad-primary');
      content = content.replace(/border-orange-500/g, 'border-alfawad-primary');
      content = content.replace(/border-t-orange-500/g, 'border-t-alfawad-primary');
      content = content.replace(/border-b-orange-500/g, 'border-b-alfawad-primary');
      content = content.replace(/border-l-orange-500/g, 'border-l-alfawad-primary');
      content = content.replace(/border-r-orange-500/g, 'border-r-alfawad-primary');
      
      content = content.replace(/hover:text-orange-500/g, 'hover:text-alfawad-primary');
      content = content.replace(/hover:bg-orange-500/g, 'hover:bg-alfawad-primary');
      content = content.replace(/hover:border-orange-500/g, 'hover:border-alfawad-primary');
      
      content = content.replace(/group-hover:text-orange-500/g, 'group-hover:text-alfawad-primary');
      content = content.replace(/group-hover:bg-orange-500/g, 'group-hover:bg-alfawad-primary');
      content = content.replace(/group-hover:border-orange-500/g, 'group-hover:border-alfawad-primary');

      content = content.replace(/text-orange-600/g, 'text-[#c42924]');
      content = content.replace(/bg-orange-600/g, 'bg-[#c42924]');

      content = content.replace(/text-orange-400/g, 'text-[#ff6b66]');
      content = content.replace(/bg-orange-400/g, 'bg-[#ff6b66]');

      // Light backgrounds
      content = content.replace(/bg-orange-50\/50/g, 'bg-red-50/50');
      content = content.replace(/bg-orange-50/g, 'bg-red-50');
      content = content.replace(/border-orange-100/g, 'border-red-100');
      content = content.replace(/border-orange-200/g, 'border-red-200');
      content = content.replace(/bg-orange-100/g, 'bg-red-100');
      content = content.replace(/text-orange-100/g, 'text-red-100');
      content = content.replace(/text-orange-200/g, 'text-red-200');
      content = content.replace(/text-orange-800/g, 'text-red-800');

      fs.writeFileSync(fullPath, content, 'utf8');
      console.log('Updated:', fullPath);
    }
  }
}

directories.forEach(processDirectory);
console.log('Done replacing tokens.');
