import React from 'react' 
import Axios from 'axios'
class SquadForm extends React.Component{
    state={}
    componentDidMount = async() =>{
        const response = await Axios({
            method:'get',
            url:'https://rootrsk-gamerangers-api.herokuapp.com/user/me'
        })
        console.table(this.props.params)
        if(response.data.user){
            console.log(response.data.user.squad_team)
        } 
        // this.setState({user:response.data})
        // const team_name = e.target.team_name.value
        // const team_leader = e.target.team_leader.value
        // const contact_no = e.target.contact_no.value
        // const payment_method = e.target.payment_method.value
        // const payment_id = e.target.payment_id.value
        // const player_1 = e.target.player_1.value
        // const player_2 = e.target.player_2.value
        // const player_3 = e.target.player_3.value
        // const player_4 = e.target.player_4.value
       
        // await this.setState({
        //     team_name,
        //     team_leader,
        //     contact_no,
        //     payment_method,
        //     payment_id,
        //     player_1,
        //     player_2,player_3,player_4
        // })
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
    // onSubmit = async(e) =>{
    //     e.preventDefault()
    //     console.log(this.state)
    //     this.props.post({data:this.state})
    // }
    render(){
        return(
            <div >
                {/* {console.table(this.state)}
                {console.table(this.props)} */}
                    <label>Team Name : </label><br/>
                    <input
                        type='text'
                        name='team_name'
                        defaultValue={this.state.team_name}
                        onChange={this.onTeamNameChange}
                        required
                    /><br/>
                    <label>Team Leader</label><br/>
                    <input
                        type='text'
                        name='team_leader'
                        defaultValue={this.state.team_leader}
                        onChange={this.onTeamLeaderChange}
                        required
                    /><br/>
                    <label >Contact Number</label><br/>
                    <input
                        type='number'
                        name='contact_no'
                        defaultValue={this.state.contact_no}
                        onChange={this.onContactNoChange}
                        required
                    /><br/>
                    <label>Payment Method</label><br/>
                    <select onChange={this.onPaymentMethodChange}
                        name='payment_method'
                        defaultValue={this.state.payment_method}
                    >
                        <option value='1'>UPI ID</option>
                        <option value='2'>Paytm</option>
                        <option value='3'>PhonePe</option>
                    </select><br/>
                    <label >Payment Id</label><br/>
                    <input
                        type='text'
                        name='payment_id'
                        defaultValue={this.state.payment_id}
                        onChange={this.onPaymentIdChange}
                    /><br/>
                    <label>player 1</label><br/>
                    <input
                        type='text'
                        name='player_1'
                        defaultValue={this.state.player_1}
                        onChange={this.onPlayer_1_Change}
                        required
                    /><br/>
                    
                    <label>player 2</label><br/>
                    <input
                        type='text'
                        name='player_2'
                        defaultValue={this.state.player_2}
                        onChange={this.onPlayer_2_Change}
                    /><br/>
                    <label>player 3</label><br/>
                    <input
                        type='text'
                        name='player_3'
                        defaultValue={this.state.player_3}
                        onChange={this.onPlayer_3_Change}
                    /><br/>
                    <label>player 4</label><br/>
                    <input
                        type='text'
                        name='player_4'
                        defaultValue={this.state.player_4}
                        onChange={this.onPlayer_4_Change}
                    /><br/>
                    <button >Submit</button>
                {/* </form> */}
            </div>
        )
    }
}



// const SquadForm = (props) =>{
//     console.log(props.team)
//     if(props.team){
//         if(props.team.name)
//         console.table(props.team.name)
//     }
//     return(
//         <div >
//                     <label>Team Name : </label><br/>
//                     <input
//                         type='text'
//                         name='team_name'
//                         // defaultValue={props.team}
//                         // onChange={this.onTeamNameChange}
//                         required
//                     /><br/>
//                     <label>Team Leader</label><br/>
//                     <input
//                         type='text'
//                         name='team_leader'
//                         // defaultValue={this.state.team_leader}
//                         // onChange={this.onTeamLeaderChange}
//                         required
//                     /><br/>
//                     <label >Contact Number</label><br/>
//                     <input
//                         type='number'
//                         name='contact_no'
//                         // defaultValue={this.state.contact_no}
//                         // onChange={this.onContactNoChange}
//                         required
//                     /><br/>
//                     <label>Payment Method</label><br/>
//                     <select 
//                         // onChange={this.onPaymentMethodChange}
//                         name='payment_method'
//                         // defaultValue={this.state.payment_method}
//                     >
//                         <option value='1'>UPI ID</option>
//                         <option value='2'>Paytm</option>
//                         <option value='3'>PhonePe</option>
//                     </select><br/>
//                     <label >Payment Id</label><br/>
//                     <input
//                         type='text'
//                         name='payment_id'
//                         // defaultValue={this.state.payment_id}
//                         // onChange={this.onPaymentIdChange}
//                     /><br/>
//                     <label>player 1</label><br/>
//                     <input
//                         type='text'
//                         name='player_1'
//                         // defaultValue={this.state.player_1}
//                         // onChange={this.onPlayer_1_Change}
//                         required
//                     /><br/>
                    
//                     <label>player 2</label><br/>
//                     <input
//                         type='text'
//                         name='player_2'
//                         // defaultValue={this.state.player_2}
//                         // onChange={this.onPlayer_2_Change}
//                     /><br/>
//                     <label>player 3</label><br/>
//                     <input
//                         type='text'
//                         name='player_3'
//                         // defaultValue={this.state.player_3}
//                         // onChange={this.onPlayer_3_Change}
//                     /><br/>
//                     <label>player 4</label><br/>
//                     <input
//                         type='text'
//                         name='player_4'
//                         // defaultValue={this.state.player_4}
//                         // onChange={this.onPlayer_4_Change}
//                     /><br/>
//                     <button >Submit</button>
//                 {/* </form> */}
//             </div>
//     )
// }

export default SquadForm