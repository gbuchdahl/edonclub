import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact" className="row justify-content-center section">
      <h1 className="section__title col-12">Contact Us</h1>
      <Form
        className="col-11 col-md-6"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <Form.Group controlId="formName">
          <Form.Label className="boardSection__title">Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label className="boardSection__title">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label className="boardSection__title">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            type="text"
            placeholder="Get in touch!"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="formbutton">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
