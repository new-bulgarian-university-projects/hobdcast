import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import ArticlePanel from '../ArticlePanelComponent/ArticlePanel';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent'
import {articlesData} from '../data/articles-mock'
import {breadcrumbFlows} from '../utils/bcFlow';
import {Helmet} from "react-helmet";

class ArticlesPage extends Component {
  render(){
    let breadcrumbs = <Custombc bcFlow={breadcrumbFlows.articlesPageFlow} />;

    return <div>
       <Helmet>
            <title>hobdcast - Articles Page</title> 
            <meta name="description" content="Page with all of the articles" />
            <meta name="robots" content="index, follow" />
        </Helmet>
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

