import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Shared/Loading/Loading';

const InventoryDetails = () => {
    const {inventoryId } = useParams();

    const navigate = useNavigate();

    const {data, isLoading, error} = useFetch(
        `https://groca-grocery-server.onrender.com/api/v1/inventory/${inventoryId}`
    )

   
    const handleDelevered = async ({quantity}) =>{

            // send data to the server
            const url = `https://groca-grocery-server.onrender.com/api/v1/inventory/${inventoryId}`;
           await axios.put(url , quantity)
            .then(response =>{
                const {data} = response;
                if(data.acknowledged){
                    toast('Items Delevered Successfully!!!');
                   
                }
            })
           
    }
    
    const handleOrder = () => {
        navigate(`/orders/${inventoryId}`)
    }
    
  /*   const onSubmit = async data => {
        const url = `http://localhost:5000/api/v1/inventory/${inventoryId}`;
        await axios.put(url, data)
        .then(response =>{
            //console.log(response)
            const {data} = response;
            if(data.acknowledged){
                toast('Items Restock Successfully!!!');             
            }
        })
    } */
     

    return (
        <div className='container'>
            <div className='mb-5 mt-3 '>
                <h2 className='text-center text-success mb-4'>Inventory Details</h2>
                    <div className='d-flex justify-content-center align-items-center'>
                        {  error && <p>{error.message}</p>  }
                        {  isLoading && <Loading />  }
                    </div>
                {
                    data && 
                    <div className="row rounded border shadow ">

                        <div className="col-md-7 col-sm-12 inventory p-5">
                            <img className='img-fluid' src={ data.data.img } alt="" />
                        </div>
                        <div className="col-md-5 col-sm-12 d-flex flex-column align-items-start justify-content-center">
                            <h4>Name: <span className='text-success '>{data.data.name}</span></h4>
                            <h4>Price: <span className='text-success '>$ {data.data.price}</span></h4>
                            <p className=' mt-1 mb-2'><span className='d-inline fs-5 fw-semi-bold'>Description:</span> {data.description}</p>
                            <h5>Quantity: <span className='text-success '>{data.data.quantity} </span> </h5>
                            <h5>Supplier: <span className='text-success '>{data.data.supplier} </span> </h5>

                        <div className='d-flex'>
                                <Button  onClick={ handleDelevered } className='px-5 py-2 mt-3 rounded-pill fs-6 fw-semibold' variant="success" type="submit">
                                        Delivered
                                </Button>

                                <Button  onClick={ handleOrder } className='px-5 py-2 ms-3 mt-3 rounded-pill fs-6 fw-semibold' variant="warning" type="submit">
                                        Order
                                </Button>
                        </div>
                        </div>    
                </div>
                }

             {/*    <div className='w-50 my-5 mx-auto border rounded shadow p-5'>
                    <h1 className='text-center text-success mt-0 mb-4'>Restock Items</h1>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                       
                        <input className='my-4 p-1 ps-2 rounded' placeholder='Enter Restock Items ' type="number" {...register("quantity", {required: true, min: 1, })} />
                        
                        <input className=' py-2 fs-5 w-50 border-0 rounded-pill mx-auto rounded bg-success text-white' type="submit" value="Add Items" />
                    </form>
                </div> */}

                    <div className='my-5 text-center'>
                        <Button  as={Link} to='/manage' className='px-5 py-2 mt-3 rounded-pill fs-5 ' variant="warning" type="submit">
                                    Manage Inventories
                        </Button>
                    </div>
             </div>
        </div>
    );
};

export default InventoryDetails;