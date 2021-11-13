import React from 'react';
import Banner from '../Banner/Banner';
import NewModel from '../NewModel/NewModel';
import ProductsHome from '../Products/ProductsHome';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <div style={{backgroundColor:"#0DCAEF", height:"70px"}}>
            <h2 className="fw-bold text-center text-light" >WELCOME TO KBO WATCH</h2>
            </div>
            <Banner></Banner>
            <ProductsHome></ProductsHome>
            <NewModel />
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;