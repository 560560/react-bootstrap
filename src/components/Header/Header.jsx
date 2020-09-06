import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import reactlogo from "../../assets/images/reactlogo.svg"
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={reactlogo}
                             height="30"
                             width="30"
                             className="d-inline-block align-top"
                             alt="Logo"
                        />{' '}Task List
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/"> Home </Nav.Link>
                            <Nav.Link as={Link} to="/contacts"> Contacts </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
}

export default Header;