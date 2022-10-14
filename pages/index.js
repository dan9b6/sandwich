import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/header";
import Menu from "../components/menu";
import Form from "../components/form";
import Social from "../components/social";

export default function Home() {
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
      <Menu />
      <section className="section section--map" id="location">
        <Container>
          <Row>
            <Col xs="12" lg="6">
              <div className="location-details py-5 px-3">
                <h2>
                  Our <span className="highlight">Opening Hours</span>
                </h2>
                <ul>
                  <li>
                    <p>Monday: </p>
                    <p>08:00 - 17:00</p>
                  </li>
                  <li>
                    <p>Tuesday: </p>
                    <p>08:00 - 17:00</p>
                  </li>
                  <li>
                    <p>Wednesday: </p>
                    <p>08:00 - 17:00</p>
                  </li>
                  <li>
                    <p>Thursday: </p>
                    <p>08:00 - 17:00</p>
                  </li>
                  <li>
                    <p>Friday: </p>
                    <p>08:00 - 17:00</p>
                  </li>
                  <li>
                    <p>Saturday: </p>
                    <p>08:00 - 17:00</p>
                  </li>
                  <li>
                    <p>Sunday: </p>
                    <p>08:00 - 17:00</p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div className="location-details py-5 px-3">
                <h2>
                  Our <span className="highlight">Location</span>
                </h2>
                <p>Map to go here</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section" id="contact">
        <Container>
          <Row>
            <Col xs="12" lg="6">
              <Form />
            </Col>
            <Col xs="12" lg="6">
              <Social />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
