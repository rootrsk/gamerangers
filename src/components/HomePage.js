import React from 'react'
import Header from './Header'
import Winners from './others/Winners'
import Matches from './match/UpComingMatch'
import LiveMatch from './match/LiveMatch'



const HomePage = () =>{
    return(
        <div>
            <Header />
            <Winners />
            <Matches />
            <LiveMatch />
        </div>
    )
}

export default HomePage