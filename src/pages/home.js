import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HeadTopBar from "../component/head-top-bar"
import Rectangle4 from "../images/Rectangle4.png"
import webStudio from "../images/webStudio.png"
import bg from "../images/vectorBg.png"
import mobile from "../images/mobile.png"
import shape2 from "../images/shape2.png"
import face from "../images/Vector.png"
import desk from "../images/Shape22.png"
import vector3 from "../images/vector3.png"

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
                      string for decorative images    
                    </p>
              </div>
              <div className="section-left-img">
                  <img src={Rectangle4}/>
              </div>
            </div>
            <div className='section s2'>
              <h2>lorem is simply dummy text used of the printing 
                  and typesetting industry</h2>
              <p>lorem is simply dummy  
                   text used of the print and typesetting industrylorem is simply dummy text used of the printing 
                  </p>
            <div className="section-service">
              <div className="section-service-icon">
                <div className="section-service-icon-container">
                    <img src={mobile}/>
                </div>
                <p>Mobile Game Development</p>
                <FontAwesomeIcon icon="arrow-right"/>
              </div>
              <div className="section-service-icon">
                <div className="section-service-icon-container">
                    <img src={shape2}/>
                </div>
                <p>PC Game Development</p>
                <FontAwesomeIcon icon="arrow-right"/>
              </div>
              <div className="section-service-icon">
                <div className="section-service-icon-container">
                    {/* <img src={mobile}/> */}
                    <h3>PS4</h3>
                </div>
                <p>PS4 Game Development</p>
                <FontAwesomeIcon icon="arrow-right"/>
              </div>
              <div className="section-service-icon">
                <div className="section-service-icon-container">
                    <img src={face}/>
                </div>
                <p>AR/VR solutions</p>
                <FontAwesomeIcon icon="arrow-right"/>
              </div>
              <div className="section-service-icon">
                <div className="section-service-icon-container">
                    <img src={desk}/>
                </div>
                <p>AR/VR design</p>
                <FontAwesomeIcon icon="arrow-right"/>
              </div><div className="section-service-icon">
                <div className="section-service-icon-container">
                    <img src={vector3}/>
                </div>
                <p>3D modeling</p>
                <FontAwesomeIcon icon="arrow-right"/>
              </div>
            </div>
            </div>
            <div className="section-slider">
              <h3>Lorem Ipsum</h3>
              <p>lorem is a simple dummy text of the printing and typesetting industry</p>
              <div className="section-slider-container">
                <div className="slider">
                  <h3>Lorem Ipsum</h3>
                  <h4>Lorem Ipsum</h4>
                  <p>
                      lorem Lor img elements must have
                      an alt prop, either with 
                      meaningful text, or an empty 
                      string for decorative images 
                      lorem Lor img elements must have
                      string for decorative images 
                  </p>
                  <p>Read More <FontAwesomeIcon icon='arrow-right'/></p>
                </div>
              </div>
            </div>
          </main>
        </div>
    )
}

export default Home;