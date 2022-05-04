import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading'



const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        general: ''
    })


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
   

    const handleEmailChange = e =>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value)
        console.log(validEmail);

        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value});
            setErrors({...errors, email: ''});
        }
        else{
            setErrors({...errors, email: 'Please enter a valid email'});
            setUserInfo({...userInfo, email: '' });
        }     
    }


    const handlePasswordChange = e =>{
        const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const validPass = passRegex.test(e.target.value);

        if(validPass){
            setUserInfo({...userInfo, password: e.target.value});
            setErrors({...errors, password: ""});
        }
        else{
            setErrors({...errors, password:'Minimum eight characters, at least one letter and one number'});
            setUserInfo({...userInfo,  password: ""});
        }     
    }   

    const resetPassword = async () => {
        const email= userInfo.email;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(userInfo);

        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

  

    useEffect(() => {
        const error = hookError || googleError;
        
        if(error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid email, please provide a valid email");
                    break;
                
                case "auth/invalid-password":
                    toast("Wrong password. Minimum eight characters, at least one letter and one number")
                    break;
                default:
                    toast("Something went wrong")
            }
        }
    }, [hookError, googleError])
    
    
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading || loading2) {
        return <Loading></Loading>;
    }
    
    if (user || googleUser) {
        navigate(from);
    }
    
 
   
    return (
        <div className='w-50 mx-auto mt-5 border border-1 border-success px-5 py-4 rounded-2'>
            <h1 className='text-center mt-0 mb-0 pb-3 text-success'>Please Login</h1>
            <Form onSubmit={ handleSubmit }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                    {errors?.email && <p className='text-danger mt-2'>{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                    {errors?.password && <p className='text-danger mt-2'>{errors.password}</p>}
                </Form.Group>
                
                <Button className='px-5' variant="success" type="submit">
                    Login
                </Button>
                <ToastContainer />
                <p className='mt-3'>Don't have an account? <Link to='/signup'>Create an account</Link></p>
                <p className='mt-0'>Forget Password? <button className='btn btn-link text-success pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            </Form>

            <div className='d-flex align-items-center'>
                <div className='w-50 mb-1'><hr /></div>
                <p className='px-3 mt-2'>or</p>
                <div className='w-50 mb-1'><hr /></div>
            </div>
            <div>
                <Button onClick={() => signInWithGoogle()} className='px-5 d-block mx-auto' variant="success">
                    Login with Google
                </Button>
            </div>
        </div>
    );
};

export default Login;