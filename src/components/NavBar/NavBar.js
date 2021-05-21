import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./NavBar.css";
import { Button } from "../Button/Button";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <Navbar>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <div className="ml-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <NavDropdown title="Products" className="basic-nav-dropdown">
                  <NavDropdown.Item>Payroll</NavDropdown.Item>
                  <NavDropdown.Item>Time Tracking</NavDropdown.Item>
                  <NavDropdown.Item>Paid Time Off</NavDropdown.Item>
                  <NavDropdown.Item>Integrations</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <Nav.Link href="#accountants">Accountants</Nav.Link>
                <Nav.Link href="#accountants">Pricing</Nav.Link>
                <NavDropdown title="Products" className="ml-auto">
                  <NavDropdown.Item>Blog</NavDropdown.Item>
                  <NavDropdown.Item>Knowledge Base</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
              </Nav>
              <Nav>
                {/* Reusable button components can be used throughtout the entire site, making the code a lot more efficient */}
                <Button
                  className="btn"
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
                >
                  Log In
                </Button>
                <Button
                  className="btn"
                  buttonStyle="btn--primary"
                  buttonSize="btn--large"
                >
                  Sign Up
                </Button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
