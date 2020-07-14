import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Timer from '../others/CountDownTimer'



class LiveMatch extends React.Component{
    state={next_match:''}
    componentDidMount = async () =>{
        console.log('mountedd')
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/next-match',
            // url:'http://localhost:3001/next-match',
            method:'get',
            withCredentials: true
        })
        console.log(response)
        const response2 = await axios ({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/live-match',
            // url:'http://localhost:3001/live-match',
            withCredentials: true,
            method:'get'

        })
        console.log(response2)
        const response3 = await axios({
            // url:'http://localhost:3001/user/match-details',
            url:'https://rootrsk-gamerangers-api.herokuapp.com/user/match-details',
            method:'post',
            withCredentials :true,
            data:{_id:response2.data._id}
        })
        console.log(response3)
        if(response.data || response2.data){
            this.setState({next_match:response.data})
            this.setState({live_match:response2.data})
            this.setState({match_details:response3.data.match})
            this.setState({error:response3.data.error})
        }
        console.log(this.state)
    }

    render() {
        return(
            <div className='live-match-div'>
                <div>
                    {(()=>{
                        if(this.state.live_match) return <RenderLiveMatch match={this.state.live_match} match_details={this.state.match_details} error={this.state.error} />
                        else if(this.state.next_match) return <RenderNextMatch match={this.state.next_match}  />
                        else return <p>No Match Found</p>
                    })()}
                </div>
            </div>
           
        )
    }
}


const RenderNextMatch = (props) =>{
    return(
        <div className='next-match'>
            <div></div>
            <div className='rotate-vert-center'>
                <span className='live-text text-pop-up-top'>NEXT MATCH</span>
            </div>
            <div className='next-match-time'>
                <Timer time={props.match.time} key={props.match._id}/>
            </div>
            <div className='register'>
            {props.match.match_status===1?<Link  to={`/user/match/registration/${props.match._id}`}>Register</Link>:<p></p>}
            </div>
            
        </div>
    )
    

}
const RenderLiveMatch = (props) =>{
    
    const time = () =>{
        const t  = new Date(props.match.time).toString()
        return t.split('GMT')[0]
    }
    
    return(
        <div>
            <div className="scene scene--card">
                <div className="card">
                    <div className="card__face card__face--front">
                    <div className='live-match'>
                <div className="rotate-vert-center">
                    <span className='live-text text-pop-up-top'>LIVE</span>
                </div>
                    <div>
                        <p className='bold'>{time()} </p>
                        <button className='show-button' onClick={FetchMatchDetails}>Show </button>
                    </div>
                </div>
                    </div>
                        <div className="card__face card__face--back">
                            <div className="rotate-vert-center">
                                <span className='live-text text-pop-up-top'>LIVE</span>
                            </div>
                            <div>
                                {(()=>{{
                                    if(props.match_details){
                                        if(props.match_details.room_id && props.match_details.room_password){
                                            return <RenderRoomDetails roomDetails={props.match_details} />
                                        }
                                    }else if(props.error){
                                        return <p>{props.error}</p>
                                    }
                                }})()}
                                
                            </div>
                            
                            <button className='show-button' onClick={FetchMatchDetails}>Hide </button>
                        </div>
                    </div>
            </div>
        </div>
        
    )
}
const FetchMatchDetails = (match) =>{
    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
}

const RenderRoomDetails = (props) =>{
    console.log(props)
    return(
        <div className='room-details'>
            <div>Room  id : {props.roomDetails.room_id}</div>
            <div>Room pass : {props.roomDetails.room_password}</div>
        </div>
    )
}

export default LiveMatch