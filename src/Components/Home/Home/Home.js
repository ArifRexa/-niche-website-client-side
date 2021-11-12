import React from 'react';
import Banner from '../Banner/Banner';
import ProductsHome from '../Products/ProductsHome';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Reviews></Reviews>
            <Banner></Banner>
            <ProductsHome></ProductsHome>
            
        </div>
    );
};

export default Home;