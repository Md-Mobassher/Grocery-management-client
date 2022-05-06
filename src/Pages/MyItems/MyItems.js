import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect( () => { 
        const getOrders = async () =>{
            const email = user?.email;
            const url =  `http://localhost:5000/order?email=${email}`;
            // try{
            //     // const {data } = await axiosPrivate.get(url);
            //     setOrders(data);

            // }
            // catch(error){
            //     console.log(error.message);
            //     if(error.res.status === 401 || error.res.status === 403){
            //         signOut(auth);
            //         navigate('/login')
            //     }
            // }
        }
        getOrders();

    }, [user])

    return (


        <div className='container mt-4 my-5'>
            <h1 className='text-center text-success '>My Items</h1>
            <div className=' mt-4'>

            </div>
        </div>
    );
};

export default MyItems;