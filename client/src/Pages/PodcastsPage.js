import React, { Component } from 'react'

import { BreadcrumbsItem } from '../Navbar/NavbarInit';
import PodcastPanel from '../PodcastPanelComponent/PodcastPanel'

import {base_path} from '../utils/constants'

import {podcastsData} from '../data/podcasts-mock';


const PodcastsPage = ({children}) => (
  <div>
    {/* with this it adds this to the breadcrumb route */}
    <BreadcrumbsItem glyph='
      glyphicon glyphicon-sound-stereo' 
      to={base_path+'/podcasts'}>
          &nbsp; Podcast Episodes
    </BreadcrumbsItem>

    <h1>Episodes listed here</h1>

    <div>
      {podcastsData.map(p => <PodcastPanel podcast = {p}/>)}
    </div>

  </div>
)

export default PodcastsPage

