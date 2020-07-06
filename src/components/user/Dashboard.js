import React from 'react' 

// import Matches from './Matches'
import Profile from './DisplayProfile'
import UpcomingMatches from '../match/UpComingMatch'


const Dashboard = () =>{
    return(
        <div className="dashboard">
            
            <Profile />
            <UpcomingMatches />
        </div>
    )
}



export default Dashboard 