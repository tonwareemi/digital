import React from "react"
import webStudio from "../images/webStudio.png"
import HeadTopBar from "../component/head-top-bar"
import bg from "../images/vectorBg.png"

function Home(){
  return(
    <div className="home">
      <header>
        <HeadTopBar/>
        <div className="head-main">
          <div className="head-main-content">
            <div className="head-main-content-text">
              <p>Digital Marketing</p>
              <h2> work that we <br/> produce for our <br/> client</h2>
              <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elitinim veniam,<br/> quis i is aute irure dolor</p>
              <div className="btn">
                  get more detail
              </div>
            </div>
            <img src={webStudio}/>
          </div>
          <img src={bg} width="100%" hieght="10px"/>
        </div>
      </header> 
    </div>
    )
}

export default Home;