import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductsData from './ProductsData';

const Products = () => {
    const [watches, setWatches] = useState([])
    useEffect(() => {
        fetch("https://damp-taiga-56462.herokuapp.com/watches")
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])

    return (
        <div>
            <h1>This is Products</h1>

            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        watches.map(watch => <ProductsData key={watch._id} watch={watch}></ProductsData>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Products;