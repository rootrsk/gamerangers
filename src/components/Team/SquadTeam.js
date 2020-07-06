import React from 'react' 
import Form from './from'
import { connect } from 'react-redux'
import Axios from 'axios'
class Squad extends React.Component{
    state={user:this.props.user, params:this.props.params.type,team_type:'squad'}

    onSubmit = async(e) =>{
        e.preventDefault()
        const team_name = e.target.team_name.value      
        const team_leader = e.target.team_leader.value
        const contact_no = e.target.contact_no.value
        const payment_method = e.target.payment_method.value
        const payment_id = e.target.payment_id.value
        const player_1 = e.target.player_1.value
        const player_2 = e.target.player_2.value
        const player_3 = e.target.player_3.value
        const player_4 = e.target.player_4.value
       
        await this.setState({
            team_name,
            team_leader,
            contact_no,
            payment_method,
            payment_id,
            player_1,
            player_2,player_3,player_4
        })
         console.log(this.state)
        const response  = await Axios({
            url:'/user/team',
            method:'post',
            data:this.state
        })
        console.log(response.data)
    }
    render(){   
        return(
            <div>
                <h3>Squad Team</h3>
                <form onSubmit={this.onSubmit} id='team_from'>
                    <Form  params={{type:this.state.params}}/>
                </form>
            </div>
        )
    }
}
const stateToProps = (state) =>{
    return({
        user:state.user
    })
}
export default connect(stateToProps)(Squad)