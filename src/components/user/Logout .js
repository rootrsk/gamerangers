import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Logout extends React.Component{
    state = {authentication:''}
    componentDidMount = async() =>{
        console.log(document.cookie)
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/user/logout',
            method:'get',
            withCredentials: true
        })
        if(response.data.authentication==='loggedout'){
            console.log(response)
            console.log(document.cookie)
            this.props.dispatch({
                type:'USER',
                user: response.data
            })
            this.setState({authentication:response.data.authentication})
        }
    }
    render(){
        return(
            <div>
                
                {this.state.authentication==='loggedout'? <Redirect to='/' />: <h1>Logging Out...</h1>}
            </div>
        )
        
    }
}

export default connect()(Logout)  