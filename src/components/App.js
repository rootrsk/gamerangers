import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../styles/style.scss'
import '../styles/style.css'
import Help from './Help'
import Login from './Login'
import Signup from './Signup'
import Error404 from './Error404'
import User from './user/User'
import HomePage from './HomePage'
import Admin from './admin/Admin'
import Logo from './Logo'
import Logins from './admin/Login'
import { connect } from 'react-redux'
import axios from 'axios'


class App  extends React.Component {
    componentDidMount = async() =>{
        console.log()
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/user/me',
            // url:'http://localhost:3001/user/login',
            method:'get',
            data: this.state,
            withCredentials: true
        })
        console.log(response.data)
        if(response.data.authentication==='loggedin'){
            this.props.dispatch({
                type:'USER',
                user:response.data
            })
        }
    }

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Logo />
                    <Switch>
                        <Route path='/'       component={HomePage} exact/>
                        <Route path='/help'   component={Help} />
                        <Route path="/login"  component={Login} />
                        <Route path="/logins"  component={Logins} /> 
                        <Route path="/signup" component={Signup} />
                        <Route path='/user'   component={User} />
                        <Route path='/admin'  component={Admin} />
                        <Route path="*" component ={Error404} />     
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
} 

const mapStateToProps = (state)=>{
    return{
        user:state.user
    }
}


export default connect(mapStateToProps)(App) 