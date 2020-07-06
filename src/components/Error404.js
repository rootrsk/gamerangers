import React from 'react'
import { useRouteMatch, NavLink } from 'react-router-dom'

const Error404 = () =>{
    let { path } = useRouteMatch()
    console.log(path)
    return(
        <div>
            <p>Page not Found -<NavLink to='/'>Return Home</NavLink> </p>
        </div>
    )
}


export default Error404