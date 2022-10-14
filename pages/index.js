import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect, useState } from "react";
import Header from "../components/header";

export default function Home() {
  const [navToggle, setNavToggle] = useState(false);

  const toggle = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    setNavToggle(false);
  }, []);

  return (
    <main>
      <Header />
      <div className="banner">
        <Container>
          <Row>
            <Col xs="12" md="6">
              <div className="banner-text">
                <h1>
                  Delicious Sandwiches <span>done right</span>
                </h1>
                <div>
                  <a className="btn btn-primary me-3" href="">
                    See our menus
                  </a>
                  <a className="btn btn-secondary" href="">
                    Place an order
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section">
        <Container>
          <h2>
            Our <span className="highlight">Menus</span>
          </h2>
          <div className="menu-types">
            <Row>
              <Col xs="12" md="4">
                <div className="menu-types-option">
                  <img src="images/breakfast.jpg" alt="Breakfast Menu option" />
                  <h3>Breakfast</h3>
                </div>
              </Col>
              <Col xs="12" md="4">
                <div className="menu-types-option">
                  <img src="images/lunch.jpeg" alt="Lunch Menu option" />
                  <h3>Lunch</h3>
                </div>
              </Col>
              <Col xs="12" md="4">
                <div className="menu-types-option">
                  <img src="images/dinner.jpg" alt="Dinner Menu option" />
                  <h3>Dinner</h3>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </main>
  );
}
