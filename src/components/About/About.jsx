import React from 'react';
import {Container, Tab, Col, Row, Nav} from "react-bootstrap";


const About = (props) => {


    return (
        <Container>
            <Tab.Container id="AboutBlock" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column mt-3 " >
                            <Nav.Item>
                                <Nav.Link eventKey="first">Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Programming</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="first">
                                <img
                                    className="img-fluid "
                                    height="500"
                                    src="https://speckyboy.com/wp-content/uploads/2019/11/free-figma-ui-tmeplate-13.jpg"
                                    alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur beatae
                                    consequuntur corporis debitis delectus distinctio dolorem doloribus enim eum
                                    explicabo facere fuga fugiat hic iure iusto labore maiores modi natus nisi nobis
                                    obcaecati odit pariatur perferendis, quam quasi ratione reiciendis, sunt tempora
                                    voluptate.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img
                                    className="img-fluid"
                                    height="500"
                                    src="https://figma.imgix.net/2Bg3E11i36sqsemMasYMyK/b635c4ef507c46bfc30c2ce79db42628/designers.png?&w=1060&auto=compress%2Cformat&crop=entropy&fit=crop&q=75"
                                    alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur beatae
                                    consequuntur corporis debitis delectus distinctio dolorem doloribus enim eum
                                    explicabo facere fuga fugiat hic iure iusto labore maiores modi natus nisi nobis
                                    obcaecati odit pariatur perferendis, quam quasi ratione reiciendis, sunt tempora
                                    voluptate.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img
                                    className="img-fluid"
                                    height="500"
                                    src="https://i.ytimg.com/vi/ZcdQ-E-3xfw/maxresdefault.jpg"
                                    alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur beatae
                                    consequuntur corporis debitis delectus distinctio dolorem doloribus enim eum
                                    explicabo facere fuga fugiat hic iure iusto labore maiores modi natus nisi nobis
                                    obcaecati odit pariatur perferendis, quam quasi ratione reiciendis, sunt tempora
                                    voluptate.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img
                                    className="img-fluid"
                                    height="500"
                                    src="https://cdn.webrazzi.com/uploads/2019/12/figma-auto-layout-923.png"
                                    alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur beatae
                                    consequuntur corporis debitis delectus distinctio dolorem doloribus enim eum
                                    explicabo facere fuga fugiat hic iure iusto labore maiores modi natus nisi nobis
                                    obcaecati odit pariatur perferendis, quam quasi ratione reiciendis, sunt tempora
                                    voluptate.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth" >
                                <img
                                    className="img-fluid"
                                    height="500"
                                    src="https://www.infiniteloop.com.br/wp-content/uploads/2017/09/image1.jpg"
                                    alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur beatae
                                    consequuntur corporis debitis delectus distinctio dolorem doloribus enim eum
                                    explicabo facere fuga fugiat hic iure iusto labore maiores modi natus nisi nobis
                                    obcaecati odit pariatur perferendis, quam quasi ratione reiciendis, sunt tempora
                                    voluptate.</p>
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>



        </Container>
    );
}

export default About;