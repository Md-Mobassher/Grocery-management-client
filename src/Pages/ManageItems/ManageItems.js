import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    return (
        <div className='container mb-5 mt-4'>
            <h1 className='text-center text-success'>Manage Inventories</h1>
            <div>


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