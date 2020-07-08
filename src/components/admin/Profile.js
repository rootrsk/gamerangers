import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Profile extends React.Component{
    state={}

    componentDidMount = async() =>{
        console.log("hello")
        const response =await axios({
            url :'https://rootrsk-gamerangers-api.herokuapp.com/admin/me',
            method:'get'
        })
        console.log(response)
        if(true){
            this.setState({
                user : response.data.user,
                authentication:response.data.authentication,
                message : response.data.message,
                error : response.data.error
            })
        }
    }
    render(){
        return(
            <div>
                <h3>Admin Profile</h3>
                {this.state.user ? <AdminProfile user={this.state.user} />: <p></p>}
                {this.state.authentication==='loggedout' ? <Redirect to='/admin/login' /> :<p></p>}
            </div>
        )
    }
}


const AdminProfile = (props) =>{
    console.log(props)
    return(
        <div>
            <p>Name : {props.user.name} </p>
            <p>Email : {props.user.email} </p>
            <p>City : {props.user.city} </p>
            <p>Phone : {props.user.contact}</p>
        </div>
    )
}

export default Profile