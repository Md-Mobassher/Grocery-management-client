import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';
import Loading from '../../Shared/Loading/Loading';



const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPass: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPass: '',
        general: ''
    })

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    

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

    const handleConfirmPassChange = e =>{
        if(e.target.value === userInfo.password){
            setUserInfo({...userInfo, confirmPass:e.target.value});
            setErrors({...errors, confirmPass: ''});
        } 
        else{
            setErrors({...errors, confirmPass: 'Password did not match'});
            setUserInfo({...userInfo, confirmPass: ''});
        }
    }


    const handleSubmit = e =>{
        e.preventDefault();

        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        navigate('/home')
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
    }, [ hookError, googleError])

    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user);
    let from = location.state?.from?.pathname || "/";

    if (loading || loading2 ) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }
    
    // if (user || googleUser) {
    //     navigate(from, { replace: true });
    // }


    return (
        <div className='w-50 mx-auto my-5 border border-1 border-info px-5 py-3 rounded-2'>
                <h1 className='text-center mt-0 mb-0 pb-4 text-success'>Please Register</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                        {errors?.email && <p className='text-danger mt-2'>{errors.email}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                        {errors?.password && <p className='text-danger mt-2'>{errors.password}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onChange={handleConfirmPassChange} type="password" placeholder="Confirm Password" />
                        {errors?.confirmPass && <p className='text-danger mt-2'>{errors.confirmPass}</p>}
                    </Form.Group>
                    
                    <Button className='px-5' variant="success" type="submit">
                        Register
                    </Button>
                    <p className='mt-2'>Already have an account <Link to='/login'>Please login</Link></p>
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
                <ToastContainer></ToastContainer>
            </div>
        </div>

    );
};

export default SignUp;
