import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import banner1 from '../../../Images/banner/slider-1.webp'
import banner2 from '../../../Images/banner/slider-2.webp'
import banner3 from '../../../Images/banner/slider-3.webp'


const Banner = () => {

    return (
     <>
        <div id='banner'>
            <Carousel className='banner'>
                <Carousel.Item  style={{ backgroundImage: `url(${banner1})`, height: "90vh",  width: "100vw", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className='col-md-6 col-sm-12 d-block ms-auto py-5 d-flex align-items-center justify-content-center'>
                       <div className='d-flex flex-column justify-content-center align-items-center p-3 rounded' style={ {backgroundColor: `rgb(224, 255, 192, 0.6)`}}>
                            <h5 >100% Healthy & Affordable</h5>
                            <h1 className='text-success fw-bold fst-italic pt-3'>ORGANIC</h1>
                            <h1 className='text-success fw-bold fst-italic pb-3'>VEGETABLES</h1>
                            <h3 className='fs-4 pb-4'>Small changes big difference</h3>
                            <Button  as={Link} to='/manage' className='px-5 py-2 mt-3 rounded-pill fs-5' variant="success" type="submit">
                                Shop Now
                            </Button>
                       </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item  style={{ backgroundImage: `url(${banner2})`, height: "90vh" ,  width: "100vw", backgroundRepeat: "no-repeat" }}>
                    <div className='col-md-6 col-sm-12 d-block ms-auto py-5 d-flex align-items-center justify-content-center h-100'>
                       <div className='d-flex flex-column justify-content-center align-items-center p-3 rounded' style={ {backgroundColor: `rgb(253, 232, 95, 0.6)`}}>
                            <h4>Groca</h4>
                            <h1 className='text-danger fw-bold fst-italic pt-2'>VEGETABLES 100%</h1>
                            <h1 className='text-danger fw-bold fst-italic pb-3'>ORGANIC</h1>
                            <h3 className='fs-4 pb-4'>Save up to 50% OFF</h3>
                            <Button  as={Link} to='/manage' className='px-5 py-2 mt-3 rounded-pill fs-5' variant="danger" type="submit">
                                Shop Now
                            </Button>
                       </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item  style={{ backgroundImage: `url(${banner3})`, height: "90vh" ,  width: "100vw", backgroundRepeat: "no-repeat" }}>
                    <div className='col-md-6 col-sm-12 d-block ms-auto py-5 d-flex align-items-center justify-content-center h-100 '>
                       <div className='d-flex flex-column justify-content-center align-items-center bg-gradient p-3 rounded' style={ {backgroundColor: `rgb(240, 223, 202, 0.6)`}}>
                            <h5>Natural Health Care Ingredients</h5>
                            <h1 className='text-warning fw-bold fst-italic pt-3'>GROCERY</h1>
                            <h1 className='text-warning fw-bold fst-italic pb-3'>SHOPPING</h1>
                            <h3 className='fs-4 pb-4'>Save up to 40% OFF</h3>
                            <Button  as={Link} to='/manage' className='px-5 py-2  mt-3 rounded-pill fs-5' variant="warning" type="submit">
                                Shop Now
                            </Button>
                       </div>
                    </div>
                </Carousel.Item>
                

            </Carousel>
        </div>
            
     </>
    );
};


export default Banner;