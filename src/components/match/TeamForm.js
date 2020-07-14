import React from 'react' 
import { Redirect } from 'react-router-dom'

import {LoadingComponened10} from '../others/LoadingPage'

class TeamForm extends React.Component{
    state = {
        match_type: this.props.match_type,
        match_id: this.props.params,
        error:''
    }
    
    componentDidMount = () =>{
        
    }
    onTeamNameChange = (e) =>{
        const team_name = e.target.value
        this.setState({team_name})
    }
    onTeamLeaderChange = (e) =>{
        const team_leader = e.target.value
        this.setState({team_leader})
    }
    onContactNoChange = (e) =>{
        const contact_no = e.target.value
        this.setState({contact_no})
    }
    onPaymentMethodChange = (e) =>{
        const payment_method = e.target.value
        this.setState({payment_method})
    }
    onPaymentIdChange = (e) =>{
        const payment_id = e.target.value
        this.setState({payment_id})
    }
    onPlayer_1_Change = (e) => {
        const player_1 = e.target.value
        this.setState({player_1})
    }
    onPlayer_2_Change = (e) => {
        const player_2 = e.target.value
        this.setState({player_2})
    }
    onPlayer_3_Change = (e) => {
        const player_3 = e.target.value
        this.setState({player_3})
    }
    onPlayer_4_Change = (e) => {
        const player_4 = e.target.value
        this.setState({player_4})
    }
    onSubmit = async(e) =>{
        e.preventDefault()
        this.setState({error:'joining match...',button:'clicked'})
        const response =await this.props.post({data:this.state})
        this.setState(response)
        this.setState({button:''})
    }
    render(){
        return(
            <div className='form'>
                <form onSubmit={this.onSubmit}>
                    <input type='text'
                        name='match_id' 
                        disabled
                        defaultValue={this.state.match_id}
                    />
                    <label>Team Name  </label>
                    <input
                        type='text'
                        name='team_name'
                        defaultValue={this.state.team_name}
                        onChange={this.onTeamNameChange}
                        required
                    />
                    <label>Team Leader</label>
                    <input
                        type='text'
                        name='team_leader'
                        defaultValue={this.state.team_leader}
                        onChange={this.onTeamLeaderChange}
                        required
                    />
                    <label >Contact Number</label>
                    <input
                        type='number'
                        name='contact_no'
                        defaultValue={this.state.contact_no}
                        onChange={this.onContactNoChange}
                        required
                    />
                    <label>Payment Method</label>
                    <select onChange={this.onPaymentMethodChange}
                        name='payment_method'
                        defaultValue={this.state.payment_method}
                    >
                        <option value='1'>UPI ID</option>
                        <option value='2'>Paytm</option>
                        <option value='3'>PhonePe</option>
                    </select>
                    <label >Payment Id</label>
                    <input
                        type='text'
                        name='payment_id'
                        defaultValue={this.state.payment_id}
                        onChange={this.onPaymentIdChange}
                    />
                    <label>player 1</label>
                    <input
                        type='text'
                        name='player_1'
                        defaultValue={this.state.player_1}
                        onChange={this.onPlayer_1_Change}
                        required
                    />
                    
                    <label>player 2</label>
                    <input
                        type='text'
                        name='player_2'
                        defaultValue={this.state.player_2}
                        onChange={this.onPlayer_2_Change}
                    />
                    <label>player 3</label>
                    <input
                        type='text'
                        name='player_3'
                        defaultValue={this.state.player_3}
                        onChange={this.onPlayer_3_Change}
                    />
                    <label>player 4</label>
                    <input
                        type='text'
                        name='player_4'
                        defaultValue={this.state.player_4}
                        onChange={this.onPlayer_4_Change}
                    />
                    
                    <p className='error'>{this.state.error}</p>
                    <button className='submit-button'>
                        {this.state.button==='clicked'? <LoadingComponened10 /> :<p>Register</p>}
                    </button>
                    {this.state.message==='successful'? <Redirect to='/user/dashboard' />:<p></p>}
                </form>
                
            
            </div>
        )
    }
}


export default TeamForm