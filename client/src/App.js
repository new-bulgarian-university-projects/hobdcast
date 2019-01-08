import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Grid, Col,Row, Breadcrumb as BootstrapBreadcrumb } from 'react-bootstrap'
import { Breadcrumbs, BreadcrumbsItem } from './Navbar/NavbarInit';

import CrumbItem from './CrumbItems/CrumbItem';
import CrumbIconItem from './CrumbItems/CrumbIconItem';

import Navbar from './Navbar'
import Home from './Pages/Home'
import PodcastsPage from './Pages/PodcastsPage'
import ArticlesPage from './Pages/ArticlesPage'
import AboutPage from './Pages/AboutPage'

import {base_path} from './utils/constants'
import {routers} from './utils/routers';
import Article from './ArticleComponent/Article';
import Podcast from './PodcastComponent/Podcast';


class App extends Component {
  render() {
    return (
      <div>
        <BreadcrumbsItem glyph='home' to={base_path}>
          Home Page
        </BreadcrumbsItem>

        <Navbar/>

        <Breadcrumbs
          item={CrumbIconItem}
          container={BootstrapBreadcrumb}
          finalProps={{active: true}}
          duplicateProps={{to: 'href'}}
       />

        <Grid>
          <Route exact path={routers.base} component={Home} />
          <Route path={routers.podcastsPage} component={PodcastsPage} />
          <Route path={`${routers.article}/:id`} component={Article} />
          <Route path={`${routers.podcast}/:id`} component={Podcast} />
          <Route path={routers.articlesPage} component={ArticlesPage} />
          <Route path={routers.aboutPage} component={AboutPage} />
        </Grid>

        <Breadcrumbs
          item={CrumbItem}
          container={BootstrapBreadcrumb}
          finalProps={{active: true}}
          duplicateProps={{to: 'href'}}
        />

      </div>
    );
  }
}

export default App;
