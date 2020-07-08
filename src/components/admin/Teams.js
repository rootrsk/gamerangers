import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'


class Teams extends React.Component{
    state={matches : [],teams:[]}
    componentDidMount = async () =>{
        const response = await axios({
            url:`https://rootrsk-gamerangers-api.herokuapp.com/admin/match/teams/${this.props.match.params.id}`,
            method:'get'
        })
        this.setState({teams:response.data.teams,match:response.data.match})
    }

    render() {
        return(
            <div className='box'>
                {this.state.match?<RenderMatch match={this.state.match} />: <p></p>}

                {this.state.teams.map((team,index)=>{
                    return <RenderTeam team={team} index={index} key={team._id}/>
                })}
            </div>
        )
    }
}


const RenderMatch = (props) =>{
    console.log(props)
    if(!props) return
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
        <div className='container'>
            <div >
                <h2>Match Details</h2>
                <p>Time : {Date(props.match.time).split('GMT')[0]} </p>
                <p>Winning Prize : {props.match.winning_prize} &#8377;</p>
                <p>Entry fee : {props.match.entry_fee} &#8377;</p>
                <p>Per Kill Prize : {props.match.per_kill_prize} </p>
                <p>Type : {type()} </p>
                <p>Status : {status()} </p>

            </div>
            
        </div>
    )
}

const RenderTeam = (props) =>{
    console.log(props)
    return(
        <div className='container'>
            <div >
                <h2>Team No : {props.index+1} </h2>
                <h3> {props.team.team_name} </h3>
                <p>Player 1 : {props.team.player_1} </p>
                <p>Player 2 : {props.team.player_2} </p>
                <p>Player 3 : {props.team.player_3} </p>
                <p>Player 4 : {props.team.player_4} </p>

            </div>
            
        </div>
    )
}


export default connect()(Teams)