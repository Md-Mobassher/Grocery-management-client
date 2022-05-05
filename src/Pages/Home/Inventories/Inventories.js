import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [ inventories, setInventories ] = useState([]);
    const items = inventories.slice(0,6);

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
                            items.map(inventory => <Inventory
                                key={inventory._id}
                                inventory={inventory}
                            >
                            </Inventory>)
                        }
                    </div>
                    <div className='my-5 text-center'>
                        <Button  as={Link} to='/manage' className='px-5 py-2 mt-3 rounded-pill fs-5 ' variant="warning" type="submit">
                                    Manage Inventories
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inventories;