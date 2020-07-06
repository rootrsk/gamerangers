import React from 'react' 
import TeamForm from '../match/TeamForm'
import axios from 'axios'



class MatchRegistration extends React.Component{
    post = async({data}) =>{
        console.log(data)
        const response = await axios({
            url:'/user/matchRegistation',
            method:'POST',
            data : data
        })
        return response.data
    }
    
    render () {
        
        return(
            <div>
                <h1>Registration</h1>
                <TeamForm 
                    params={this.props.match.params._id} 
                    post={this.post}
                    match_type={this.props.location.search.split('?')[1]} 
                />
            </div>
            
        )
    }
}

export default MatchRegistration