import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import PersonalInformation from "./Personal Information";
import Projects from "./Projects";
import Account from "./Account";
import AboutUs from "./About Us";

export default function App() {
  const [resumeData, setResumeData] = React.useState({
    personal: { image: null as File | null, name: "", age: 0, sex: "", birthdate: "", birthplace: "" },
    projects: { skills: [""], experiences: [""], projects: [""] },
    account: { number: 0, email: "", github: "" }
  });

  return (
    <BrowserRouter>
      <main className="p-5 px-16 md:p-15 min-h-screen bg-[#0a0a0a] print:bg-white print:min-h-0 print:p-0 print:overflow-visible">
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/personal-information"
            element={
              <PersonalInformation
                data={resumeData.personal}
                setData={(d) => setResumeData({ ...resumeData, personal: d })} setActive={function (step: string): void {
                  throw new Error("Function not implemented.");
                } }              />
            }
          />

          <Route
            path="/projects"
            element={
              <Projects
                data={resumeData.projects}
                setData={(d) => setResumeData({ ...resumeData, projects: d })} setActive={function (step: string): void {
                  throw new Error("Function not implemented.");
                } }              />
            }
          />

          <Route
            path="/account"
            element={
              <Account
                data={resumeData.account}
                setData={(d) => setResumeData({ ...resumeData, account: d })}
                resumeData={resumeData} setActive={function (step: string): void {
                  throw new Error("Function not implemented.");
                } }              />
            }
          />

          <Route path="/about" element={<AboutUs />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}
