import React, { Component } from 'react'
import {breadcrumbFlows} from '../utils/bcFlow';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';

class Home extends Component {

  render(){
    return(
    <div>
      <Custombc bcFlow={breadcrumbFlows.home} />
      <h1>Home Page</h1>
    </div>
    )
  }
}

export default Home

