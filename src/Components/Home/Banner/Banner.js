import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import w1 from "../../../videos/rolex.webm"
import w2 from "../../../videos/citizen.mp4"
import w3 from "../../../videos/HUBLOT.mp4"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            
            <Carousel variant="dark">

                <Carousel.Item interval={6000}>
                    <ReactPlayer url={w1} playing="true" loop="true" muted="true"></ReactPlayer>

                    <Carousel.Caption>
                        <Link to="/products"><Button>Explore Now</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={14000}>
                    <ReactPlayer url={w2} playing="true" loop="true" muted="true"></ReactPlayer>

                    <Carousel.Caption>
                    <Link to="/products"><Button>Explore Now</Button></Link>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={31000}>
                    <ReactPlayer url={w3} playing="true" loop="true" muted="true"></ReactPlayer>
                <Carousel.Caption>
                <Link to="/products"><Button>Explore Now</Button></Link>

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        </div >
    );
};

export default Banner;