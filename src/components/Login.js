import React from 'react'
import LoginForm from './LoginForm'
import Header from './Header'
import { Link } from 'react-router-dom'


const Login = () =>{
    
    return(
        <div>
            <Header />
            <h1>Login</h1>
            <LoginForm  />
            <Link to='/signup'>New User</Link>
        </div>
    )
}


export default Login