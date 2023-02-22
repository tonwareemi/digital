import React from "react"
import HeadTopBar from "../component/head-top-bar"
import Rectangle4 from "../images/Rectangle4.png"
import webStudio from "../images/webStudio.png"
import bg from "../images/vectorBg.png"

function Home(){
  return(
        <div>
          <header>
            <HeadTopBar/>
          <div className="header-banner">
            <div className="header-banner-content">
                <div className="header-banner-content-text">
                  <p>Digital Marketing</p>
                  <h2>Work that We <br/> produce for our <br/> client</h2>
                  <p>lorem Lor img elements must have
                     an alt prop, either with 
                     meaningful text, or an empty 
                     string for decorative images </p>
                     <div className="btn">Get more details</div>
                </div>
                <img src={webStudio}/>
            </div>
              <img src={bg}/>
          </div>
          </header>
          <main>
            <div className="section s1">
                <h2>lorem is simply dummy text used of the printing 
                  and typesetting industry</h2>

              <div className="section-left-text">
                    <h2>lorem Ipsum</h2>
                    <p>lorem Lor img elements must have
                      an alt prop, either with 
                      meaningful text, or an empty 
                      string for decorative images 
                      lorem Lor img elements must have
                      an alt prop, either with 
                      meaningful text, or an empty 
                      string for decorative images    
                    </p>
                <div className="section-left-img">
                  <img src={Rectangle4}/>
                </div>
              </div>
              <br/>
              <br/>
              <h2>lorem is simply dummy text used of the printing 
                  and typesetting industry</h2>
              
            </div>
          </main>
        </div>
    )
}

export default Home;