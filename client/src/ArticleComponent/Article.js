import React, { Component } from 'react';
import { BreadcrumbsItem } from '../Navbar/NavbarInit';
import {routers} from '../utils/routers';
import { articlesData } from '../data/articles-mock';
import {Modal, Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Article extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: true
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

      componentDidUpdate(prevProps){
        if (this.props.location !== prevProps.location) {
            this.setState({ show: true });
          }
      }
    render(){
        const articleId = this.props.match.params.id;
        const article = articlesData.find(a => a.id == articleId);
        console.log(article)
        if(article === undefined)
            return;

        return(
            <div>
                <BreadcrumbsItem 
                    glyph='glyphicon glyphicon-list' 
                    to={`${routers.article}/${articleId}`}>
                        &nbsp;  {articleId}
                </BreadcrumbsItem>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {article.text}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <p class='text-muted'>
                        <small>created on </small> {article.createdOn} <small>by </small> {article.author}
                    </p>
                    <hr/>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
        );
    };
}

export default Article;
