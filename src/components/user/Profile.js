import React from 'react'
import { Redirect, } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingComponent from '../LoadingAnimation'

class Profile extends React.Component{
    
    state={init:'Loading...'}
    render(){
        return(
            <div className="profile">
                <div className="profile__details">
                {(()=>{
                    if(this.props.user.user.authentication==='loggedin') 
                        return <UserProfile state={this.props.user.user.user} props={this.props} />
                    else if(this.props.user.user.error)
                        return <p>HAVE SOME EROROR</p>
                    else if(this.props.user.user.authentication==='loggedout')
                        return <Redirect to='/login' />
                    else
                        return <LoadingComponent />
                })()}
                </div>
               
            </div>
        )
    }
}

const UserProfile =(props)=>{
    return(
        <div>
            <div className="user-profile">
                <p>Name : {props.state.name}</p>
                <p>Email : {props.state.email}</p>
                <p>Phone : {props.state.contact_no}</p>
                <p>City : {props.state.city} </p>
                {console.log(props)}
            </div>
            <div className="center-button-div">
                <button   
                    onClick={()=>(props.props.history.push('/user/profile-edit'))}
                    className="center-button"
                >Edit</button>
            </div>
            {/* <Link to='/user/profile-edit' className="center-button">Edit</Link> */}
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(Profile)