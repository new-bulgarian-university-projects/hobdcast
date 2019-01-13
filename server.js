const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const sitemapGenerator = require('./sitemap-generator');

const xml_sitemap = require('./sitemap-generator').xml_sitemap;
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// deply to heroku - https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

// API calls
app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.send(sitemapGenerator.xml_sitemap.toString());
});

app.get('/imagemap.xml', (req, res) => {
    const xml = sitemapGenerator.image_sitemap.toString();
    res.header('Content-Type', 'application/xml');
    res.send(xml);
});

app.get('/videomap.xml', (req, res) => {
    const xml = sitemapGenerator.video_sitemap.toString();
    console.log(process.env.NODE_ENV)
    res.header('Content-Type', 'application/xml');
    res.send(xml);
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));