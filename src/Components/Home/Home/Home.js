import React from 'react';
import Banner from '../Banner/Banner';
import ProductsHome from '../Products/ProductsHome';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <Reviews></Reviews>
            <Banner></Banner>
            <ProductsHome></ProductsHome>
            
        </div>
    );
};

export default Home;