import React from 'react' 
import axios from 'axios'
import Header from '../Header'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class Login extends React.Component{

    state = {login_error : '',message:'',}
    onSubmit = async(e) =>{
        e.preventDefault()
        this.setState({login_error:'Loggingin...'})
        console.log(this.state)
        const data = {
            email : this.state.email,
            password: this.state.password
        }
        const response =  await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/admin/login',
            method : 'POST',
            data
        })
        this.setState({
            login_error:response.data.error,
            message:response.data.message
        })
        if(response.data.message==='successful'){
            this.props.dispatch({
                type:'USER',
                user:response.data
            })
        }
       

    }
    onEmailChange = (e) =>{
        const email = e.target.value
        this.setState({email})
    }
    onPasswordChange = (e) =>{
        const password = e.target.value
        this.setState({password})
    }
    render(){
        return(
            <div >
                <Header />
                <h2 >Admin Login</h2>
                <div className='form'>
                    
                    <form onSubmit={this.onSubmit}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            required
                            onChange={this.onEmailChange} 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            required 
                            onChange={this.onPasswordChange}
                        />
                        <button>Login</button>
                        {this.state.message==='successful' && !this.state.login_error ? <Redirect to='/admin/dashboard'/>: this.state.login_error}
                    </form>
                </div>
                
                
            </div>
        )
    }
}


export default connect()(Login) 