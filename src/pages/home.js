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
        <section>
            <h2>Lorem ipsum dolor sit amet,consectetur elitinim 
            </h2>
              <div className="section-left-text"></div>
        </section>
      </main>
    </div>
    )
}

export default Home;