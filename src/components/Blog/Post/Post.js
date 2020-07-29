import React from 'react';
import {Col, Media, Row} from "react-bootstrap";

const Post = ({post}) => {
    return (
        <Media className="m-md-5 m-sm-3 m-2 post">
            <Row >
                <Col className="col-sm-3 col-12 text-center"><img src={post.img} alt={post.title} width={150} height={150}/></Col>
                <Col className="col-sm-9 col-12">
                    <Media.Body className="ml-md-4">
                        <h5>{post.title}</h5>
                        <p>{post.text}</p>
                    </Media.Body>
                </Col>
            </Row>
        </Media>
    );
}

export default Post;