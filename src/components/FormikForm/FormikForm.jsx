import React from 'react';
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {Formik} from "formik";
import * as Yup from 'yup'
import passwordIcon from '../../assets/images/passwordlIcon.svg'
import emailIcon from '../../assets/images/emailIcon.svg'


const FormikForm = (props) => {

    const validationSchema = Yup.object({
        email: Yup.string().required("Field is required!").email("Please enter valid email"),
        password: Yup.string().required("Field is required!")
    })

    let initialValues = {
        email: "",
        password: "",
        rememberMe: true
    }


    return (
        <Container style={{width: "500px"}}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={console.log}>

                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit} className="mt-4">
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={4} className="font-weight-bold text-right">
                                Email
                            </Form.Label>
                            <Col sm={8}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">
                                            <img src={emailIcon} alt="Email" width="20"/>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        aria-describedby="inputGroupPrepend"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={touched.email && !!errors.email}
                                        isValid={touched.email && !errors.email}

                                    />

                                    <Form.Control.Feedback type="invalid" className="text-center">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Col>

                        </Form.Group>


                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={4} className="font-weight-bold text-right">
                                Password
                            </Form.Label>
                            <Col sm={8}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">
                                            <img src={passwordIcon} alt="Password" width="20"/>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        aria-describedby="inputGroupPrepend"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={touched.password && !!errors.password}
                                        isValid={touched.password && !errors.password}

                                    />
                                    <Form.Control.Feedback type="invalid" className="text-center d-inline-block">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalRememberMe" className="d-flex align-items-center">
                            <Form.Label column sm={4} className="font-weight-bold text-right">
                                Remember Me
                            </Form.Label>

                            <Col sm={4}>
                                <Form.Check
                                    required
                                    name="rememberMe"
                                    onChange={handleChange}
                                    id="rememberMe"
                                    className=""
                                />

                            </Col>
                            <Col sm={4} className="d-flex  justify-content-end">

                                <Button className="" type="submit">Login</Button>
                            </Col>
                        </Form.Group>

                    </Form>


                )}


            </Formik>

        </Container>

    );
}

export default FormikForm;