import React, {Component} from 'react'
import {breadcrumbFlows} from '../utils/bcFlow';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';
import Googlemap from '../GoogleMapComponent/Googlemap'; 
import {Helmet} from "react-helmet";

class AboutPage extends Component {
  render(){
    const homeDiv = {
      marginBottom: '10px'
    };

    return(
      <div itemScope style={homeDiv}>
       <Helmet>
            <title>hobdcast - About U</title> 
            <meta name="description" content="About is here in hobdcast" />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="sport, articles, hobby, about, sofia, bulgaria, hobbies, podcasts" />
        </Helmet>
        <Custombc bcFlow={breadcrumbFlows.about} />
        
        <h1 itemProp='title'><small>About us</small></h1>
        <article itemProp='aboutUs'>
            We are friends and enthusiast who are passionate about sports and unordinary hobbies.
            Here we will discuss and upload articles about interesting stuff that you can do in your free time
            to relieve the stress. We are located in Sofia, Bulgaria.
        </article>
        <hr/>
            <Googlemap
            itemProp='location'
            isMarkerShown
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
    </div>
  )} 
}

export default AboutPage
    