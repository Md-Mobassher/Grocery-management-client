import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventories from '../../Hooks/useInventories';

const ManageItems = () => {
    const [inventories, setInventories] = useInventories();


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               if(data){
                   toast("Successfully deleted item ")

                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
               }
                
            })
        }
    }

    return (
        <div className='container mb-5 mt-4'>
            <h1 className='text-center text-success mb-4'>Manage Inventories</h1>
            <hr className=' mt-4 ' />
            <div>
                    <div>
                        {
                            inventories.map (inventory =>
                             <div  key={inventory._id}>
                                <div className="row  ">
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <img className='img-fluid w-100' src={inventory.img} alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 px-sm-4 d-flex flex-column justify-content-center align-items-start">
                                        <h5> Name: {inventory.name}</h5>
                                        <h5> Price: $ {inventory.price}</h5>
                                        <h6>Quantity: {inventory.quantity}</h6>
                                        <hp><b>Description:</b> {inventory.description.slice(0,60) }...</hp>
                                    </div>
                                    <div className="col-lg-3 col-md-2 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                        <Button className="btn btn-danger px-4 fw-bold py-2 rounded-pill" onClick={() => handleDelete(inventory._id)}>
                                            Delete
                                        </Button>                                      
                                    </div>                                    
                                </div>
                                <hr />
                            </div>)
                        }

                    </div>

                    <div className='my-5 text-center'>
                        <Button  as={Link} to='/additems' className='px-5 py-2 mt-3 rounded-pill fs-5 ' variant="success" type="submit">Add New Item
                        </Button>
                    </div>
            </div>
        </div>
    );
};

export default ManageItems;