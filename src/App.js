import { useEffect, useState } from "react";
import EntrypointsDashboard from "./EntryPointsDashboard";

function App() {
  const [entrypointsLoaded, setentrypointsLoaded] = useState(false)
  useEffect(()=>{
    // window.generate();
    // console.log("useEffect -> data", data)
    setentrypointsLoaded(true)
  },[])
  return (
    <div className="App">
      {
        entrypointsLoaded && 
        <EntrypointsDashboard />
      }
    </div>
  );
}

export default App;
