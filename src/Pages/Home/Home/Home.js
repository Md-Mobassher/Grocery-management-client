import React from 'react';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import Inventories from '../Inventories/Inventories';
import Offer from '../Offer/Offer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Offer></Offer>
            <Client></Client>
        </div>
    );
};

export default Home;