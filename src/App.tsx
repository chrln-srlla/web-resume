import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import PersonalInformation from "./Personal Information";
import Projects from "./Projects";
import Account from "./Account";
import AboutUs from "./About Us";

import type { UserData } from "./Personal Information";
import type { ProjectData } from "./Projects";
import type { AccountData } from "./Account";

type ResumeData = {
  personal: UserData;
  projects: ProjectData;
  account: AccountData;
};

function AppShell() {
  const navigate = useNavigate();

  const [resumeData, setResumeData] = React.useState<ResumeData>({
    personal: {
      image: null,
      name: "",
      age: 0,
      sex: "",
      birthdate: "",
      birthplace: "",
    },
    projects: { skills: [""], experiences: [""], projects: [""] },
    account: { number: 0, email: "", github: "", linkedin: "" },
  });

  const setActive = (step: string) => {
    const routeByStep: Record<string, string> = {
      Home: "/",
      "Personal Information": "/personal-information",
      Projects: "/projects",
      Account: "/account",
      About: "/about",
    };

    navigate(routeByStep[step] ?? "/");
  };

  return (
    <main className="min-h-screen print:min-h-0 print:overflow-visible">
      <div className="container-page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/personal-information"
            element={
              <PersonalInformation
                data={resumeData.personal}
                setData={(d) => setResumeData({ ...resumeData, personal: d })}
                setActive={setActive}
              />
            }
          />

          <Route
            path="/projects"
            element={
              <Projects
                data={resumeData.projects}
                setData={(d) => setResumeData({ ...resumeData, projects: d })}
                setActive={setActive}
              />
            }
          />

          <Route
            path="/account"
            element={
              <Account
                data={resumeData.account}
                setData={(d) => setResumeData({ ...resumeData, account: d })}
                resumeData={resumeData}
                setActive={setActive}
              />
            }
          />

          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
