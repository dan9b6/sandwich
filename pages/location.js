import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Location = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Location;
