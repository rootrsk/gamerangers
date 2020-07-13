import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {LoadingComponened10} from './others/LoadingPage'

class SignupFrom extends React.Component{
    state = {message:''}
    componentDidMount = () =>{
        const token = document.cookie.includes('token')
        console.log(token)
        if(token){
            this.setState({
                message:'successful'
            })
        }
    }
    onNameChange = (e) =>{
        const name = e.target.value
        this.setState({name})
    }
    
    onEmailChange = (e)=>{
        const email = e.target.value
        this.setState({email})
    }
    onContactNumberChange = (e) =>{
        const contact_no = e.target.value
        this.setState({contact_no})
    }
    onCityChange = (e) =>{
        const city= e.target.value
        this.setState({city})
    }
    onPasswordChange = (e) =>{
        const password = e.target.value
        this.setState({password})
    }
    onSubmit = async(e) =>{
        
        e.preventDefault()
        this.setState({
            error: '',
            message : '',
            button:'clicked'
        })
        const data = {
            name:this.state.name,
            email:this.state.email,
            city:this.state.city,
            contact_no:this.state.contact_no,
            password : this.state.password
        }
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/user/signup',
            method:'POST',
            data:data,
            withCredentials: true
            
        })
        console.log(response)
        this.setState({
            error:response.data.error,
            message : response.data.message,
            button:''
        })

    }
    render(){
        return(
            <div className='form'> 
                <form onSubmit={this.onSubmit} method='POST' >
                    <input 
                        type='text' 
                        name='Name' 
                        placeholder='name'
                        onChange={this.onNameChange}
                        required
                    />
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='email'
                        onChange={this.onEmailChange} 
                        required
                    />
                    <input type='number' 
                        name='contact_no' 
                        placeholder="contact number"
                        onChange={this.onContactNumberChange}
                        required 
                    />
                    <input 
                        type='text' 
                        name='city' 
                        placeholder='city' 
                        onChange = {this.onCityChange}
                        required
                    />
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='password'
                        onChange = {this.onPasswordChange}
                        required 
                    />
                    {this.state.message==='successful' ? <Redirect to='/user/dashboard' /> : <p     className='error'>
                        {this.state.error}
                    </p>}
                    <button className='submit-button'>{this.state.button==='clicked'?<LoadingComponened10 />:<p>SignUp</p>} </button>
                </form>
            </div>
        )
    }
}

export default SignupFrom