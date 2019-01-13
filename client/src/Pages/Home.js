import React, {Fragment, Component } from 'react'
import {breadcrumbFlows} from '../utils/bcFlow';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';
import {Helmet} from "react-helmet";
import {homeImages} from '../data/home-data';
import {Image} from 'react-bootstrap';

// images
// https://f4.bcbits.com/img/0009799082_10.jpg
// https://posts-cdn.kueez.com/Ch0a1YAjH0PAaeeM/image-UcxZqC5vxlkvGOqb.jpg

class Home extends Component {

  render(){
    const welcomeTextStyle={
      fontSize: '18px'
    }

    const homeDiv = {
      marginBottom: '10px'
    };

    return(
    <div style={homeDiv}>
       <Helmet>
            <title>hobdcast - Home</title> 
            <meta name="description" content='Welcome to the hobdcast website. Here you will explore and ffind different articles and podcasts about hobbies and sports.' />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="sport, articles, hobby, about, sofia, bulgaria, hobbies, podcasts" />
        </Helmet>
      
      <Custombc bcFlow={breadcrumbFlows.home} />

      <section itemScope>
        <h1 itemProp='title'>
           hobdcast
          <small>&nbsp; Welcome</small>
        </h1>
        <hr/>
        <article itemProp='text'>   
          <p style={welcomeTextStyle}>
          <strong className='text-muted'>Hobdcast</strong> is a platform for us, our <strong className='text-muted'>hobbies</strong> and out passions. 
            Here you can find all of our project we are working on and all of our members posts. 
            We want to share with everyone the things we love and hopefully to create one great 
            community that shares their passions and become better in every possible aspect. 
            The first project we managed to start is our <strong className='text-muted'>podcasts</strong>. We are 100 
            episodes in so far and a lot more interesting stuff is yet to come. 
            Another idea that we had and it turned out great is our <strong className='text-muted'>Articles</strong> page. With if 
            everyone of us can write an article and tell you about something that is interesting for him. 
            The response from you is amazing so far and we are really excited here at hobdcast to work on these projects.
          </p>
          {homeImages.map(i => <Image 
                              src={i.url}
                              alt={i.alt}
                              style={{width: '40%', display:'inline-block'}} 
                              responsive/>)}
        </article>
       
      </section>
    </div>
    )
  }
}

export default Home

