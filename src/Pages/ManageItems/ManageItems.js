import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventories from '../../Hooks/useInventories';
import './ManageItems.css'

const ManageItems = () => {
    const [inventories, setInventories] = useInventories();
    const navigate = useNavigate();

    const handleOrder = id => {
        navigate(`/orders/${id}`)
    }


    const handleManage = id => {
        navigate(`/inventory/${id}`)
    }



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `https://intense-woodland-58233.herokuapp.com/inventory/${id}`;
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
                                <div className="row  inventory">
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <img className='img-fluid w-100' src={inventory.img} alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 px-sm-4 d-flex flex-column justify-content-center align-items-start">
                                        <h5> Name: {inventory.name}</h5>
                                        <h5> Price: $ {inventory.price}</h5>
                                        <h6>Quantity: {inventory.quantity}</h6>
                                        <p><b>Description:</b> {inventory.description.slice(0,60) }...</p>
                                    </div>
                                    <div className="col-lg-3 col-md-2 col-sm-12 mt-2 d-flex flex-md-column flex-sm-row justify-content-center align-items-center">
                                                                             
                                        <Button className="btn btn-warning px-4 fw-bold py-2 mb-2 me-2  rounded-pill" onClick={() => handleOrder(inventory._id)}>
                                           Order
                                        </Button>                                      
                                        <Button className="btn btn-success px-4 fw-bold py-2 mb-2 me-2 rounded-pill" onClick={() => handleManage(inventory._id)}>
                                            Details
                                        </Button>  
                                        <Button className="btn btn-danger px-4 fw-bold py-2 mb-2 me-2 rounded-pill" onClick={() => handleDelete(inventory._id)}>
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