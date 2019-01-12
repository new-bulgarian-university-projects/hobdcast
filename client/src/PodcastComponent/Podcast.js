import React, { Component } from 'react';
import { podcastsData } from '../data/podcasts-mock';
import {breadcrumbFlows} from '../utils/bcFlow';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';

class Podcast extends Component{
    render(){
        const podcastId = this.props.match.params.id;
        const podcast = podcastsData.find(p => p.id == podcastId);
        
        if(podcast === undefined)
            return;
        
        let podcastBcFlow = breadcrumbFlows.podcastsPageFlow.slice();
        podcastBcFlow.push({
            name: podcast.title,
            url: podcast.url
        })

        const frameStyle = {
            display: "inline-block",
            width: '35%'
        };

        const descStyle = {
            position: 'absolute',
            display: "inline-block",
            margin: '5px 0 0 10px',
            fontSize: '18px',
            width: '40%'
        };

        const footer = {
            float: 'right',
            display: 'inline-block'
        }

        return(
            <div>
                <Custombc bcFlow={podcastBcFlow} />

                <h3>{podcast.title}</h3>
                <div>

                <iframe style={frameStyle} 
                        title={podcast.title} 
                        width="560" 
                        height="315" 
                        src={podcast.videoUrl} 
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen='true'></iframe>
                    <p style={descStyle}>
                        {podcast.description}
                    </p>
                </div>
                <hr/>
                <p style={footer} class='text-muted'>
                    <small>created on </small> {podcast.date} <small>by </small> {podcast.author}
                </p>
                <hr/>
                    
            </div>
        );
    };
}

export default Podcast;
