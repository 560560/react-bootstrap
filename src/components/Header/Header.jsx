import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import logo from "../../assets/images/logo192.png"

const Header = (props) => {
    return (
        <div>
            <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo}
                             height="30"
                             width="30"
                             className="d-inline-block align-top"
                             alt="Logo"
                        />{' '}React Bootstrap!
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/"> Home </Nav.Link>
                        <Nav.Link href="/formik"> Formik </Nav.Link>
                        <Nav.Link href="/calc"> Calculator </Nav.Link>
                        <Nav.Link href="/todo"> Todo list   </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Form id="responsive-navbar-nav" inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Container>
            </Navbar>

        </div>
    );
}

export default Header;