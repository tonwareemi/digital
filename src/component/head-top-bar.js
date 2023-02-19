import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from "react-router-dom"

function HeadTopBar({location}){
  return (
    <div className="head-bar">
      <div className="head-top-bar">
        <div className="head-top-bar-right-container">
           <div className="head-top-bar-right">
              <span><FontAwesomeIcon icon="map"/>company location</span>
              <span><FontAwesomeIcon icon="phone"/>+333 33333 333</span>
            </div>
        </div> 
      </div>
      <div className="head-menu-bar">
        <div className="head-logo">LOGO</div>
        <div className="head-menu">
          <Link to="/">Home</Link>
          <Link to="/">About us</Link>
          <Link to="/">services</Link>
          <Link to="/">News</Link>
          <Link to="/">Contact us</Link>
        </div>
      </div>
    </div>
        )
}

export default HeadTopBar