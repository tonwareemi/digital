import React from "react"
import webStudio from "../images/webStudio.png"
import HeadTopBar from "../component/head-top-bar"
import bg from "../images/vectorBg.png"
import banner from "../images/Rectangle 4.png"
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
              <p>Lorem ipsum dolor sit amet,<br/> consectetur elitinim veniam,<br/> quis i is irure dolor</p>
              <div className="btn">
                 <span> get more detail </span>
              </div>
            </div>
            <img src={webStudio}/>
          </div>
          <img src={bg} width="100%"/>
        </div>
      </header>
      <main>
        <div className="section s1">
            <h2>Lorem ipsum dolor sit amet,consectetur elitinim 
            </h2>
              <div className="section-left-text">
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit,
                sed ut aliquip ex ea commodo
                -left-textsection-left-text
                </p>
              </div>
              <div className="section-banner">
                  <img src={banner} />
              </div>
        </div>
        <div className="section s2">
        </div>
      </main>
    </div>
    )
}

export default Home;