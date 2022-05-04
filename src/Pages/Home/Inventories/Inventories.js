import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [ inventories, setInventories ] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data =>  setInventories(data));
    } ,[])
    return (
        <>
            <div id='inventory' className='container'>
                <div className="row">
                    <h1 className='text-center mt-5 mb-5 text-success'>Our Inventories</h1>
                    <div className="inventory-container">
                        {
                            inventories.map(inventory => <Inventory
                                key={inventory._id}
                                inventory={inventory}
                            >
                            </Inventory>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inventories;