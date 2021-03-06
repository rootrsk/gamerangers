import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MatchNotFound from '../others/MatchNotFound'
import { connect } from 'react-redux'


class UserMatches extends React.Component{
    state={matches : []}
    componentDidMount = async () =>{
        console.log('User')
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/user/matches',
            method:'get',
            withCredentials : true
        })
        console.log(response.data.length)
        if(response.data.length>0){
            this.setState({matches:response.data})
        }
    }

    render() {
        return(
            <div>
                <h2>Your Matches</h2>
                <div className='slider'>
                {this.state.matches.length>0?this.state.matches.map((match,index)=>{
                    return <RenderMatch match={match.match} index={index}key={match._id}team={match.team}/>
                }):<MatchNotFound />}
                </div>
            </div>
            
        )
    }
}


const RenderMatch = (props) =>{
    const status = ()=>{
        switch(props.match.match_status){
            case 1 : 
                return 'Registration Open'
            case 2 : 
                return 'Registration Closed'
            case 3 : 
                return 'Live'
            case 4 : 
                return 'Finished'
            default :
                return 'Update Soon'
        }
    }
    const type = ()=>{
        switch(props.match.match_type){
            case 1 : 
                return 'Solo'
            case 2 : 
                return 'Duo'
            case 3 : 
                return 'Squad'
            case 4 : 
                return 'Finished'
            default :
                return 'Update Soon'
        }
    }
    

    return(
        <div className='slides'>
            <div>
                <h2>Match : {props.index+1}</h2>
                <p>Time : {Date(props.match.time).split('GMT')[0]} </p>
                <p>Winning Prize : {props.match.winning_prize} &#8377;</p>
                <p>Entry fee : {props.match.entry_fee} &#8377;</p>
                <p>Per Kill Prize : {props.match.per_kill_prize} </p>
                <p>Type : {type()} </p>
                <p>Status : {status()} </p>
                <p>Team : {props.team.team_name} </p>
                <Link to={`/user/match/registration/${props.match._id}?${props.match.match_type}`} >Edit</Link>
            </div>
        </div>
    )
}



export default UserMatches