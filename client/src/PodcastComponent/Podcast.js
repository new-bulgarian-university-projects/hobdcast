import React, { Component } from 'react';
import { podcastsData } from '../data/podcasts-mock';
import {Modal, Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import {breadcrumbFlows} from '../utils/bcFlow';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';

class Podcast extends Component{
    render(){
        console.log("render")
        const podcastId = this.props.match.params.id;
        const podcast = podcastsData.find(p => p.id == podcastId);
        console.log(podcast)
        if(podcast === undefined)
            return;
        
        let podcastBcFlow = breadcrumbFlows.podcastsPageFlow;
        podcastBcFlow.push({
            name: podcast.title,
            url: podcast.url
        })

        return(
            <div>
                <Custombc bcFlow={podcastBcFlow} />

                <h3>{podcast.title}</h3>

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
                <hr/>
                    <p class='text-muted'>
                        <small>created on </small> {podcast.date} <small>by </small> {podcast.author}
                    </p>
                    <hr/>
                    
            </div>
        );
    };
}

export default Podcast;
