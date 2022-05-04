import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg1 from '../../../Images/bg/bg-1.webp'

const Offer = () => {
    return (
        <div id='offer' style={{ backgroundImage: `url(${bg1})`, height: "80vh" ,  width: "100vw", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-5 col-sm-12">
                    <div className='text-center text-success fw-bold fst-italic'>
                        <h2>Special Discount For All</h2>
                        <h2>Grocery Products</h2>
                        <p className='mt-4'>There is a big opportunity for all of our customers. If you buy any grocery items in our shop, you will get maximum 40% discount because of the Eid-Ul-Fitor.   </p>
                        <p>Happy Shopping</p>

                        <Button  as={Link} to='/inventory' className='px-5 py-2 mt-3 rounded-pill fs-5' variant="success" type="submit">
                                Shop Now
                        </Button>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    
                </div>
            </div>
            
        </div>
    );
};

export default Offer;