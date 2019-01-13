import React, { Component } from 'react'

import PodcastPanel from '../PodcastPanelComponent/PodcastPanel'
import {breadcrumbFlows} from '../utils/bcFlow';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';
import {Helmet} from "react-helmet";

import {podcastsData} from '../data/podcasts-mock';

class PodcastsPage extends Component {
  render(){
    console.log("render podcast page")
    let breadcrumb = <Custombc bcFlow={breadcrumbFlows.podcastsPageFlow}/>;
    return(
      <div itemScope>
        <Helmet>
            <title>hobdcast - Podcast Page</title> 
            <meta name="description" content="Page with all of the podcast episodes" />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="sport, articles, hobdcast, bulgaria, unordinary hobbies, podcasts" />
        </Helmet>
        {breadcrumb}
        <section itemScope itemProp='podcast list'>
            <h1 itemProp='sectionTitle'>
              <span class='text-muted'>
                List of <strong>Podcast</strong> episodes
              </span>
            </h1>
            <hr/>
            <section itemScope itemProp='podcastsPanelList'>
                <div itemProp='podcastPanel'>
                  {podcastsData.map(p => <PodcastPanel key={p.id} podcast = {p}/>)}
                </div>
            </section>
        </section>
    
      </div>
    )
  }
}

export default PodcastsPage

