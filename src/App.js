import React,{useEffect} from 'react'
import Blueprint from './Component/Blueprint';
import AOS from "aos"
import { AnimatePresence } from 'framer-motion';
function App() {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div>
           <AnimatePresence exitBeforeEnter >
             <Blueprint />
           </AnimatePresence>
             
    </div>
  );
}

export default App;
