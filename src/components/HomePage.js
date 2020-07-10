import React from 'react'
import Header from './Header'
import Winners from './others/Winners'
import Matches from './match/UpComingMatch'
import Timer from './others/CountDownTimer'
import LiveMatch from './match/LiveMatch'
// import { LoadingComponened10 } from './others/LoadingPage'



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