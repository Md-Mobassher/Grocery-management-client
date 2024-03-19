import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Inventory from '../Inventory/Inventory';
import Pagination from 'react-bootstrap/Pagination';
import './Inventories.css'
import useFetch from '../../../Hooks/useFetch';
import Loading from '../../Shared/Loading/Loading';

const Inventories = () => {
    
    const {data, isLoading, error} = useFetch(
        "https://groca-grocery-server.onrender.com/api/v1/inventory"
    )

        let active = 1;
        let items = [];
        for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} className='text-success'>
            {number}
            </Pagination.Item>,
        )}
        const paginationBasic = (
            <div className='text-success'>
              <Pagination className='text-success'>{items}</Pagination>
            </div>
          );


  
    return (
        <>
            <div id='inventory' className='container py-5'>
                <div className="row">
                    <h1 className='text-center pt-5 pb-5 text-success'>Our Inventories</h1>
                    <div className='d-flex justify-content-center align-items-center'>
                        {  error && <p>{error.message}</p>  }
                        {  isLoading && <Loading />  }
                    </div>
                    <div className="inventory-container">         
                        {  data && data.data.map((inventory) => {
                           return <Inventory key={inventory._id} inventory={inventory}></Inventory>
                        }) }  
                    </div>

                    <div className='mt-5 d-flex justify-content-center'>
                        {
                            paginationBasic
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