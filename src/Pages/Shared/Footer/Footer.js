import React from 'react';
import logo from '../../../Images/logo/logo.png'
import FooterImage from '../../../Images/footer.webp'


const Footer = () => {
    return (
        <div  className="container-fluid" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7) ), url(${FooterImage})`, height: "70vh" ,  width: "100vw", backgroundRepeat: "no-repeat" ,backgroundSize: "cover"}}>
           <div className='container py-5 text-white d-flex flex-column justify-content-center h-100'>
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div>
                            <img src={logo} alt="" />
                            <p className='mt-4'> 24/A - Rajarhat, Kurigram</p>
                            <p>Mobile: +88 01773-381807</p>
                            <p>Email: developermobassher@gmail.com</p>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div>
                            <h4 className='ms-5 mb-4'>Help</h4>
                            <ul>
                                <li>Search</li>
                                <li>Help</li>
                                <li>Information</li>
                                <li>Privacy Policy</li>
                                <li>Shipping Information</li>                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div>
                            <h4 className='ms-5 mb-4'>Support</h4>
                            <ul>
                                <li>Contact</li>
                                <li>About Us</li>
                                <li>Carrers</li>
                                <li>Refund & Returns</li>
                                <li>Deliveries</li>                                
                            </ul>
                        </div>
                    </div>
                    
                </div>  
                <div className='d-flex justify-content-center mt-5'>
                    <p className='text center'>Copyright &copy; All right regerved to Developer Md Mobassher Hossain</p>    
                </div> 
            </div> 


        </div>
    );
};

export default Footer;