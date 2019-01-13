import React from 'react'
import {breadcrumbFlows} from '../utils/bcFlow';
import Custombc from '../BreacrumbComponent/BreadcrumbComponent';
import Googlemap from '../GoogleMapComponent/Googlemap'; 

const AboutPage = ({children}) => (
  <div>
   <Custombc bcFlow={breadcrumbFlows.about} />

    <h1>About us</h1>
    <Googlemap
          isMarkerShown
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
  </div>
)

export default AboutPage
