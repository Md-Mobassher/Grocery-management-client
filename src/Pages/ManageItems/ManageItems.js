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
            .then(result => {
               
                const remaining = inventories.filter(inventory => inventory._id !== id);
                setInventories(remaining);
            })
        }
    }

    return (
        <div className='container mb-5 mt-4'>
            <h1 className='text-center text-success mb-4'>Manage Inventories</h1>
            <hr className='w-75 mt-4 mx-auto' />
            <div>
                    <div>
                        {
                            inventories.map (inventory =>
                             <div className='w-75 mx-auto' key={inventory._id}>
                                <div className="row  ">
                                    <div className="col-md-3 col-sm-3">
                                        <img className='img-fluid w-100' src={inventory.img} alt="" />
                                    </div>
                                    <div className="col-md-5 col-sm-5 d-flex flex-column justify-content-center align-items-center">
                                        <h4>{inventory.name}</h4>
                                        <h4>$ {inventory.price}</h4>
                                    </div>
                                    <div className="col-md-4 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                                        <Button className="btn btn-danger px-4 fs-6 py-2 rounded-pill" onClick={() => handleDelete(inventory._id)}>
                                            Delete
                                        </Button>
                                    </div>
                                    
                                </div>
                                <hr />
                            </div>)
                        }

                    </div>

                    <div className='my-5 text-center'>
                        <Button  as={Link} to='/additems' className='px-4 py-2 mt-3 rounded-pill fs-6 ' variant="success" type="submit">
                                    Add New Item
                        </Button>
                    </div>
            </div>
        </div>
    );
};

export default ManageItems;