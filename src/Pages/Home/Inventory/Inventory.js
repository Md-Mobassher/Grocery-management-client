import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'



const Inventory = ({inventory}) => {

    const {_id, name, img, description, price, quantity, supplier} = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id =>{
        navigate(`/inventory/${id}`);
    }


    return (
        <div className='inventory border-1 rounded-3 border shadow p-4'>
            <img className='w-100' src={img} alt="" />
            <div className=" rounded border-light d-flex flex-column align-items-center justify-content-center ">
                <h2>{name}</h2>
                <h2 className="text-success fw-bold">$ {price}</h2>
                <p className='text-center '>{description}</p>
                <h5 className='text-center '>Quantity: {quantity}</h5>
                <h5 className='text-center '>Supplier: {supplier}</h5>
                
                <Button onClick={() => navigateToInventoryDetail(_id)} variant="success" className='px-5 py-2 mt-2 rounded-pill fs-5 bg-success text-white border-0 '>
                    Manage Stock</Button>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Inventory;