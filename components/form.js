import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <Form className="mb-4 mb-lg-0">
      <h2 class="text-start">Contact Us</h2>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTelephone">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="telephone" placeholder="Enter telephone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTextarea">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Text className="text-muted">
          We will attempt to get in touch with you within 24 hours. If your
          enquiry is more urgent, please give us a call on{" "}
          <a href="#">01232 222333</a>.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 d-none">
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
