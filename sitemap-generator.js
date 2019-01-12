const routers = require('./client/src/utils/routers').routers;
const sm = require('sitemap');
const articlesImages = require('./client/src/data/articles-mock').articleImages;
const podcastMaterials =  require('./client/src/data/podcasts-mock'); 
const constants = require('./client/src/utils/constants');
const podcastImages = podcastMaterials.podcastImages;
const podcastVideos = podcastMaterials.podcastVideos;

const hostname = process.env.NODE_ENV ? process.env.REACT_APP_DOMAIN  : 'http://localhost:3000';

const routesArray = Object.keys(routers).map(key => routers[key]);
console.log(routesArray);
const xml_sitemap = sm.createSitemap ({
    hostname: hostname,
    cacheTime: 600000,        // 600 sec - cache purge period
    urls: routesArray
  });

const image_sitemap = sm.createSitemap({
    urls:[{
        url: `${constants.serverUrl}/${routers.articlesPage}`,
        img: articlesImages.map(i => {
            return {
                url: hostname + i.url,
                caption: i.text,
                title: i.title,
                geoLocation: 'Sofia, Bulgaria'
            }
        })
    },{
        url: `${constants.serverUrl}/${routers.podcastsPage}`,
        img: podcastImages.map(i =>{
            return {
                url: i.url,
                caption: i.text,
                title: i.title,
                geoLocation: 'Sofia, Bulgaria'
            }
        })
    }]
})

const video_sitemap = sm.createSitemap({
    urls: [{
      url: `${constants.serverUrl}${routers.podcastsPage}`,
      video: podcastVideos.map(v => {
          return {
              "thumbnail_loc": v.thumb,
              title: v.title,
              description: v.description
          }
      })
    }]
});

module.exports = {
    xml_sitemap,
    image_sitemap,
    video_sitemap
}

