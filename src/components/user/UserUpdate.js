import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import LoadingComponent from '../LoadingAnimation'
import { connect } from 'react-redux'
import {LoadingComponened10} from '../others/LoadingPage'






class ProfileEdit extends React.Component{
    state = {}
    componentDidMount = async() =>{
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/user/me',
            method:'get',
        })
        this.setState({
            response
        })
        

        if(response.data.authentication!=='loggedin'){

        }
        const user = response.data.user
        await this.setState({
            name:user.name,
            email:user.email,
            contact_no: user.contact_no,
            city : user.city
        })
    }
    onNameChange = (e) =>{
        const name = e.target.value
        this.setState({name})
    }
    
    onEmailChange = (e)=>{
        const email = e.target.value
        this.setState({email})
    }
    onContactNumberChange = (e) =>{
        const contact_no = e.target.value
        this.setState({contact_no})
    }
    onCityChange = (e) =>{
        const city= e.target.value
        this.setState({city})
    }
    onPasswordChange = (e) =>{
        const password = e.target.value
        this.setState({password})
    }
    onSubmit = async(e) =>{
        e.preventDefault()
        this.setState({button:'clicked'})
        const data = {
            name:this.state.name,
            email:this.state.email,
            city:this.state.city,
            contact_no:this.state.contact_no
        }
        console.log(this.state)
        const response = await axios({
            url:'https://rootrsk-gamerangers-api.herokuapp.com/user/profile',
            method:'patch',
            data:data
        })
        console.log(response)
        await this.setState({
            error:response.data.error,
            message : response.data.message
        })
        if(this.state.error) this.setState({button:''})

    }
    render(){
        return(
            <div className='form'>
                <form onSubmit={this.onSubmit} method='POST' >
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='name'
                        onChange={this.onNameChange}
                        defaultValue={this.state.name}
                        required
                    />
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='email'
                        onChange={this.onEmailChange} 
                        defaultValue={this.state.email}
                        required
                    />
                    <input type='number' 
                        name='contact_no' 
                        placeholder="contact number"
                        onChange={this.onContactNumberChange}
                        defaultValue={this.state.contact_no}
                        required 
                    />
                    <input 
                        type='text' 
                        name='city' 
                        placeholder='city' 
                        onChange = {this.onCityChange}
                        defaultValue={this.state.city}
                        required
                    />
                    {this.state.message==='successful' ? <Redirect to='/user/profile' /> : <p className='error'>
                        {this.state.error}
                    </p>}
                    {(()=>{
                        if(this.props.user.user.authentication==='loggedin') 
                            return 
                        else if(this.props.user.user.error)
                            return <p>HAVE SOME EROROR</p>
                        else if(this.props.user.user.authentication==='loggedout')
                            return <Redirect to='/login' />
                        else
                            return <LoadingComponent />
                    })()}

                    <button className='submit-button'>
                        {this.state.button==='clicked'?<LoadingComponened10 /> : <p>Update</p>}
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(ProfileEdit)