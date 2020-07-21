import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import earth from "../../../assets/images/earth.jpg"
import palms from "../../../assets/images/palms.jpg"
import forest1 from "../../../assets/images/forest1.jpg"


const CarouselBox = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100 " src={forest1} alt="Forest"/>
                <Carousel.Caption>
                    <h3 className="d-sm-block">Nature</h3>
                    <p className="d-sm-block d-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, perspiciatis.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={earth} alt="Space"/>
                <Carousel.Caption>
                    <h3 className="d-sm-block">Space</h3>
                    <p className="d-sm-block d-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, perspiciatis.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={palms} alt="Palms"/>
                <Carousel.Caption>
                    <h3 className="d-sm-block">Palms beach</h3>
                    <p className="d-sm-block d-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, perspiciatis.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBox;