import React from 'react';
import { Button } from 'react-bootstrap';
import auth from '../../firebase.init';
import useFirebase from '../../useFirebase';

const Login = () => {
    const {user,signInGoogle} = useFirebase(auth);
    return (
        <div>
           <h1>Login</h1> 
           <Button variant='primary' onClick={signInGoogle}>SignIn with Google</Button>
        </div>
    );
};

export default Login;