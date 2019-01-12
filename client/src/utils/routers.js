const  base_path = require('./constants').base_path;

const articlesPage = `${base_path}/articleslist`;
const podcastsPage = `${base_path}/podcastslist`;
const routers = {
    home: '/',
    base: `${base_path}`,
    
    podcastsPage,
    podcast: `${podcastsPage}/podcast`,

    articlesPage,
    article: `${articlesPage}/article`,
    
    aboutPage: `${base_path}/about`,

    termsPage: `${base_path}/terms`
}

exports.routers = routers;