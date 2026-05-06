import type { FormEvent } from "react";

import type { ProjectData } from "../types/resume";

interface ProjectDataProps {
  data: ProjectData;
  setData: (data: ProjectData) => void;
  setActive: (step: string) => void;
}

export default function Projects({ data, setData, setActive }: ProjectDataProps) {
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

  const handleAdd = (category: keyof ProjectData) => {
    setData({
      ...data,
      [category]: [...data[category], ""],
    });
  };

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
    <section className="page-section grid gap-10 md:grid-cols-2 md:items-start">
      <div className="md:pt-10">
        <p className="section-kicker">Step 2</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Skills, Experience, Projects.
        </h1>
        <p className="mt-4 max-w-prose text-white/70">
          Add quick bullet-style entries. You can add more lines any time.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card space-y-8">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Skills</h2>
            <button
              type="button"
              onClick={() => handleAdd("skills")}
              className="btn-secondary"
            >
              + Add
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {data.skills.map((skill, index) => (
              <div key={index} className="flex items-start gap-3">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleChange("skills", index, e.target.value)}
                  placeholder="e.g. React, TypeScript"
                  className="input mt-0"
                  required
                />
                {data.skills.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemove("skills", index)}
                    className="mt-3 text-xs font-semibold text-red-400 hover:text-red-300"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Experience</h2>
            <button
              type="button"
              onClick={() => handleAdd("experiences")}
              className="btn-secondary"
            >
              + Add
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {data.experiences.map((exp, index) => (
              <div key={index} className="flex items-start gap-3">
                <input
                  type="text"
                  value={exp}
                  onChange={(e) =>
                    handleChange("experiences", index, e.target.value)
                  }
                  placeholder="e.g. Junior Developer — TechCorp"
                  className="input mt-0"
                  required
                />
                {data.experiences.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemove("experiences", index)}
                    className="mt-3 text-xs font-semibold text-red-400 hover:text-red-300"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Projects</h2>
            <button
              type="button"
              onClick={() => handleAdd("projects")}
              className="btn-secondary"
            >
              + Add
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {data.projects.map((proj, index) => (
              <div key={index} className="flex items-start gap-3">
                <input
                  type="text"
                  value={proj}
                  onChange={(e) =>
                    handleChange("projects", index, e.target.value)
                  }
                  placeholder="e.g. Portfolio Website (Vite + React)"
                  className="input mt-0"
                  required
                />
                {data.projects.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemove("projects", index)}
                    className="mt-3 text-xs font-semibold text-red-400 hover:text-red-300"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Next: Account
        </button>
      </form>
    </section>
  );
}
