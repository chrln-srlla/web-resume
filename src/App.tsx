import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import PersonalInformation from "./Personal Information";
import Projects from "./Projects";
import Account from "./Account";
import ResumePreview from "./ResumePreview"; 

export default function App() {
  const [active, setActive] = useState("Home");
  
  const [resumeData, setResumeData] = useState({
    personal: { image: null as File | null, name: "", age: 0, sex: "", birthdate: "", birthplace: "" },
    projects: { skills: [""], experiences: [""], projects: [""] },
    account: { number: 0, email: "", github: "" }
  });

  return (
    <main className="p-5 px-16 md:p-15 min-h-screen bg-[#0a0a0a] print:bg-white print:min-h-0 print:p-0 print:overflow-visible">
      <div className="print:hidden">
      <Navbar active={active} setActive={setActive} />
      
      {active === "Home" && <Home />}
      
      {active === "Personal Information" && (
        <PersonalInformation 
          data={resumeData.personal} 
          setData={(d) => setResumeData({...resumeData, personal: d})} 
          setActive={setActive} 
        />
      )}
      
      {active === "Projects" && (
        <Projects 
          data={resumeData.projects} 
          setData={(d) => setResumeData({...resumeData, projects: d})} 
          setActive={setActive} 
        />
      )}
      
      {active === "Account" && (
        <Account 
          data={resumeData.account} 
          setData={(d) => setResumeData({...resumeData, account: d})} 
          resumeData={resumeData} 
          setActive={setActive} 
        />
      )}
            </div>

      <div className="hidden print:block print:m-0 print:p-0 print:static">
        <ResumePreview data={resumeData} />
      </div>
    </main>
  );
}