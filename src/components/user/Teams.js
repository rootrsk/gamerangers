import React from 'react' 
import { NavLink } from 'react-router-dom'
import Solo from '../Team/SoloTeam'
import Duo from '../Team/DuoTeam'
import Squad from '../Team/SquadTeam'

class Teams extends React.Component{

    componentDidUpdate = () =>{
        
    }
    
    render(){
        return(
            <div>
                <div><h1>Teams</h1></div>
                {console.table(this.props.match.params)}
                <NavLink to="/user/teams/solo" >Solo</NavLink>
                <NavLink to="/user/teams/duo">Duo</NavLink>
                <NavLink to="/user/teams/squad">Squad</NavLink>
                <div>
                    {(()=>{
                        switch(this.props.match.params.type){
                            case 'solo' : 
                                return <Solo params={this.props.match.params}/>
                            case 'duo' : 
                                return <Duo params={this.props.match.params}/>
                            case 'squad' :
                                return <Squad params={this.props.match.params}/>
                            default :
                                return <p>Please Select a Valid Team type</p>
                        }
                    })()}
                </div>
            </div>
        )
    }
}


export default Teams