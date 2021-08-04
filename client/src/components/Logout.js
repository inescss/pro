import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1>you have been logged out !!!</h1>
                <Link to="/login">login again</Link>
            </div>
        )
    }
}
