import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const NewModel = () => {
    return (
        <div>
            <h1 className="fw-bold text-center">Latest Model</h1>
            <Container>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/1/T125.617.33.051.00_AMB_S_2.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/1/T121.420.47.051.03_AMB_S_1_1.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/1/T101.617.11.051.00_AMB_S_1.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/1/T125.617.36.051.01_zStore.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </Container>

        </div>
    );
};

export default NewModel;