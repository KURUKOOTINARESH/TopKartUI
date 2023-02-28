import "./index.css"
import {Link} from 'react-router-dom'
import { useState,useEffect } from "react"
import Clock from 'react-live-clock';

const Header = ()=>{
    
    return(
        <>
        <div className="navbar">
            <h1>TopKart</h1>
            <div className="right-section">
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/myorders' className="nav-link">MyOrders</Link>
                <Clock className="clock" format={'HH:mm:ss'} ticking={true} timezone={'UTC'} />
                <span className="utc">UTC</span>
            </div>
        </div>
        <hr/>
        </>
    )
}

export default Header