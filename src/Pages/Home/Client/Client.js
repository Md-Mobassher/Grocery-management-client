import React from 'react';
import client1 from '../../../Images/clients/client-1.png'
import client2 from '../../../Images/clients/client-2.png'
import client3 from '../../../Images/clients/client-3.png'
import client4 from '../../../Images/clients/client-4.png'

const Client = () => {
    return (
        <div className='my-5' id='client'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img className='d-block mx-auto' src={client1} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img className='d-block mx-auto'  src={client2} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img className='d-block mx-auto'  src={client3} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img  className='d-block mx-auto' src={client4} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Client;