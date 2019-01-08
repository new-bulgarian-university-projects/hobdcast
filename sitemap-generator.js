const routers = require('./client/src/utils/routers').routers;
const sm = require('sitemap');

const hostname = process.env.NODE_ENV 
                    ? process.env.REACT_APP_DOMAIN  : 'http://localhost:3000';

                    
const routesArray = Object.keys(routers).map(key => routers[key]);
console.log(routesArray);
const xml_sitemap = sm.createSitemap ({
    hostname: hostname,
    cacheTime: 600000,        // 600 sec - cache purge period
    urls: routesArray
  });
  
// console.log(xml_sitemap.toString());

module.exports = {
    xml_sitemap
}

