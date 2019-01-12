const routers = require('./client/src/utils/routers').routers;
const sm = require('sitemap');
const articlesImages = require('./client/src/data/articles-mock').articleImages;
const podcastImages = require('./client/src/data/podcasts-mock').podcastImages;

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
        url: routers.articlesPage,
        img: articlesImages.map(i => {
            return {
                url: hostname + i.url,
                caption: i.text,
                title: i.title,
                geoLocation: 'Sofia, Bulgaria'
            }
        })
    },{
        url: routers.podcastsPage,
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
module.exports = {
    xml_sitemap,
    image_sitemap
}

