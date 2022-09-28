import React from "react";
import { Image } from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './auth.css'

const Auth = () => (
    <div className="Auth-form-container">
      <Form className="Auth-form">
      <Form.Group className="mb-3 Auth-form-content" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 Auth-form-content" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 Auth-form-content" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className="d-grid gap-2 mt-3 Auth-form-content">
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </div>
    </Form>
</div>
)

export default Auth;