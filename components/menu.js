import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect, useState } from "react";
import Header from "../components/header";

const Menu = () => {
  return (
    <div>
      <section className="section">
        <Container>
          <h2>
            Our <span className="highlight">Menu Options</span>
          </h2>
          <div className="menu-types">
            <Row>
              <Col xs="12" md="4">
                <a href="#menu" className="menu-types-option">
                  <img src="images/breakfast.jpg" alt="Breakfast Menu option" />
                  <h3>Breakfast</h3>
                </a>
              </Col>
              <Col xs="12" md="4">
                <a href="#menu" className="menu-types-option">
                  <img src="images/lunch.jpeg" alt="Lunch Menu option" />
                  <h3>Lunch</h3>
                </a>
              </Col>
              <Col xs="12" md="4">
                <a href="#menu" className="menu-types-option">
                  <img src="images/dinner.jpg" alt="Dinner Menu option" />
                  <h3>Dinner</h3>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="section section--grey" id="menu">
        <Container>
          <div className="menu-container">
            <Row>
              <Col xs="12" lg="4" className="mb-5" id="menu-breakfast">
                <h3 className="menu-type-header">Type of Food</h3>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
              </Col>
              <Col xs="12" lg="4" className="mb-5" id="menu-lunch">
                <h3 className="menu-type-header">Type of Food</h3>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
              </Col>
              <Col xs="12" lg="4" className="mb-5" id="menu-dinner">
                <h3 className="menu-type-header">Type of Food</h3>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
                <div className="menu-item d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Food item</h4>
                    <p>Description</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Menu;
