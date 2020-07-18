import React, {useState} from 'react';
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";


const Contacts = (props) => {
    return (
        <div>
            <Container style={{width: "500px"}}>
                <h1 className="text-center">Contact us</h1>
                <Form onSubmit={(e) => {
                    e.preventDefault()
                    console.log(e)
                }}>
                    <Row className="mt-4 mb-3">
                        <Col>
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" name="firstName" placeholder="Enter your first name"/>

                        </Col>
                        <Col>
                            <Form.Label>Second name</Form.Label>
                            <Form.Control type="text" name="secondName" placeholder="Enter your second name"/>
                        </Col>
                    </Row>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email"/>
                        <Form.Text muted>We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="password" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="checkbox" label="Check me out"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>


                </Form>
            </Container>
        </div>
    );
}



export default Contacts;