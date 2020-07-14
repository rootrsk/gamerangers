import React from 'react'
import UserMatches from '../match/UserMatches'
import UpcomingMatches from '../match/UpComingMatch'
import Profile from './DisplayProfile'
import LiveMatch from '../match/LiveMatch'

const Matches = () =>{
    return(
        <div>
            <Profile />
            <UserMatches />
            <LiveMatch />
        </div>
    )
}

export default Matches