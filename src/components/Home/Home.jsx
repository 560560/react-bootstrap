import React from 'react';
import CarouselBox from "../Common/CarouselBox/CarouselBox";
import {Button, Card, CardDeck, CardGroup, Container} from "react-bootstrap";


const Home = (props) => {
    return (
        <div>
            <CarouselBox/>
            <Container>
                <h2 className="text-center mt-4">Our Team</h2>
                <CardDeck className="mb-4">
                    <Card bg="light" border="primary" >
                        <Card.Img variant="top"
                                  src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis repellat
                                sit.
                            </Card.Text>
                            <CardGroup className="d-flex justify-content-center">
                                <Button variant="primary">About Team</Button>
                            </CardGroup>

                        </Card.Body>
                    </Card>


                    <Card bg="light" border="primary">
                        <Card.Img variant="top"
                                  src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                        <Card.Body>
                            <Card.Title>UI/UX Designers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis repellat
                                sit.
                            </Card.Text>
                            <CardGroup className="d-flex justify-content-center">
                                <Button variant="primary">About Team</Button>
                            </CardGroup>

                        </Card.Body>
                    </Card>
                    <Card bg="light" border="primary">
                        <Card.Img variant="top"
                                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <Card.Body>
                            <Card.Title>QA Engineers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis repellat
                                sit.
                            </Card.Text>
                            <CardGroup className="d-flex justify-content-center">
                                <Button variant="primary">About Team</Button>
                            </CardGroup>

                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    );
}

export default Home;