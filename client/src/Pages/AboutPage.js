import React from 'react'
import {breadcrumbFlows} from '../utils/bcFlow';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';

const AboutPage = ({children}) => (
  <div>
   <Custombc bcFlow={breadcrumbFlows.about} />

    <h1>About us</h1>
  </div>
)

export default AboutPage
