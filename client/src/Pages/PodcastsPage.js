import React, { Component } from 'react'

import PodcastPanel from '../PodcastPanelComponent/PodcastPanel'
import {breadcrumbFlows} from '../utils/bcFlow';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';

import {podcastsData} from '../data/podcasts-mock';

class PodcastsPage extends Component {
  render(){
    console.log("render podcast page")
    let breadcrumb = <Custombc bcFlow={breadcrumbFlows.podcastsPageFlow}/>;
    return(
      <div>
        {breadcrumb}
        <h2>
          <span class='text-muted'>
            List of <strong>Podcast</strong> episodes
          </span>
        </h2>
        <hr/>
    
        <div>
          {podcastsData.map(p => <PodcastPanel key={p.id} podcast = {p}/>)}
        </div>
    
      </div>
    )
  }
}

export default PodcastsPage

