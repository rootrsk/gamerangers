import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Timer from '../others/CountDownTimer'



class LiveMatch extends React.Component{
    state={next_match:''}
    componentDidMount = async () =>{
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/next-match',
            method:'get'
        })
        const response2 = await axios ({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/live-match'
        })
        if(response.data || response2.data){
            this.setState({next_match:response.data})
            this.setState({live_match:response2.data})
            console.log(this.state)
        }
    }

    render() {
        return(
            <div>
                 <div className='slider'>
                    <div>
                        {(()=>{
                            if(this.state.live_match) return <RenderLiveMatch match={this.state.live_match} />
                            else if(this.state.next_match) return <RenderNextMatch match={this.state.next_match} />
                            else return <p>No Mathc Found</p>
                        })()}
                    </div>
                </div>
            </div>
           
        )
    }
}


const RenderNextMatch = (props) =>{
    return(
        <div className='next-match'>
            <div>
                <h3 className='next-text'>Next Match</h3>
            </div>
            <div>
                <Timer time={props.match.time} />
            </div>
        </div>
    )

}
const RenderLiveMatch = (props) =>{
    
    // const showTime = time.split('GMT')[0]
    const time = () =>{
        const t  = new Date(props.match.time).toString()
        return t.split('GMT')[0]
    }
    return(
        <div className='live-match'>
            <div>
                <h3 className='live-text'>Live</h3>
            </div>
            <div>
                <p>From :{time()} </p>
                <button className='submit-button'>Show </button>
            </div>
        </div>
    )
}


export default LiveMatch