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
      <section itemScope>
        <h1 itemProp='title'>
          <span class='text-muted'>
            List of <strong> articles </strong>
          </span>
        </h1>
        <hr/>
        <section itemScope itemProp='articlesPanelList'>
          <Grid itemprop='articlePanel'>
            {articlesData.map(a => <ArticlePanel key={a.id} article={a} />)}
            </Grid>
            </section>
      </section>
    </div>
  }
}
export default ArticlesPage

