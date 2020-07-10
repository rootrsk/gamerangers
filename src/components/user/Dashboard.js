import React from 'react' 

// import Matches from './Matches'
import Profile from './DisplayProfile'
import UpcomingMatches from '../match/UpComingMatch'
import UserMatches from '../match/UserMatches'


const Dashboard = () =>{
    return(
        <div className="dashboard">
            
            <Profile />
            <UpcomingMatches />
            <UserMatches  />
        </div>
    )
}



export default Dashboard 