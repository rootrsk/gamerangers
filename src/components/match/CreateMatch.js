import React from 'react'
import MatchForm from './MatchFrom'
import axios from 'axios'

class CreateMatch extends React.Component{
    render(){
        return(
            <div>
                <h3>Create Match Page</h3>
                <MatchForm post={post} />
            </div>
        )
    }
}
const post = async(props) =>{

    const response = await axios({
        url:'https://rootrsk-gamerangers-api.herokuapp.com/match/create',
        method:'post',
        data:props
    })
    return response

}






export default CreateMatch