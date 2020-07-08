import React from 'react'
import SignupForm from './SignupForm'
import Header from './Header'
import axios from 'axios'
var resData = ''

const formValidation =async (data)=>{
    
    const response =await axios({
        url : 'https://rootrsk-gamerangers-api.herokuapp.com/user/signup',
        method:'POST',
        data:data
    })
    if(response.data.message==='successful'){
        resData = {
            message : response.data.message,
            error : response.data.error
        }
    } else {
        resData = {
            message : 'unsuccessful',
            error :'Some erorr'
        }
    }
}

const responseData = () =>{
    return resData
}


const Signup = () =>{
    return(
        <div>
            <Header />
            <h1>Singup</h1>
            <SignupForm onSubmit={formValidation} responseData={responseData} />
        </div>
    )
}



export default Signup