import React from "react";
import type { UserData } from "./Personal Information";
import type { ProjectData } from "./Projects";
import type { AccountData } from "./Account";

interface ResumePreviewProps {
  data: {
    personal: UserData;
    projects: ProjectData;
    account: AccountData;
  };
}

export default function ResumePreview({ data }: ResumePreviewProps) {
  const { personal, projects, account } = data;

  const imageUrl = React.useMemo(() => {
    return personal.image ? URL.createObjectURL(personal.image) : null;
  }, [personal.image]);

  React.useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  return (
    <div className="p-10 text-black bg-white min-h-[297mm] w-[210mm] mx-auto font-serif">
      <div className="flex justify-between items-start border-b-4 border-gray-800 pb-6">
        <div>
          <h1 className="text-5xl font-bold uppercase">{personal.name || "Full Name"}</h1>
          <div className="mt-2 text-sm text-gray-700">
            <p>{account.email} | {account.number}</p>
            <p>{account.github}</p>
            <p>{account.linkedin}</p>
            <p>{personal.age} | {personal.sex}</p>
            <p className="italic">{personal.birthplace} — {personal.birthdate}</p>
          </div>
        </div>
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt="Profile" 
            className="w-32 h-40 object-cover border-2 border-gray-200"
          />
        )}
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold bg-gray-100 px-2 py-1 border-l-4 border-gray-800 mb-3">SKILLS</h2>
        <div className="flex flex-wrap gap-2">
          {projects.skills.map((s, i) => (
            <span key={i} className="border border-gray-300 px-2 py-1 text-sm rounded">{s}</span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold bg-gray-100 px-2 py-1 border-l-4 border-gray-800 mb-3">EXPERIENCE</h2>
        <ul className="list-disc ml-6 space-y-2">
          {projects.experiences.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold bg-gray-100 px-2 py-1 border-l-4 border-gray-800 mb-3">PROJECTS</h2>
        <ul className="list-disc ml-6 space-y-2">
          {projects.projects.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </section>
    </div>
  );
}