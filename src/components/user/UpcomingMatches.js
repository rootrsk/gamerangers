import React from 'react' 
import axios from 'axios'



class UpcomingMatches extends React.Component{
    state ={matches:[]}
    componentDidMount =async()=>{
        const response = await axios({
            url : 'https://rootrsk-gamerangers-api.herokuapp.com/user/matches',
            method : 'get',
            withCredentials: true
        })
        this.setState({matches:response.data})
    }
    render(){
        return(
            <div>
                <h2>Upcoming Matches</h2>
                {this.state.matches.length>0 ? this.state.matches.map((x)=>{
                    return <RenderMatches data={x} />
                }):<p>No Matches found</p>}
                
            </div>
        )
    }
}


const RenderMatches = (match)=>{
    return(
        <div>
            {console.log(match)}
            <p>{match.data._id} </p>
        </div>
    )
}


export default UpcomingMatches 

