import React, { Component } from 'react'
import { BreadcrumbsItem } from '../Navbar/NavbarInit';
import {base_path} from '../utils/constants';
import {routers} from '../utils/routers';
const AboutPage = ({children}) => (
  <div>
    <BreadcrumbsItem 
        glyph='glyphicon glyphicon-info' 
        to={routers.aboutPage}>
              &nbsp; About
        </BreadcrumbsItem>

    <h1>About us</h1>
  </div>
)

export default AboutPage
