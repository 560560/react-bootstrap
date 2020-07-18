import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import reactlogo from "../../assets/images/reactlogo.svg"
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <Navbar  collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={reactlogo}
                             height="30"
                             width="30"
                             className="d-inline-block align-top"
                             alt="Logo"
                        />{' '}React Bootstrap!
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/"> Home </Nav.Link>
                            <Nav.Link as={Link} to="/formik"> Formik </Nav.Link>
                            <Nav.Link as={Link} to="/calculator"> Calculator </Nav.Link>
                            <Nav.Link as={Link} to="/task-list"> Task list </Nav.Link>
                            <Nav.Link as={Link} to="/about"> About us </Nav.Link>
                            <Nav.Link as={Link} to="/contacts"> Contacts </Nav.Link>
                            <Nav.Link as={Link} to="/blog"> Blog </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                    <Form id="responsive-navbar-nav" inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;