import React from 'react'
import {Link} from "react-router-dom"

function HeadTopBar(){
  return (
    <div className="head-bar">
      <div className="head-top-bar">
          <span><i className="fa fa-location"></i>Addresss</span>
          <span><i className="fa fa-phone"></i>Addresss</span>
      </div>
      <div className="head-menu-bar">
        <div className="head-logo">LOGO</div>
        <div className="head-menu">
          <Link to="/"></Link>
        </div>
      </div>
    </div>
        )
}

export default HeadTopBar