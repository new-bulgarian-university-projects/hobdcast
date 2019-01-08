import React, { Component } from 'react'
import { Glyphicon, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import MenuItem from './MenuItem'
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

        <NavDropdown id="basic-nav-dropdown" eventKey={3}
          title={
            <span><Glyphicon glyph="glyphicon glyphicon-plus" /> More</span>
          }
        >
          <MenuItem glyph="calendar" to={base_path+'/tools/events'} eventKey={3.2}>
            Events
          </MenuItem>
          <MenuItem glyph="signal" to={base_path+'/tools/statistics'} eventKey={3.1}>
            Statistics
          </MenuItem>
          <MenuItem glyph="wrench" to={base_path+'/tools/settings'} eventKey={3.3}>
            Settings
          </MenuItem>
        </NavDropdown>

      </Nav>

      <Nav pullRight>
       <Button>Hi</Button>
      </Nav>

    </Navbar.Collapse>

  </Navbar>)
        }

export default TheNavbar

