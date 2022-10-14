import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-banner">
        <Container>
          <div className="text-center">
            <h3 className="h6 d-flex align-items-center justify-content-center">
              Follow our socials for latest offers and promotions:{" "}
              <a href="#" className="icon icon-facebook ms-3"></a>{" "}
              <a href="#" className="icon icon-instagram ms-3"></a>{" "}
            </h3>
          </div>
        </Container>
      </div>
      <Container>
        <Row>
          <Col xs="12" lg="3">
            <h3>Links</h3>
            <ul>
              <li>Home</li>
              <li>Menus</li>
              <li>Location</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col xs="12" lg="3">
            <h3>Header</h3>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </Col>
          <Col xs="12" lg="3">
            <h3>Header</h3>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </Col>
          <Col xs="12" lg="3">
            <h3>Header</h3>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright">
        <Container>
          <div className="text-center">
            <small>
              <a href="/privacy-policy">Privacy Policy</a> - Copyright 2022 -{" "}
              <a href="mailto:danbh7296@gmail.com">Dan Burton</a>
            </small>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
