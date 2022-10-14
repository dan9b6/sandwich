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

  if (process.browser) {
    document.querySelectorAll(".nav-link").forEach((el) => {
      el.addEventListener("click", toggle);
    });
  }

  useEffect(() => {
    setNavToggle(false);

    document.querySelectorAll(".nav-link").forEach((el) => {
      el.addEventListener("click", toggle);
    });
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
              <Nav.Link eventKey={2} href="/#menu">
                Menu
              </Nav.Link>
              <Nav.Link eventKey={2} href="/#location">
                Location
              </Nav.Link>
              <Nav.Link eventKey={2} href="/#contact">
                Contact
              </Nav.Link>
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
