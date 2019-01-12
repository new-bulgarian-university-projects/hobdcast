import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import constants from '../utils/constants';
class Footer extends Component{
    render(){
        console.log(constants.serverUrl)
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href={`${constants.serverUrl}/xml/sitemap`}>
                        Sitemap
                    </NavItem>
                    <NavItem eventKey={2} href={`${constants.serverUrl}/xml/imagemap`}>
                        Imagemap
                    </NavItem>
                    <NavItem eventKey={3} href={`${constants.serverUrl}/xml/videomap`}>
                        Videomap
                    </NavItem>
                    </Nav>
                
                </Navbar.Collapse>
                </Navbar>;
            </div>
        )
    }
}

export default Footer;