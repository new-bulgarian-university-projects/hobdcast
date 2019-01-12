import React, { Component } from 'react';
import {breadcrumbFlows} from '../utils/bcFlow';
import {articlesData } from '../data/articles-mock';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';
import {Image} from 'react-bootstrap';


class Article extends Component{
    render(){
        const articleId = this.props.match.params.id;
        const article = articlesData.find(a => a.id == articleId);
        if(article === undefined)
            return;

        const articleBcFlow = breadcrumbFlows.articlesPageFlow.slice();
        articleBcFlow.push({
            name: article.title,
            url: article.url
        });
        let breadcrumbs = <Custombc bcFlow={articleBcFlow} />;

        const textStyle = {
            fontSize: '18px'
        };

        return(
            <div>
                {breadcrumbs}

                <h1>
                    <span class='text-muted'>
                        {article.title}
                    </span>
                </h1>
                <hr/>
                <p style={textStyle}>
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
                    
            </div>
        );
    };
}

export default Article;
