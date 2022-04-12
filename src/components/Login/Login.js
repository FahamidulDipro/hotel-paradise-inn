import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle,user,error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn=()=>{
        signInWithGoogle().then(()=>{
            console.log(user);
        })
    }
    return (
        <div>
           <h1>Login</h1> 
           <Button variant='primary' onClick={()=>handleGoogleSignIn()}>SignIn with Google</Button>
           
        </div>
    );
};

export default Login;