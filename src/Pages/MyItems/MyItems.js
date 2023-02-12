import { signOut } from 'firebase/auth';
import React, { useEffect, useState, } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect( () => { 

        const getOrders = async () =>{
            const email = user?.email;
            const url =  `http://localhost:5000/order?email=${email}`;
            try{
                const {data } = await axiosPrivate.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });               
                setOrders(data);
            }
            catch(error){
                console.log(error.message);
                if(error.res.status === 401 || error.res.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user, navigate])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/order/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               if(data){
                   toast("Successfully deleted item ")

                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
               }
                
            })
        }
    }

    return (


        <div className='container mt-4 my-5'>
            <h1 className='text-center text-success '>My Items</h1>
            <div className=' mt-4'>
            {
                            orders.map (order =>
                             <div  key={order._id}>
                                <div className="row  ">
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <img className='img-fluid w-100' src={order.img} alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 px-sm-4 d-flex flex-column justify-content-center align-items-start">
                                        <h5> Name: {order.item}</h5>
                                        <h5> Price: $ {order.price}</h5>
                                        <h6>Quantity: {order.quantity}</h6>
                                    </div>
                                    <div className="col-lg-3 col-md-2 col-sm-12 mt-2 d-flex flex-md-column flex-sm-row justify-content-center align-items-center">
                                                                             
                                        <Button className="btn btn-danger px-4 fw-bold py-2 mb-2 me-2 rounded-pill" onClick={() => handleDelete(order._id)}>
                                            Delete
                                        </Button>                                     
                                    </div>                                    
                                </div>
                                <hr />
                            </div>)
                        }
            </div>
        </div>
    );
};

export default MyItems;