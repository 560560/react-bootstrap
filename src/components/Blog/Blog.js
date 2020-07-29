import React from 'react';
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import Post from "./Post/Post";

const Blog = (props) => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col lg={9} md={12} sm={12} >
                    {props.posts.map(post => <Post key={post.id} post={post}/>)}
                </Col>
                <Col lg={3} md={7} sm={9} className="col-12">
                    <h5 className="text-center mt-5 mb-3">Categories</h5>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Html/CSS</ListGroup.Item>
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>Python</ListGroup.Item>
                            <ListGroup.Item>Java</ListGroup.Item>
                            <ListGroup.Item>C++</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card className="mt-3 mb-3" bg="light" >
                        <Card.Body>
                            <Card.Title>Side widget</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus doloremque enim error id, itaque laborum molestias
                                nulla odio omnis possimus, quisquam repellendus sequi temporibus vel velit veniam. Omnis, vel?</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Blog;