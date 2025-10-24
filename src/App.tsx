import "./App.css";
import { About } from "./Components/About";
import { Blogs } from "./Components/Blogs";

import { Navbar } from "./Components/Navbar";
import { Primary } from "./Components/Primary";
import { Projects } from "./Components/Projects";

function App() {
  return (
    <>
      <div className="bg-[#F4F2EE] flex flex-col w-screen h-max">
        <div>
          <Navbar />
        </div>
        <div className="flex justify-center w-full h-full">
          <Primary />
        </div>
        <div className="flex justify-center w-full h-full">
          <About/>
        </div>
        <div className="flex justify-center w-full h-full">
          <Projects/> 
        </div>
        <div className="flex justify-center w-full h-full">
          <Blogs/>
        </div>
        <div className="flex justify-center w-full h-full">

        </div>
        
   
      </div>
    </>
  );
}

export default App;
