import React, { useState } from 'react'
import projectImageOne from './../image/projectone.jpg'
import projectImageTwo from './../image/projecttwo.jpg'
import projectImageThree from './../image/projectthree.jpg'
import projectImageFour from './../image/projectfour.jpg'
import projectImageFive from './../image/projectfive.jpg'
import projectImageSix from './../image/projectsix.jpg'
import projectImageSeven from './../image/projectseven.jpg'
import projectImageEight from './../image/projecteight.jpg'
import WorkSubComponent from './WorkSubComponent'
import ProjectDetails from './ProjectDetails'
import Fade from 'react-reveal/Fade';
export default function MyWorks({project,heroToggleHandler}) {
  const [projectToggler,SetProjectToggler] =useState(true);
  const [projectSlide,setProjectSlide]=useState(1);
  const projectToggle =()=>{
    SetProjectToggler(true);
  }
    return (
        <div className="container-fluid"> 
          { projectToggler &&
          <Fade down>
            <div className="row">
             <div className="col position-relative">
             { project ? null :
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
               <div>
                 <div className="text-center my-work-title mt-5">
                    <h1>My Works</h1>
                    <h4>Some of my best project</h4>
                 </div>
               </div>

             </div>
          </div>
      
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 pb-4"> 
                    <WorkSubComponent setProjectSlide={setProjectSlide} sildinumber={1} SetProjectToggler={SetProjectToggler}  projectTitle={"BLOG"} projectImage={projectImageOne} />
                    <WorkSubComponent setProjectSlide={setProjectSlide} sildinumber={2} SetProjectToggler={SetProjectToggler}  projectTitle={"PORTFOLIO"} projectImage={projectImageTwo} />
                    <WorkSubComponent setProjectSlide={setProjectSlide} sildinumber={3} SetProjectToggler={SetProjectToggler}  projectTitle={"MOBILE SHOP"} projectImage={projectImageThree} />
                    <WorkSubComponent setProjectSlide={setProjectSlide} sildinumber={4} SetProjectToggler={SetProjectToggler}  projectTitle={"PROJECTNAME"} projectImage={projectImageFour} />
                    <WorkSubComponent setProjectSlide={setProjectSlide} sildinumber={5} SetProjectToggler={SetProjectToggler}  projectTitle={"PROJECTNAME"} projectImage={projectImageFive} />
                    <WorkSubComponent setProjectSlide={setProjectSlide} sildinumber={6} SetProjectToggler={SetProjectToggler}  projectTitle={"PROJECTNAME"} projectImage={projectImageSix} />
                    <WorkSubComponent setProjectSlide={setProjectSlide} sildinumber={7} SetProjectToggler={SetProjectToggler}  projectTitle={"PROJECTNAME"} projectImage={projectImageSeven} />
                    <WorkSubComponent setProjectSlide={setProjectSlide} sildinumber={8} SetProjectToggler={SetProjectToggler}  projectTitle={"PROJECTNAME"} projectImage={projectImageEight} />
           </div>
           </Fade>
          }
          {
            projectToggler===false &&
            <>
            {projectSlide ===1 &&
            <Fade up>
                 <ProjectDetails
                   btnlink={"https://reverent-gates-613b0d.netlify.app/"}
                   setProjectSlide={setProjectSlide} sildinumber={1}
                   projectImage={projectImageOne}
                   projectToggle={projectToggle}
                   projectname="Real Time Chat App"
                   clientname={"Jhon Doe"}
                   projectdetails={"HTML CSS JAVASCRIPT TAILWINDCSS REACT NODEJS EXPRESS SOCKET.IO"}
                 />
                 </Fade>
                 }
                {projectSlide ===2 &&
               <Fade up>
                 <ProjectDetails
                 btnlink={"https://orpon-dass.github.io/orpondass/"}
                  setProjectSlide={setProjectSlide} sildinumber={2}
                   projectImage={projectImageTwo}
                   projectToggle={projectToggle}
                   projectname="Previous Portfolio"
                   clientname={"Orpon dass"}
                   projectdetails={"My old portfolio website made with HTML CSS BOOTSTRAP JAVASCRIPT."}
                 />
                 </Fade>
                 }

              {projectSlide ===3 &&
              <Fade up>
                 <ProjectDetails
                 setProjectSlide={setProjectSlide} sildinumber={3}
                   projectImage={projectImageThree}
                   projectToggle={projectToggle}
                   projectname="E-commerce"
                   clientname={"Orpon Dass"}
                   projectdetails={"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"}
                 />
                </Fade>
                }
                {projectSlide ===4 &&
               <Fade up>
                 <ProjectDetails
                   setProjectSlide={setProjectSlide} sildinumber={4}
                   projectImage={projectImageFour}
                   projectToggle={projectToggle}
                   projectname="Project-one"
                   clientname={"Orpon Dass"}
                   projectdetails={"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"}
                 />
                 </Fade>
                 }
                     {projectSlide ===5 &&
               <Fade up>
                 <ProjectDetails
                   setProjectSlide={setProjectSlide} sildinumber={5}
                   projectImage={projectImageFive}
                   projectToggle={projectToggle}
                   projectname="Project-two"
                   clientname={"Orpon Dass"}
                   projectdetails={"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"}
                 />
                 </Fade>
                 }
                   {projectSlide ===6 &&
               <Fade up>
                 <ProjectDetails
                   setProjectSlide={setProjectSlide} sildinumber={6}
                   projectImage={projectImageSix}
                   projectToggle={projectToggle}
                   projectname="Project-three"
                   clientname={"Orpon Dass"}
                   projectdetails={"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"}
                 />
                 </Fade>
                 }
                    {projectSlide ===7 &&
               <Fade up>
                 <ProjectDetails
                   setProjectSlide={setProjectSlide} sildinumber={7}
                   projectImage={projectImageSeven}
                   projectToggle={projectToggle}
                   projectname="Project-four"
                   clientname={"Orpon Dass"}
                   projectdetails={"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"}
                 />
                 </Fade>
                 }
                    {projectSlide ===8 &&
               <Fade up>
                 <ProjectDetails
                   setProjectSlide={setProjectSlide} sildinumber={8}
                   projectImage={projectImageEight}
                   projectToggle={projectToggle}
                   projectname="Project-five"
                   clientname={"Orpon Dass"}
                   projectdetails={"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"}
                 />
                 </Fade>
                 }

                 </>
                 }


        </div>

        
    )
}
