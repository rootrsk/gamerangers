import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'



class UpdateMatch extends React.Component{
    state = {error:'',message:'',button:'',matches:''}
    componentDidMount = async(props) =>{
        if(this.props.match.params.id){
            const response = await axios({
                url:`https://rootrsk-gamerangers-api.herokuapp.com/admin/match/${this.props.match.params.id}`,
                method:'get',
                withCredentials : true
            })
            this.setState({})
            await this.getHandler(response)
            console.log(response)
        } else {
            this.setState({error:'please visit homepage and come again'})
        }

    }

    getHandler = async(response) =>{
        
        let {
            time,
            match_type,
            match_status,
            entry_fee,winning_prize,
            per_kill_prize,payment_link,
            youtube_link,room_id,room_password
        } = response.data.match

            
        this.setState({
            time:new Date(time),
            match_type,
            match_status,
            entry_fee,
            winning_prize,
            per_kill_prize,
            payment_link,
            youtube_link,
            room_id,
            room_password
        })
        
    }


    postHandler  = async (id) =>{
        const response = await axios({
            url:`https://rootrsk-gamerangers-api.herokuapp.com/admin/match/${id}`,
            method:'PATCH',
            data: this.state,
            withCredentials : true
        })
        return response
    }

    onTimeChange = (e) =>{
        const time = e.target.value
        this.setState({time})
    }

    onMatchTypeChange = (e) =>{
        const match_type = e.target.value
        this.setState({match_type})
    }
    onMatchStatusChange = (e) =>{
        const match_status = e.target.value
        this.setState({match_status})
    }
    onWinningPrizeChange = (e)=>{
        const winning_prize = e.target.value
        this.setState({winning_prize})
    }
    onPerKillPrizeChange = (e) =>{
        const per_kill_prize = e.target.value
        this.setState({per_kill_prize})
    }
    onEntryFeeChange = (e) =>{
        const entry_fee = e.target.value
        this.setState({entry_fee})
    }
    onPaymentLinkChange = (e) =>{
        const payment_link = e.target.value
        this.setState({payment_link})
    }
    onRoomIdChange = (e)=>{
        const room_id = e.target.value
        this.setState({room_id})
    }
    onRoomPasswordChange = (e) =>{
        const room_password = e.target.value
        this.setState({room_password})
    }
    onYoutubeLinkChange = (e)=>{
        const youtube_link = e.target.value
        this.setState({youtube_link})
    }

    onSubmit = async(e) =>{
        e.preventDefault()
        console.log(this.state)
        const response = await this.postHandler(this.props.match.params.id)
        this.setState({error:response.data.error,message:response.data.message})
        if(this.state.message==='successful' && this.state.error===''){
            this.props.history.push('/admin/matches')
        }
    }
    render(){
        return(
            <div className='form'>
                <form onSubmit={this.onSubmit}>
                    <label>Time</label>
                    <input 
                        type="datetime"
                        name="time" 
                        placeholder="Time"
                        required
                        onChange={this.onTimeChange}
                        defaultValue={this.state.time}
                        
                    />
                    <label>Entry fee</label>
                    <input 
                        type='number' 
                        placeholder='Entry Fee'
                        defaultValue={this.state.entry_fee}
                        required  
                        onChange={this.onEntryFeeChange}
                    />
                    <label>Winning Prize</label>
                    <input 
                        type='number' 
                        placeholder='Winning Prize' 
                        defaultValue={this.state.winning_prize}
                        onChange={this.onWinningPrizeChange}
                        required
                    />
                    <label>Per Kill Prize</label>
                    <input 
                        type='number' 
                        placeholder='per kill prize'
                        defaultValue={this.state.per_kill_prize}
                        onChange={this.onPerKillPrizeChange} 
                        required
                    />
                    <label>Payment Link</label>
                    <input 
                        name="payment_link" 
                        type="text" 
                        placeholder="Payment Link" 
                        defaultValue={this.state.payment_link}
                        onChange={this.onPaymentLinkChange} 
                    />
                    <label>Match Type</label>   
                    <select onChange={this.onMatchTypeChange} defaultValue={this.state.match_type}>
                        <option value='1'>Solo</option>
                        <option value='2'>Duo</option>
                        <option value='3'>Squad</option>
                    </select>
                    <label>Match Status</label>
                    <select onChange={this.onMatchStatusChange} defaultValue={this.state.match_status} >
                        <option value='1'>Registration Open</option>
                        <option value='2'>Registration Closed</option>
                        <option value='3'>Live</option>
                        <option value='4'>Finished</option>
                    </select>
                    <label>Room Id</label>
                    <input 
                        type='number'
                        placeholder='Room id'
                        defaultValue={this.state.room_id}
                        onChange={this.onRoomIdChange}
                    />
                    <label>Room Pass</label>
                    <input 
                        type='text' 
                        placeholder='Room Password'
                        defaultValue={this.state.room_password}
                        onChange={this.onRoomPasswordChange}
                    />
                    <label>Video Link</label>
                    <input 
                        type='text' 
                        placeholder='Video Link'
                        defaultValue={this.state.youtube_link}
                        onChange={this.onYoutubeLinkChange}
                    />
                    <p className='error'>{this.state.error}</p>
                    <p className='error'>{this.state.message}</p>
                    <button className='submit-button'>Post</button>
                    
                </form>
            </div>
        )
    }
}


export default connect()(UpdateMatch) 