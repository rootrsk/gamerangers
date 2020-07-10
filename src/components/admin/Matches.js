import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'


class UpComingMatches extends React.Component{
    state={matches : []}
    componentDidMount = async () =>{
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/admin/matches',
            method:'get',
            withCredentials : true
        })
        if(response.statusText==='OK'){
            this.setState({matches:response.data.matches})
            console.log(this.state)
        }
        console.log(response)
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
                <Link to={`/admin/match-teams/${props.match._id}`} >Teams</Link>
                <Link to={`/admin/match-update/${props.match._id}`} >Update</Link>
                <Link to={`/admin/match-delete/${props.match._id}`} >Delete</Link>
            </div>
            
        </div>
    )
}


export default UpComingMatches