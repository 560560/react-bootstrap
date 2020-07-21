import React from 'react';
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {Formik} from "formik";
import * as Yup from 'yup'
import passwordIcon from '../../assets/images/passwordlIcon.svg'
import emailIcon from '../../assets/images/emailIcon.svg'


const getLoginData = (formData) => {

    console.log(formData)

}


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
        <Container>
            <Row className="justify-content-center ">
                <Col xl={5} lg={6} md={8} sm={10} className="col-12">

                    <h1 className="text-center pt-4 pb-3">Login form</h1>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={getLoginData}>

                        {({
                              handleSubmit,
                              handleChange,
                              handleBlur,
                              values,
                              touched,
                              isValid,
                              errors,
                          }) => (
                            <Form noValidate onSubmit={handleSubmit} className="mt-4 " >
                                <Form.Group as={Row} controlId="Email">
                                    <Form.Label column sm={4} className="font-weight-bold text-sm-right  d-sm-block d-none">
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
                                                onChange={handleChange}
                                                value={values.email}
                                                placeholder="Enter your email"
                                                isInvalid={touched.email && !!errors.email}
                                                isValid={touched.email && !errors.email}
                                                autoComplete="email"
                                            />

                                            <Form.Control.Feedback type="invalid" className="text-center ">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Col>

                                </Form.Group>


                                <Form.Group as={Row} controlId="Password">
                                    <Form.Label column sm={4} className="font-weight-bold text-sm-right d-sm-block d-none">
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
                                                placeholder="Enter your password"
                                                onChange={handleChange}
                                                isInvalid={touched.password && !!errors.password}
                                                isValid={touched.password && !errors.password}
                                                autoComplete="new-password"

                                            />
                                            <Form.Control.Feedback type="invalid" className="text-center">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row} controlId="RememberMe" className="d-flex align-items-center justify-content-between">
                                    <Form.Label column sm={4} className="font-weight-bold text-sm-right col-6 order-sm-0 order-1">
                                        Remember Me
                                    </Form.Label>

                                    <Col sm={4} className="col-1 order-sm-1 order-0 text-sm-left text-right">
                                        <Form.Check
                                            required
                                            name="rememberMe"
                                            onChange={handleChange}
                                            id="rememberMe"
                                            className=""
                                        />

                                    </Col>


                                    <Col sm={4} className="d-flex justify-content-end col-3 order-3">
                                        <Button className="" type="submit1" variant="info">Login</Button>
                                    </Col>
                                </Form.Group>
                            </Form>

                        )}

                    </Formik>


                </Col>
            </Row>

        </Container>

    );
}

export default FormikForm;