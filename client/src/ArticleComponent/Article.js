import React, { Component } from 'react';
import { BreadcrumbsItem } from '../Navbar/NavbarInit';
import {Breadcrumb} from 'react-bootstrap'
import {routers} from '../utils/routers';
import {breadcrumbFlows} from '../utils/bcFlow';
import {articlesData } from '../data/articles-mock';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';
import { withRouter } from 'react-router-dom';
import {Image} from 'react-bootstrap';


class Article extends Component{
    render(){
        const articleId = this.props.match.params.id;
        const article = articlesData.find(a => a.id == articleId);
        console.log(article)
        if(article === undefined)
            return;


        const articleBcFlow = breadcrumbFlows.articlesPageFlow;
        articleBcFlow.push({
            name: article.title,
            url: article.url
        });

        let breadcrumbs = <Custombc bcFlow={articleBcFlow} />;

        return(
            <di>
                {breadcrumbs}

                <h2>{article.title}</h2>
                <hr/>
                <p>
                    {article.text}
                </p>
                <Image alt={article.image.alt} 
                        src={article.image.src} 
                        responsive  />
            
                <hr />
                <p class='text-muted'>
                    <small>created on </small> {article.createdOn} <small>by </small> {article.author}
                </p>
                <hr/>
                    
            </di>
        );
    };
}

export default Article;
