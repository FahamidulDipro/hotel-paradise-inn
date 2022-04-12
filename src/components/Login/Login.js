import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle,user,error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn=()=>{
        signInWithGoogle().then(()=>{
            console.log(user);
        })
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
      }
    return (
        <div>
           <h1>Login</h1> 
           <Button variant='primary' onClick={()=>handleGoogleSignIn()}>SignIn with Google</Button>
           
        </div>
    );
};

export default Login;