import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useInventory from '../../Hooks/useInventory';
import Loading from '../Shared/Loading/Loading';

const Order = () => {
    const {inventoryId} = useParams();
    const {isLoading, error, inventory, setInventory} = useInventory(inventoryId);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handlePlaceOrder = event =>{
        event.preventDefault();

        const order = {
            user: user?.displayName,
            email:user?.email,
            item: inventory?.data?.name,
            id: inventoryId,
            img: inventory?.data?.img,
            price:inventory?.data?.price,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        console.log(order);

        axios.post('https://groca-grocery-server.onrender.com/api/v1/order', order)
        .then(response =>{
            isLoading && <Loading />
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
                navigate('/manage')
            }else{

            }
        })
    }


    return (
        <div className='container w-75 mx-auto mb-5 mt-5 border shadow rounded px-md-5 px-sm-2 py-4'>
            <div>
            <h1 className='text-center text-success mb-4'>Please Order: <span className='text-warning'>{inventory?.data?.name}</span></h1>
            <form className='d-flex flex-column w-100' onSubmit={handlePlaceOrder}>
                <input className='mb-3 p-1 ps-2 rounded' type="text" value={user?.displayName} name="user" placeholder='name' required readOnly disabled/>
                
                <input className='mb-3 p-1 ps-2 rounded' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
               
                <input className='mb-3 p-1 ps-2 rounded' type="number" name="quantity" placeholder='Enter product quantity' autoComplete='off' required />

                <input className='mb-3 p-1 ps-2 rounded' type="text" name="address" placeholder='Enter your address' autoComplete='off' required />
              
                <input className='mb-3 p-1 ps-2 rounded' type="number" name="phone" placeholder='Enter your phone number' required />
                
                <input className='mb-3 mt-3 p-2 ps-2 border-0 rounded w-50 rounded-pill mx-auto bg-warning text-success fs-5 fw-bold' type="submit" value="Place Order" />
            </form>
        </div>
        </div>
    );
};

export default Order;