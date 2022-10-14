import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect, useState } from "react";
import Header from "../components/header";

const Menu = () => {
  return (
    <div>
      <div className="banner banner--menu">
        <Container>
          <div className="banner-text text-center">
            <h1>Our Menu</h1>
          </div>
        </Container>
      </div>

      <section className="section section--grey">
        <Container>
          <div className="menu-container">
            <Row>
              <Col xs="12" lg="4" className="mb-5">
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
              <Col xs="12" lg="4">
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
              <Col xs="12" lg="4">
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

      <section className="section">
        <Container>
          <div className="text-center">
            <h2 className="mb-5">Feeling hungry?</h2>
            <Row>
              <Col xs="12" md="6">
                <div className="text-center">
                  <h3 className="h4">Give us a call and place an order</h3>
                  <a className="btn btn-primary">Order now</a>
                </div>
              </Col>
              <Col xs="12" md="6">
                <div>
                  <h3 className="h4">
                    Not sure where we are? See our location and pop on in
                  </h3>
                  <a className="btn btn-secondary">See our location</a>
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
