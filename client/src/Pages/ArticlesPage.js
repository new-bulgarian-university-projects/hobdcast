import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import ArticlePanel from '../ArticlePanelComponent/ArticlePanel';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent'
import {articlesData} from '../data/articles-mock'
import {breadcrumbFlows} from '../utils/bcFlow';

class ArticlesPage extends Component {
  render(){
    let breadcrumbs = <Custombc bcFlow={breadcrumbFlows.articlesPageFlow} />;

    return <div>
      {breadcrumbs}
      <h1>
        <span class='text-muted'>
          List of <strong> articles </strong>
        </span>
      </h1>
      <hr/>
      <Grid>
        {articlesData.map(a => <ArticlePanel key={a.id} article={a} />)}
      </Grid>
    </div>
  }
}
export default ArticlesPage

