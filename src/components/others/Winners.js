import React from 'react'

class Winners extends React.Component{
    render(){
        return(
            <div className='winners-template'>
                <div className="winners-image">
                    <h1>Winners</h1>
                    <Winner />
                </div>
            </div>
        )
    }
}
const Winner = () =>{
    return(
        <div>
            <div className="box">
                <span ><div>Love</div></span>
                <span ><div>You</div></span>
            </div>
        </div>
    )
   
}

export default Winners