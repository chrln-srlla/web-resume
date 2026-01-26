import type { FormEvent } from "react";

// 1. Export the data shape so App.tsx can use it
export interface ProjectData {
  skills: string[];
  experiences: string[];
  projects: string[];
}

// 2. Define props to receive data and setter from App.tsx
interface ProjectDataProps {
  data: ProjectData;
  setData: (data: ProjectData) => void;
  setActive: (step: string) => void;
}

export default function Projects({ data, setData, setActive }: ProjectDataProps) {
  
  // Helper to handle input changes for dynamic arrays
  const handleChange = (
    category: keyof ProjectData,
    index: number,
    value: string
  ) => {
    const newArr = [...data[category]];
    newArr[index] = value;
    setData({
      ...data,
      [category]: newArr,
    });
  };

  // Helper to add a new empty field to a category
  const handleAdd = (category: keyof ProjectData) => {
    setData({
      ...data,
      [category]: [...data[category], ""],
    });
  };

  // Helper to remove a field
  const handleRemove = (category: keyof ProjectData, index: number) => {
    setData({
      ...data,
      [category]: data[category].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActive("Account");
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-10 md:px-20 py-10 space-y-10 md:space-y-0 md:space-x-20">
      <div className="flex flex-col justify-center items-start md:w-1/2 px-12">
        <h2 className="font-poppins text-4xl text-white">Your</h2>
        <h1 className="font-poppins italic text-7xl text-white mt-3 ml-[-10px]">Projects</h1>
        <p className="font-poppins text-xl text-white mt-5">
          Fill your <span className="font-bold text-gray-500">Projects and Skills</span>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="md:w-1/2 w-full space-y-8">
        {/* Skills Section */}
        <div>
          <h3 className="text-center text-white pb-2 font-bold uppercase tracking-wider">Skills</h3>
          {data.skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 mb-3">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleChange("skills", index, e.target.value)}
                placeholder="e.g. React, TypeScript"
                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition"
                required
              />
              {data.skills.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemove("skills", index)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={() => handleAdd("skills")}
            className="bg-[#2a2a2a] rounded-lg px-4 py-1 text-white text-sm border border-white/10 hover:bg-[#1c1c1c] transition"
          >
            + Add Skill
          </button>
          </div>
        </div>

        {/* Experiences Section */}
        <div>
          <h3 className="text-center text-white pb-2 font-bold uppercase tracking-wider">Experience</h3>
          {data.experiences.map((exp, index) => (
            <div key={index} className="flex items-center gap-2 mb-3">
              <input
                type="text"
                value={exp}
                onChange={(e) => handleChange("experiences", index, e.target.value)}
                placeholder="e.g. Junior Dev at TechCorp"
                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition"
                required
              />
              {data.experiences.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemove("experiences", index)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={() => handleAdd("experiences")}
            className="bg-[#2a2a2a] rounded-lg px-4 py-1 text-white text-sm border border-white/10 hover:bg-[#1c1c1c] transition"
          >
            + Add Experience
          </button>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-center text-white pb-2 font-bold uppercase tracking-wider">Projects</h3>
          {data.projects.map((proj, index) => (
            <div key={index} className="flex items-center gap-2 mb-3">
              <input
                type="text"
                value={proj}
                onChange={(e) => handleChange("projects", index, e.target.value)}
                placeholder="e.g. Portfolio Website"
                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition"
                required
              />
              {data.projects.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemove("projects", index)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={() => handleAdd("projects")}
            className="bg-[#2a2a2a] rounded-lg px-4 py-1 text-white text-sm border border-white/10 hover:bg-[#1c1c1c] transition"
          >
            + Add Project
          </button>
          </div>
        </div>

          <div className="w-full flex justify-center">
        <button
          type="submit"
          className="mt-10 w-full md:w-80 bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition"
        >
          Next, Account
        </button>
        </div>
      </form>
    </section>
  );
}