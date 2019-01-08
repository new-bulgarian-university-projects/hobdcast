import React, { Component } from 'react';
import { BreadcrumbsItem } from '../Navbar/NavbarInit';
import {routers} from '../utils/routers';
import { podcastsData } from '../data/podcasts-mock';
import {Modal, Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Podcast extends Component{
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
        const podcastId = this.props.match.params.id;
        const podcast = podcastsData.find(p => p.id == podcastId);
        console.log(podcast)
        if(podcast === undefined)
            return;

        return(
            <div>
                <BreadcrumbsItem 
                    glyph='glyphicon glyphicon-list' 
                    to={`${routers.article}/${podcastId}`}>
                        &nbsp;  {podcastId}
                </BreadcrumbsItem>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{podcast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe title={podcast.title} 
                                width="560" 
                                height="315" 
                                src={podcast.videoUrl} 
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen='true'></iframe>
                    <p>
                        {podcast.description}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <p class='text-muted'>
                        <small>created on </small> {podcast.date} <small>by </small> {podcast.author}
                    </p>
                    <hr/>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
        );
    };
}

export default Podcast;
