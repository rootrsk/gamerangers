import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingComponent from '../others/LoadingPage'


class Profile extends React.Component{
    
    state={init:'Loading...'}
    render(){
        return(
            <div className="display-profile">
                <div className="display-profile__details">
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
            <div className="display-user-profile">
                <p>{props.state.name}</p>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(Profile)