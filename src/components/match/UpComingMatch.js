import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Timer from '../others/CountDownTimer'
import MatchNotFound from '../others/MatchNotFound'


class UpComingMatches extends React.Component{
    state={matches : []}
    componentDidMount = async () =>{
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/matches',
            method:'get'
        })
        console.log(response.data.length)
        console.log(response)
        if(response.data.length>0){
            this.setState({matches:response.data})
        }
    }

    render() {
        return(
            <div>
                <h2>Upcoming Matches</h2>
                 <div className='slider'>
                {this.state.matches.length>0?this.state.matches.map((match,index)=>{
                    return <RenderMatch match={match} index={index} key={match._id}/>
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
    const time = () =>{
        const t = new Date(props.match.time).toString()
        const showDate = t.split('GMT')[0]
        return  showDate
    }
    time()


    return(
        <div className='slides'>
            <div>
                <h2>Match : {props.index+1}</h2>
                <p>Time : {time()} </p>
                <p>Winning Prize : {props.match.winning_prize} &#8377;</p>
                <p>Entry fee : {props.match.entry_fee} &#8377;</p>
                <p>Per Kill Prize : {props.match.per_kill_prize} &#8377;</p>
                <p>Type : {type()} </p>
                <p>Status : {status()} </p>
                {<Timer time={props.match.time} />}
                <Link to={`/user/match/registration/${props.match._id}?${props.match.match_type}`} >Register</Link>
            </div>
            
        </div>
    )
}

export default UpComingMatches