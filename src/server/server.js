const path = require('path');
const express = require('express');
const app = express();

const DIST_DIR = __dirname;
console.log('DIST_DIR', DIST_DIR);
const VIEWS = path.resolve(DIST_DIR, 'views');
const HTML_FILE = path.resolve(DIST_DIR, 'index.html');

console.log('VIEWS', VIEWS);

app.use(express.static(VIEWS));

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('listen Server' + PORT);
  console.log('Press Ctrl + C to quit.');
});
