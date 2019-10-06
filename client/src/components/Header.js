import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export class Header extends Component {

  render() {

    const navbarHasCollapsed = !(window.innerWidth >= 992)
    return (
      <div className='font-weight-bold'>
        <Navbar bg="light" expand="lg" style={{ fontSize: navbarHasCollapsed ? "1.5rem" : "1rem" }}>
          <Navbar.Brand
            href="/"
            style={{ maxHeight: 'auto', maxWidth: navbarHasCollapsed ? "70%" : "25%" }}>
            <img
              style={{ maxWidth: '100%', maxHeight: '10rem' }}
              src={require('../images/hlb-logo.png')}
              alt="Hong Leong Bank Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/signUp">Sign Up</Nav.Link>
              <NavDropdown title="Year" id="basic-nav-dropdown">
                {
                  this.props.years.map(year => (
                    <NavDropdown.Item
                      key={year} href={`/${year}`} style={{ fontSize: navbarHasCollapsed ? "1.3rem" : "1rem" }}>
                      {year}
                    </NavDropdown.Item>
                  ))
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
