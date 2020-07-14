import React from 'react' 

// import Matches from './Matches'
import Profile from './DisplayProfile'
import UpcomingMatches from '../match/UpComingMatch'
import UserMatches from '../match/UserMatches'
import LiveMatch from '../match/LiveMatch'


const Dashboard = () =>{
    return(
        <div className="dashboard">
            
            <Profile />
            <UpcomingMatches />
            <UserMatches  />
            <LiveMatch />
        </div>
    )
}



export default Dashboard 