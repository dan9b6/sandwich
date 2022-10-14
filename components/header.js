import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  const toggle = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    setNavToggle(false);
  }, []);

  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" className="shadow">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <h1 className="h2">
                Sams <span>Baps</span>
              </h1>
            </Navbar.Brand>
          </Link>
          <div className="ms-auto d-flex">
            <a className="navbar-phone d-lg-none text-white">
              Order now <FontAwesomeIcon icon={faPhone} />
            </a>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={toggle}
              className={
                navToggle ? "navbar-toggle-btn active" : "navbar-toggle-btn "
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Menus" id="basic-nav-dropdown">
                <NavDropdown.Item href="/menu">All Menus</NavDropdown.Item>
                <NavDropdown.Divider />
                <Link href="/menu" passHref>
                  <NavDropdown.Item>Breakfast</NavDropdown.Item>
                </Link>
                <Link href="/menu" passHref>
                  <NavDropdown.Item>Lunch</NavDropdown.Item>
                </Link>
                <Link href="/menu" passHref>
                  <NavDropdown.Item>Dinner</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link href="/location" passHref>
                <Nav.Link eventKey={2}>Location</Nav.Link>
              </Link>
              <Link href="/contact" passHref>
                <Nav.Link eventKey={2}>Contact</Nav.Link>
              </Link>
              <Nav.Link
                eventKey={4}
                href="tel:000"
                className="navbar-phone text-white d-none d-lg-block"
              >
                Order now{" "}
                <FontAwesomeIcon icon={faPhone} className="text-white" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
