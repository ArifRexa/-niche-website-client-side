import React, { useState, useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeProductsData from './HomeProductsData';
const ProductsHome = () => {
    const [watches, setWatches] = useState([])
    useEffect(() => {
        fetch("https://damp-taiga-56462.herokuapp.com/watches")
            .then(res => res.json())
            .then(data => setWatches(data.slice(0, 6)))
    }, [])
    return (
        <div>
            <h1>Our Watches</h1>

            <Container>
                <Row xs={1} md={2} className="g-4">
                    {
                        watches.map(watch => <HomeProductsData key={watch._id} watch={watch}></HomeProductsData>)
                    }
                </Row>
                <Link to="/products">
                    <Button>See More</Button></Link>
            </Container>



        </div>
    );
};

export default ProductsHome;