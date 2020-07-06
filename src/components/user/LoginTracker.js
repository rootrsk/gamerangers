import React from 'react'
import { connect } from 'react-redux'


class LoginTracker extends React.Component{
    render(){
        return(
            <div>
                {console.log(this.props)}
            </div>
        )
    }
}

const stateToProps = (state) =>{
    return{
        user:state.user
    }
}

export default connect()(LoginTracker) 