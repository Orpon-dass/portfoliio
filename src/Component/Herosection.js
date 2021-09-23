import React,{useState} from 'react'
import HeroLeft from './HeroLeft';
import Heroright from './Heroright';
import MyWorks from './MyWorks';
import Aboutme from './Aboutme';
import Test from './Test';
import AboutDescription from './AboutDescription';
import Skill from './Skill';
import Service from './Service';
import Contact from './Contact';
import ContactInfo from './ContactInfo';
import Footer from './Footer';
import Testimonial from './Testimonial';
export default function Herosection() {
    const [about, setAbout] = useState(true);
    const [project, setProject]=useState(true);
    const [mywork,setMywork] = useState(false);
    const aboutController = ()=>{
          setAbout(false)  
    }
    const projectController =()=>{
        setProject(false)
        setMywork(true) 
    }
    const heroToggleHandler= ()=>{
        setProject(true)
        setAbout(true) 
        setMywork(false) 
    }
    return (
        <>
        <div className="container-fluid">
           { mywork ? null :
            <div className={ project ? "row hero-class" : "row justify-content-end hero-class"}>
              { project &&
               <HeroLeft  about={about} heroToggleHandler={heroToggleHandler} aboutController={aboutController} />
              }
              { about &&
               <Heroright project={project} heroToggleHandler={heroToggleHandler} projectController={projectController} />   
              } 
           </div>
           } 

        </div>
        
        { about ? null  :
         <Aboutme />
        }
        { about ? null  :
         <AboutDescription />
        }
        { about ? null  :
         <Skill />
        }
        { about ? null  :
         <Service />
        }
        { about ? null  :
           <Contact />
        }
        { about ? null  :
           <ContactInfo />
        }
        { about ? null  :
         <Testimonial />
        }
        { about ? null  :
         <Footer />
        }
       

        { mywork &&
        <MyWorks project={project}  heroToggleHandler={heroToggleHandler} />
        }
        <Test />
        </>
    )
}
