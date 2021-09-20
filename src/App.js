import React,{useEffect} from 'react'
import Herosection from "./Component/Herosection";
import AOS from "aos"
function App() {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div>
      <Herosection />
    </div>
  );
}

export default App;
