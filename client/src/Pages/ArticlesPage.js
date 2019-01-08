import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import { BreadcrumbsItem } from '../Navbar/NavbarInit';
import {base_path} from '../utils/constants';
import { Route } from 'react-router-dom'
import Article from '../ArticleComponent/Article';

import ArticlePanel from '../ArticlePanelComponent/ArticlePanel';

import {articlesData} from '../data/articles-mock'
import {routers} from '../utils/routers';

class ArticlesPage extends Component {
  render(){
    return <div>
      <BreadcrumbsItem 
        glyph='glyphicon glyphicon-book' 
        to={routers.articlesPage}>
              &nbsp; Articles
        </BreadcrumbsItem>

      <h1>Articles list</h1>
      
      <Grid>
        {articlesData.map(a => <ArticlePanel article={a} />)}
      </Grid>

      
    </div>
}
}

export default ArticlesPage

