import React from 'react'
import ParticleBackground from '../Component/ParticleBackground';

export default function HeroLeft({about,heroToggleHandler,aboutController}) {
    return (
       <div className={about ? "col-12 col-md-6 position-relative hero-left-bg click-animation" : "col-12 col-md-12 position-relative hero-left-bg after-animation-height click-animation"}>            
              { about ? null :
               <div className="position-absolute end-0 top-0">
                 <div className="cross-icon-div m-2 d-flex justify-content-center align-items-center">
                   <i onClick={heroToggleHandler} className="bi bi-x-square cross-image p-2"></i>
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
