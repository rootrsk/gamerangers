import React from 'react'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'

import Error404 from './../Error404'
import Dashboard from './Dashboard'
import Logout from '../user/Logout '
import Header from './Header'
import Matches from './Matches'
import CreateMatch from '../match/CreateMatch'
import UpdateMatch from '../match/UpdateMatch'
import DeleteMatch from '../match/DeleteMatch'
import Profile from './Profile'
import Teams from './Teams'
import { connect } from 'react-redux'



class Admin extends React.Component{
    componentDidMount = async() =>{
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/admin/me',
            method:'get',
            withCredentials : true
        })
        this.props.dispatch({
            type:'USER',
            user:response.data
        })
    }

    componentDidUpdate =  async() =>{
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/admin/me',
            method:'get',
            withCredentials : true
        })
        if(response.data.authentication==='loggedout'){
            this.props.dispatch({
                type:'USER',
                user:response.data
            })
        }
        if(this.props.user.user.authentication==='loggedout'){
            this.props.history.push('/logins')
        }
    }
    
    render(){
        let path = '/admin'
        
        return(
            
            <div>
                <Header />
                <Switch>
                    <Route  path={`/admin/dashboard`} exact component={Dashboard}/> 
                    <Route  path={`${path}/profile`} component={Profile} />
                    <Route  path={`${path}/logout`} component={Logout} />
                    <Route  path={'/admin/match-create'} component={CreateMatch} />
                    <Route  path={`${path}/match-update/:id`} component={UpdateMatch} />
                    <Route  path={`${path}/match-delete/:id`} component={DeleteMatch} />
                    <Route  path={`${path}/match-teams/:id`} component={Teams} />
                    <Route  path={`${path}/matches`} component={Matches} />
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

export default connect(mapStateToProps)(Admin) 