import { type ChangeEvent, type FormEvent } from "react";
import ResumePreview from "./ResumePreview";
import type { UserData } from "./Personal Information";
import type { ProjectData } from "./Projects";

export interface AccountData {
  number: number;
  email: string;
  github: string;
  linkedin: string;
}

type ResumeData = {
  personal: UserData;
  projects: ProjectData;
  account: AccountData;
};

interface AccountDataProps {
  data: AccountData;
  setData: (data: AccountData) => void;
  resumeData: ResumeData;
  setActive: (step: string) => void;
}

export default function Account({ data, setData, resumeData, setActive }: AccountDataProps) {
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: name === "number" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Full Resume Data Ready:", resumeData);
    setActive("Home");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="page-section grid gap-10 md:grid-cols-2 md:items-start">
      <div className="md:pt-10 print:hidden">
        <p className="section-kicker">Step 3</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Account.</h1>
        <p className="mt-4 max-w-prose text-white/70">
          When you’re ready, print your resume to PDF.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card space-y-5 print:hidden">
        <div>
          <label className="label" htmlFor="number">Contact number</label>
          <input
            id="number"
            type="number"
            name="number"
            value={data.number}
            onChange={handleChange}
            placeholder="e.g. 09123456789"
            className="input"
            required
          />
        </div>

        <div>
          <label className="label" htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="you@email.com"
            className="input"
            required
          />
        </div>

        <div>
          <label className="label" htmlFor="github">GitHub</label>
          <input
            id="github"
            type="text"
            name="github"
            value={data.github}
            onChange={handleChange}
            placeholder="github.com/username"
            className="input"
            required
          />
        </div>

        <div>
          <label className="label" htmlFor="linkedin">LinkedIn</label>
          <input
            id="linkedin"
            type="text"
            name="linkedin"
            value={data.linkedin}
            onChange={handleChange}
            placeholder="linkedin.com/in/username"
            className="input"
            required
          />
        </div>

        <div className="grid gap-3 pt-2">
          <button type="button" onClick={handlePrint} className="btn-secondary w-full">
            Print Resume (PDF)
          </button>
          <button type="submit" className="btn-primary">
            Finish & Return Home
          </button>
        </div>
      </form>

      <div className="hidden print:block">
        <ResumePreview data={resumeData} />
      </div>
    </section>
  );
}