const path = require('path');
const express = require('express');
const app = express();

const DIST_DIR = __dirname;
const HTML_FILE = path.resolve(DIST_DIR, 'index.html');

console.log('DIST_DIR', DIST_DIR);

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('listen Server' + PORT);
  console.log('Press Ctrl + C to quit.');
});
