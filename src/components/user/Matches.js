import React from 'react'
import UserMatch from './UserMatch'
// import UpcomingMatches from './UpcomingMatches'
import UpcomingMatches from '../match/UpComingMatch'

const Matches = () =>{
    return(
        <div>
            <UserMatch />
            <UpcomingMatches />
        </div>
    )
}

export default Matches