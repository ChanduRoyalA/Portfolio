import { useState } from "react";
import Education from "./components/Education";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Resume from "./components/Resume";
import WorkExp from "./components/WorkExp";
import Certificates from "./components/Certificates";




function App() {
  const [activeTab, setactiveTab] = useState("Education");
  const setTab = () => {
    switch (activeTab) {
      case "Education": {
        return (
          <Education />
        )
      }
      case "Work Experince": {
        return (
          <WorkExp />
        )
      }
      case "Projects": {
        return (
          <Project />
        )
      }
      case "Cretifications": {
        return (
          <Certificates />
        )
      }
      default: {
        return (
          <div>

          </div>
        )
      }
    }
  }
  return (
    <div>
      <div className="py-6 px-8 hidden lg:block">
        {/* <Navbar /> */}
        <Resume setactiveTab={setactiveTab} />
        <div className=''>
          {setTab()}
        </div>
      </div>
      <div className="block lg:hidden">
        <h1>only Supported in Large view devices</h1>
      </div>
    </div>
  );
}

export default App;
