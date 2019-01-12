import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import { BreadcrumbsItem } from '../Navbar/NavbarInit';
import {base_path} from '../utils/constants';
import { Route } from 'react-router-dom'
import Article from '../ArticleComponent/Article';

import ArticlePanel from '../ArticlePanelComponent/ArticlePanel';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent'

import {articlesData} from '../data/articles-mock'
import {routers} from '../utils/routers';
import {breadcrumbFlows} from '../utils/bcFlow';

class ArticlesPage extends Component {
  render(){
    let breadcrumbs = <Custombc bcFlow={breadcrumbFlows.articlesPageFlow} />;

    return <div>
      {breadcrumbs}
      <h1>Articles list</h1>
      
      <Grid>
        {articlesData.map(a => <ArticlePanel key={a.id} article={a} />)}
      </Grid>

      
    </div>
}
}

export default ArticlesPage

