import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {routers} from '../utils/routers'
import {Col, Thumbnail, Button, Image} from 'react-bootstrap'

class PodcastPanel extends Component{ 
    render(){
       const panelStyle = {
            border: '1px solid #eee',
            boxShadow: '3px 2px #ccc',
            marginBottom: '10px',
            padding:'10px',
            width:'70%'
       }

        const linkStyle = {
            color: 'black',
            textDecoration:'none'
        }

        const maxHeight = `400px`;
        const maxWidth = `250px`;
        
        const imageStyle={
            marginBottom: '10px',
            maxHeight,
            maxWidth,
            width: '100%',
            heigth:'auto'
        };

        return (
            <div>
                <Link style={linkStyle} 
                      to={`${routers.podcast}/${this.props.podcast.id}`}>
                    <div style={panelStyle}>
                        <p>
                            {this.props.podcast.title}
                        </p>
                        <Image alt="podcast image" 
                         src={this.props.podcast.thumb} 
                         responsive 
                         style={imageStyle} />

                        <p>{this.props.podcast.shortDescription}</p>
                        <p>createD on {this.props.podcast.date}</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default PodcastPanel;