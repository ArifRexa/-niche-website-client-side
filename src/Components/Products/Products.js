import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import ProductsData from './ProductsData';

const Products = () => {
    const [watches, setWatches] = useState([])
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch("https://kbowatchss.onrender.com/watches")
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])

    if (isLoading) {
        return <Spinner className="item-center mt-5" animation="border" variant="info" />

    }

    return (
        <div>

            <Container>
                <h1 className="my-5 fw-bold text-center">Our Watches</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        watches.map(watch => <ProductsData key={watch._id} watch={watch}></ProductsData>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Products;