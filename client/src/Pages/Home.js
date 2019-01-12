import React, { Component } from 'react'
import {breadcrumbFlows} from '../utils/bcFlow';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';
import Googlemap from '../GoogleMapComponent/Googlemap'; 

class Home extends Component {

  render(){
    return(
    <div>
      <Custombc bcFlow={breadcrumbFlows.home} />

      <Googlemap
        isMarkerShown
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

      <h1>Home Page</h1>
      <div>
      Hodbcast is a platform for us, our hobbies and out passions. 
      Here you can find all of our project we are working on and all of our members posts. 
      We want to share with everyone the things we love and hopefully to create one great 
      community that shares their passions and become better in every possible aspect. 
      The first project we managed to start is our podcast. We are 100 
      episodes in so far and a lot more interesting stuff is yet to come. 
      Another idea that we had and it turned out great is our Articles page. With if 
      everyone of us can write an article and tell you about something that is interesting for him. 
      The response from you is amazing so far and we are really excited here at hobdcast to work on these projects.
      </div>
    </div>
    )
  }
}

export default Home

