import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import constants from '../utils/constants';
import {routers} from '../utils/routers';
class Footer extends Component{
    render(){
        console.log(constants.serverUrl)
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href={`/sitemap.xml`}>
                        Sitemap
                    </NavItem>
                    <NavItem eventKey={2} href={`/imagemap.xml`}>
                        Imagemap
                    </NavItem>
                    <NavItem eventKey={3} href={`/videomap.xml`}>
                        Videomap
                    </NavItem>
                    </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={2} href={`${routers.termsPage}`}>
                        Terms And Conditions
                    </NavItem>
                    </Nav>
                
                </Navbar.Collapse>
                </Navbar>;
            </div>
        )
    }
}

export default Footer;