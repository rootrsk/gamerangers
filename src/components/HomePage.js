import React from 'react'
import Header from './Header'
import Winners from './others/Winners'
import Matches from './match/UpComingMatch'
// import { LoadingComponened10 } from './others/LoadingPage'



const HomePage = () =>{
    return(
        <div>
            <Header />
            <Winners />
            <Matches />     
        </div>
    )
}

export default HomePage