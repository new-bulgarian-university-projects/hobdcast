import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import Navbar from './Navbar'
import Home from './Pages/Home'
import PodcastsPage from './Pages/PodcastsPage'
import ArticlesPage from './Pages/ArticlesPage'
import AboutPage from './Pages/AboutPage'

import {routers} from './utils/routers';
import Article from './ArticleComponent/Article';
import Podcast from './PodcastComponent/Podcast';


class App extends Component {
  render() {
    return (
      <div>       
        <Navbar/>

        <Grid>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path={routers.base} component={Home} />
            <Route exact path={`${routers.podcast}/:id`} component={Podcast} />
            <Route path={routers.podcastsPage} component={PodcastsPage} />
            <Route exact path={`${routers.article}/:id`} component={Article} />
            <Route path={routers.articlesPage} component={ArticlesPage} />
            <Route path={routers.aboutPage} component={AboutPage} />
          </Switch>
        </Grid>

      </div>
    );
  }
}

export default App;
