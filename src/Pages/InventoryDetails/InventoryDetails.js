import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventory from '../../Hooks/useInventory';

const InventoryDetails = () => {
    const {inventoryId } = useParams();
    const [inventory] = useInventory(inventoryId);
   
    const handleDelevered = ({quantity}) =>{

            // send data to the server
            const url = `http://localhost:5000/inventory/${inventoryId}`;
            console.log(url)
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(quantity)
            
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    toast('Inventory updated successfully!!!');
                }else{
                    toast('inventory not update ');
                }         
        })
       
    }
    
    

     

    return (
        <div className='container'>
             <div className='mb-5 mt-3 '>
                <h1 className='text-center text-success mb-4'>Inventory Details</h1>
                <div className="row rounded border shadow-sm">
                    <div className="col-md-7 col-sm-12 ">
                        <img className='img-fluid' src={ inventory.img } alt="" />
                    </div>
                    <div className="col-md-5 col-sm-12 d-flex flex-column align-items-start justify-content-center">
                        <h2>Name: <span className='text-success '>{inventory.name}</span></h2>
                        <h2>Price: <span className='text-success '>$ {inventory.price}</span></h2>
                        <p className=' my-3'><h4 className='d-inline'>Description:</h4> {inventory.description}</p>
                        <h4>Quantity: <span className='text-success '>{inventory.quantity} </span> </h4>
                        <h4>Supplier: <span className='text-success '>{inventory.supplier} </span> </h4>

                        <Button  onClick={ handleDelevered } className='px-5 py-2 mt-3 rounded-pill fs-5' variant="success" type="submit">
                                Delivered
                        </Button>

                    </div>
                    
                    
                </div>

                    <div className='my-5 text-center'>
                        <Button  as={Link} to='/manage' className='px-5 py-2 mt-3 rounded-pill fs-5 ' variant="success" type="submit">
                                    Manage Inventories
                        </Button>
                    </div>
             </div>
        </div>
    );
};

export default InventoryDetails;