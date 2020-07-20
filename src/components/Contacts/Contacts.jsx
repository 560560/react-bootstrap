import React, {useState} from 'react';

import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Formik} from "formik"
import * as Yup from 'yup'

const getSDataFromForm = (formDadta) => {
    console.log(formDadta)
}


const Contacts = (props) => {

    const [validationRequired, setValidationRequired] = useState(false)


    let initialValues = {
        firstName: "",
        secondName: "",
        email: "",
        message: "",
        checkbox: false
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required("This field is required").max(10),
        secondName: Yup.string().required("This field is required").max(12),
        email: Yup.string().required("This field is required").email("Please enter valid email"),
        message: Yup.string().max(12),
    })


    return (
        <div>
            <Container style={{width: "500px"}}>
                <h1 className="text-center">Contact us</h1>
                <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        validateOnChange={validationRequired}
                        validateOnBlur={validationRequired}
                        onSubmit={(values, {resetForm}) => {
                            getSDataFromForm(values)
                            resetForm()
                        }}
                >
                    {({
                          handleSubmit,
                          handleChange,
                          isValid,
                          values,
                          touched,
                          errors
                      }) => (


                        <Form noValidate onSubmit={handleSubmit}>

                            <Row className="mt-4 mb-3">

                                <Col>

                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type="text"
                                                  name="firstName"
                                                  value={values.firstName}
                                                  placeholder="Enter your first name"
                                                  onChange={handleChange}
                                                  isValid={touched.firstName && !errors.firstName}
                                                  isInvalid={touched.firstName && !!errors.firstName}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" className="justify-content-end d-flex">
                                        {errors.firstName}
                                    </Form.Control.Feedback>

                                </Col>
                                <Col>

                                    <Form.Label>Second name</Form.Label>
                                    <Form.Control type="text"
                                                  name="secondName"
                                                  value={values.secondName}
                                                  placeholder="Enter your second name"
                                                  onChange={handleChange}
                                                  isValid={touched.secondName && !errors.secondName}
                                                  isInvalid={touched.secondName && !!errors.secondName}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" className="justify-content-end d-flex">
                                        {errors.secondName}
                                    </Form.Control.Feedback>

                                </Col>
                            </Row>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                              name="email"
                                              value={values.email}
                                              placeholder="Enter email"
                                              onChange={handleChange}
                                              isInvalid={touched.email && !!errors.email}
                                              isValid={touched.email && !errors.email}
                                />
                                <Row>
                                    <Col sm={7}><Form.Text muted>We'll never share your email with anyone
                                        else.</Form.Text></Col>
                                    <Col sm={5}>
                                        <Form.Control.Feedback type="invalid" className="justify-content-end d-flex ">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group controlId="formBasicMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea"
                                              name="message"
                                              rows="3"
                                              value={values.message}
                                              onChange={handleChange}
                                              isInvalid={touched.message && !!errors.message}
                                />
                                <Form.Control.Feedback type="invalid" className="justify-content-end d-flex ">
                                    {errors.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox"
                                            name="checkbox"
                                            label="Check me out"
                                            onChange={handleChange}

                                />
                            </Form.Group>
                            <Button variant="primary" type="submit"
                                    onClick={() => setValidationRequired(true)}>Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    );
}


export default Contacts;