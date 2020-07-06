import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../styles/style.scss'
import Help from './Help'
import Login from './Login'
import Signup from './Signup'
import Error404 from './Error404'
import User from './user/User'
import HomePage from './HomePage'
import Admin from './admin/Admin'
import Logo from './Logo'
import Logins from './admin/Login'


const App = (props) =>(
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


export default App