import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useInventory from '../../Hooks/useInventory';

const Order = () => {
    const {inventoryId} = useParams();
    const [inventory] = useInventory(inventoryId);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            item: inventory.name,
            id: inventoryId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
                navigate('/manage')
            }
        })
    }


    return (
        <div className='container w-75 mx-auto mb-5 mt-5 border shadow rounded px-md-5 px-sm-2 py-4'>
            <div>
            <h1 className='text-center text-success mb-4'>Please Order: <span className='text-warning'>{inventory.name}</span></h1>
            <form className='d-flex flex-column w-100' onSubmit={handlePlaceOrder}>
                <input className='mb-3 p-1 ps-2 rounded' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                
                <input className='mb-3 p-1 ps-2 rounded' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
               
                <input className='mb-3 p-1 ps-2 rounded' type="text" value={inventory.name} name="service" placeholder='service' required readOnly />
               
                <input className='mb-3 p-1 ps-2 rounded' type="text" name="address" placeholder='address' autoComplete='off' required />
              
                <input className='mb-3 p-1 ps-2 rounded' type="text" name="phone" placeholder='phone' required />
                
                <input className='mb-3 mt-3 p-2 ps-2 border-0 rounded w-50 rounded-pill mx-auto bg-warning text-success fs-5 fw-bold' type="submit" value="Place Order" />
            </form>
        </div>
        </div>
    );
};

export default Order;