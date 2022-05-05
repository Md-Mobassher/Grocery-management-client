import React from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {

    const {register, handleSubmit} = useForm();

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
            console.log(result);
        } )
    };



    return (
        
         <div className='w-50 mx-auto mb-5 mt-4'>
          <h1 className='text-center text-success mb-4'>Add Item Here</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 p-1 ps-2 rounded' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3 p-1 ps-2 rounded' placeholder='Price' type="number" {...register("price")} />
                <textarea className='mb-3 p-1 ps-2 rounded' placeholder='Description' {...register("description")} />
                <input className='mb-3 p-1 ps-2 rounded' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-3 p-1 ps-2 rounded bg-success text-white' type="submit" value="Add Items" />
            </form>
     </div>
    );
};

export default AddItems;