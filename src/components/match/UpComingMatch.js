import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class UpComingMatches extends React.Component{
    state={matches : []}
    componentDidMount = async () =>{
        const response = await axios({
            url:'/matches',
            method:'get'
        })
        if(response.statusText==='OK'){
            this.setState({matches:response.data})
            console.log(this.state)
        }
    }

    render() {
        return(
            <div className='slider'>
                {/* <h3>Upcoming Mathches</h3> */}
                {this.state.matches.map((match,index)=>{
                    return <RenderMatch match={match} index={index} key={match._id}/>
                })}
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
                <p></p>
                <Link to={`/user/match/registration/${props.match._id}?${props.match.match_type}`} >Register</Link>
            </div>
            
        </div>
    )
}

const Register = (props) =>{
    console.log(props)
    console.log('Going to reg page')
    return <div>
        <Link to='/'/>
    </div>
}
Register()

connect () (Register)

export default UpComingMatches