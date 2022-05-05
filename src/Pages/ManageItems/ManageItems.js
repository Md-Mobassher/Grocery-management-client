import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../Hooks/useInventories';

const ManageItems = () => {
    const [inventories, setInventories] = useInventories();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delet?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = inventories.filter(inventory => inventory._id !== id);
                setInventories(remaining);
            })
        }
    }

    return (
        <div className='container mb-5 mt-4'>
            <h1 className='text-center text-success mb-4'>Manage Inventories</h1>
            <div>
                    <div>
                        {
                            inventories.map (inventory =>
                             <div className='w-75 mx-auto' key={inventory._id}>
                                <div className="row  ">
                                    <div className="col-3">
                                        <img className='img-fluid w-100' src={inventory.img} alt="" />
                                    </div>
                                    <div className="col-5 d-flex flex-column justify-content-center">
                                        <h4>Name: {inventory.name}</h4>
                                        <h4>Price: $ {inventory.price}</h4>
                                    </div>
                                    <div className="col-4 d-flex flex-column justify-content-center align-items-end">
                                        <Button className="btn btn-danger px-5 fs-5 py-2 rounded-pill" onClick={() => handleDelete(inventory._id)}>
                                            Delete
                                        </Button>
                                    </div>
                                    
                                </div>
                                <hr />
                            </div>)
                        }

                    </div>

                    <div className='my-5 text-center'>
                        <Button  as={Link} to='/additems' className='px-5 py-2 mt-3 rounded-pill fs-5 ' variant="success" type="submit">
                                    Add New Item
                        </Button>
                    </div>
            </div>
        </div>
    );
};

export default ManageItems;