const routers = require('./routers').routers;
function BreadcrumbFlow(name, url){
    this.name = name;
    this.url = url;
}
const home = new BreadcrumbFlow("Home", routers.home);
const about = [
    home,
    new BreadcrumbFlow("About", routers.aboutPage)
];
const articlesPageFlow = [
    home,
    new BreadcrumbFlow("Articles", routers.articlesPage)
];

const podcastsPageFlow = [
    home,
    new BreadcrumbFlow("Podcasts", routers.podcastsPage)
];

let breadcrumbFlows = {
    home,
    about,
    articlesPageFlow,
    podcastsPageFlow
};

export {breadcrumbFlows}
