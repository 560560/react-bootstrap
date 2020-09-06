import React, { useState } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const getSDataFromForm = (formDadta) => {
  console.log(formDadta);
};

const Contacts = (props) => {
  const [validationRequired, setValidationRequired] = useState(false);

  let initialValues = {
    firstName: "",
    secondName: "",
    email: "",
    message: "",
    checkbox: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required").max(10),
    secondName: Yup.string().required("Second name is required").max(12),
    email: Yup.string()
      .required("Email is required")
      .email("Enter valid email"),
    message: Yup.string().max(12),
  });

  return (
    <div className="contacts-wrapper">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xl={6} lg={7} md={9} sm={10} className="col-12">
            <h1 className="text-center">Contact us</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnChange={validationRequired}
              validateOnBlur={validationRequired}
              onSubmit={(values, { resetForm }) => {
                getSDataFromForm(values);
                resetForm();
              }}
            >
              {({
                handleSubmit,
                handleChange,
                isValid,
                values,
                touched,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mt-4 mb-3">
                    {[
                      { title: "First name", dataLabel: "firstName" },
                      { title: "Second name", dataLabel: "secondName" },
                    ].map((item, i) => (
                      <Col key={i}>
                        <Form.Label>{item.title}</Form.Label>
                        <Form.Control
                          type="text"
                          name={item.dataLabel}
                          value={values[item.dataLabel]}
                          placeholder={item.title}
                          onChange={handleChange}
                          isValid={
                            touched[item.dataLabel] && !errors[item.dataLabel]
                          }
                          isInvalid={
                            touched[item.dataLabel] && !!errors[item.dataLabel]
                          }
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback
                          type="invalid"
                          className="justify-content-end d-flex"
                        >
                          {errors[item.dataLabel]}
                        </Form.Control.Feedback>
                      </Col>
                    ))}
                  </Row>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="Enter email"
                      onChange={handleChange}
                      isInvalid={touched.email && !!errors.email}
                      isValid={touched.email && !errors.email}
                    />
                    <Row>
                      <Col sm={7} className="col-7">
                        <Form.Text muted>We'll never share email.</Form.Text>
                      </Col>
                      <Col sm={5} className="col-5">
                        <Form.Control.Feedback
                          type="invalid"
                          className="justify-content-end d-flex "
                        >
                          {errors.email}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows="3"
                      value={values.message}
                      onChange={handleChange}
                      isInvalid={touched.message && !!errors.message}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="justify-content-end d-flex "
                    >
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox" className="contacts-footer">
                    <Form.Check
                      type="checkbox"
                      name="checkbox"
                      label="Check me out"
                      onChange={handleChange}
                    />
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => setValidationRequired(true)}
                    >
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;
