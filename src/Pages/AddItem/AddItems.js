import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddItems = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            if(result){
                toast('Item added successfully')
                navigate('/home')
            }           
        } )
    };



    return (
        
         <div className='w-50 mx-auto mb-5 mt-4'>
          <h1 className='text-center text-success mb-4'>Add Item Here</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 p-1 ps-2 rounded' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3 p-1 ps-2 rounded' placeholder='Price' type="number" {...register ("price", {required: true, min: 1, })} />
                <input className='mb-3 p-1 ps-2 rounded' placeholder='Quantity' type="number" {...register("quantity", {required: true, min: 1, })} />
                <input className='mb-3 p-1 ps-2 rounded' placeholder='Photo URL' type="text" {...register("img", {required: true, })} />
                <input className='mb-3 p-1 ps-2 rounded' placeholder='Supplier Name' type="text" {...register("supplier" )} />
                <textarea className='mb-3 p-1 ps-2 rounded' placeholder='Description' {...register("description", {required: true, minLength:5, maxLength: 200 })} />
                <input className='mb-3 p-1 ps-2 rounded bg-success text-white' type="submit" value="Add Items" />
            </form>
     </div>
    );
};

export default AddItems;