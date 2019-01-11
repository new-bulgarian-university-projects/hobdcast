import React, { Component } from 'react'
import {breadcrumbFlows} from '../utils/bcFlow';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';

const Home = ({children}) => (
  <div>
    <Custombc bcFlow={breadcrumbFlows.home} />
    <h1>Home Page</h1>
  </div>
)

export default Home

