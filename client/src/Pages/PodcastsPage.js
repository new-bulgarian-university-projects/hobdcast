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
        <h1>Episodes listed here</h1>
    
        <div>
          {podcastsData.map(p => <PodcastPanel key={p.id} podcast = {p}/>)}
        </div>
    
      </div>
    )
  }
}

export default PodcastsPage

