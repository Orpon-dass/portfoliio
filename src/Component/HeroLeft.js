import React from 'react'
import ParticleBackground from '../Component/ParticleBackground';

export default function HeroLeft({about,heroToggleHandler,aboutController}) {
    return (
       <div className={about ? "col-12 col-md-6 position-relative hero-left-bg click-animation" : "col-12 col-md-12 position-relative hero-left-bg after-animation-height click-animation"}>            
              { about ? null :
               <div className="position-absolute">
                  <div className="menu-btn mt-3" onClick={heroToggleHandler}>
                    <div className="nav-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                  </div>
               </div>
               }
            <ParticleBackground />
            <div className="position-absolute top-50 start-50 translate-middle about-pulse-div">
                   { about ? 
                    <div className="p-2 hero-about-me border border-1 border-white"> 
                        <h2 onClick={aboutController} className="pt-1 about-me-button">About Me</h2>
                    </div>
                    :
                    <div className="text-center">
                          <h2 class="my-name">OROPON DASS</h2>
                          <p class="my-tag">Available for freelance</p>
                    </div>    
                   }
            </div>                 
        </div>    
    )
}
