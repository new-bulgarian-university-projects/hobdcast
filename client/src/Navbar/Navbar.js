import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import NavItem from './NavItem'
import {base_path} from '../utils/constants'
import {routers} from '../utils/routers';

const TheNavbar = ({children}) => {
  const style = {marginLeft:"10px"};  

  return (<Navbar inverse collapseOnSelect>

    <Navbar.Header>
      <Navbar.Brand>
        <a href={base_path}>
          hobdcast
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>

      <Nav>

        {/* <NavItem glyph="home" to={base_path} eventKey={1}>
          <span style={style} >Home</span>
        </NavItem> */}

        <NavItem glyph="glyphicon glyphicon-sound-stereo" to={routers.podcastsPage} eventKey={2}>
          <span style={style} >Podcast Episodes</span>
        </NavItem>

        <NavItem glyph="glyphicon glyphicon-sound-stereo" to={routers.articlesPage} eventKey={2}>
          <span style={style} >Articles</span>
        </NavItem>

        <NavItem glyph="glyphicon glyphicon-book" to={routers.aboutPage} eventKey={2}>
          <span style={style} >About us</span>
        </NavItem>
      </Nav>

    </Navbar.Collapse>

  </Navbar>)
        }

export default TheNavbar

