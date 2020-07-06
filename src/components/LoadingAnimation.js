import React from 'react'


const LoadingComponened = () =>{
    return(
        <div className="animation">
            <div>
                <p className="animation-text">Loading...</p>
                <div className="animation-rotation">
                    <div className="sk-chase">
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                    </div>  
                </div>
               
            </div>
            
           
        </div>
    )
}

export default LoadingComponened