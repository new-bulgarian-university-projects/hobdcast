import React, { Component } from 'react';
import {Col, Thumbnail, Button, Image} from 'react-bootstrap'
import {routers} from '../utils/routers'
import { Link } from "react-router-dom";
import { base_path } from '../utils/constants';

class ArticlePanel extends Component{
    render(){
            const maxHeight = `${this.props.article.image.heigth}px`;
            const maxWidth = `${this.props.article.image.width}px`;
            
            const imageStyle={
                maxHeight,
                maxWidth,
                width: '100%',
                heigth:'auto'
            };
            
            const descrStyle = {
                marginTop: '10px',
                fontSize: '20px'
            };

        return(    
            <Link to={`${routers.article}/${this.props.article.id}`}>
              <Col xs={5} md={5}>
                <Thumbnail>
                        <h3 class='text-muted'>
                            {this.props.article.title}
                        </h3>
                  <hr/>
                  <Image alt={this.props.article.image.alt} 
                         src={this.props.article.image.src} 
                         responsive 
                         style={imageStyle} />
                  <p 
                    style={descrStyle}
                    class='text-muted'
                    >
                    {this.props.article.description}</p>
                  <p>
                  {/* <Link to={routers.article + `/${this.props.article.id}`}>
                    <Button bsStyle="success">
                        Read
                    </Button>
                  </Link> */}
                  </p>
                </Thumbnail>
              </Col>
              </Link>
        )
    }
}

export default ArticlePanel