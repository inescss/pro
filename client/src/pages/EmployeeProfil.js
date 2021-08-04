
import React from 'react'
import {useSelector } from "react-redux";
import {Link} from 'react-router-dom'


    
const EmployeeProfil = () => {
    const {token } = useSelector(state => state)

    return (
        <div>
            <h1> wolcom {token.firstName}</h1>
            <h1> wolcom {token.field}</h1>
            <h1>you have been logged out !!!</h1>
                <Link to="/login">login again</Link>
        </div>
    )
}

export default EmployeeProfil
