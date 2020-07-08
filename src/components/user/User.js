import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Error404 from './../Error404'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Header from './Header'
import Matches from './Matches'
import Logout from './Logout '
import Teams from './Teams'
import ProfileEdit from './UserUpdate'
import MatchRegistration from './MatchRegistration'
import { connect } from 'react-redux'
import axios from 'axios'
// import LoginTracker from './LoginTracker'

class User extends React.Component  {
    componentDidMount = async() =>{
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/user/me',
            method:'get'
        })
        this.props.dispatch({
            type:'USER',
            user:response.data
        })
    }
    componentDidUpdate =  async() =>{
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/user/me',
            method:'get'
        })
        if(response.data.authentication==='loggedout'){
            this.props.dispatch({
                type:'USER',
                user:response.data
            })
        }
        if(this.props.user.user.authentication==='loggedout'){
            this.props.history.push('/login')
        }
    }
    render(){
        let path = '/user'
        return(
            <div>
                <Header />
                <Switch>
                    <Route  path={`${path}/dashboard`} component={Dashboard}/>
                    <Route  path={`${path}/matches`} component={Matches} />
                    <Route  path={`${path}/profile`} component={Profile} />
                    <Route  path={`${path}/logout`} component={Logout} />
                    <Route  path={`${path}/teams/:type`} component={Teams} />
                    <Route  path={`${path}/profile-edit`} component={ProfileEdit} />
                    <Route  path={`/user/match/registration/:_id`} component = {MatchRegistration} />
                    <Route  component={Error404} />
                </Switch>
            </div>
        )
    }

}
const mapStateToProps = (state) =>{
    return {
        user: state.user
    }
}

export default  connect(mapStateToProps)(User)