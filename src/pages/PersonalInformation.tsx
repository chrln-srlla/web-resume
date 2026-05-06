import React, { type ChangeEvent, type FormEvent } from "react";

import type { UserData } from "../types/resume";

interface PersonalInformationProps {
  data: UserData;
  setData: (data: UserData) => void;
  setActive: (step: string) => void;
}

export default function PersonalInformation({
  data,
  setData,
  setActive,
}: PersonalInformationProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "age" ? Number(value) : value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setData({
        ...data,
        image: e.target.files[0],
      });
    }
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setActive("Projects");
  }

  const imageUrl = React.useMemo(() => {
    return data.image ? URL.createObjectURL(data.image) : null;
  }, [data.image]);

  React.useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  return (
    <section className="page-section grid gap-10 md:grid-cols-2 md:items-start">
      <div className="md:pt-10">
        <p className="section-kicker">Step 1</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Personal Information.
        </h1>
        <p className="mt-4 max-w-prose text-white/70">
          Add basic details to generate your resume.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card">
        <div className="flex items-center justify-between gap-6">
          <label className="label m-0" htmlFor="image">
            Profile picture
          </label>
          <div className="shrink-0">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile preview"
                className="h-20 w-20 rounded-2xl object-cover border border-white/10"
              />
            ) : (
              <div className="h-20 w-20 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-xs text-white/60">
                No photo
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 grid gap-5">
          <div>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="input file:mr-4 file:rounded-lg file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-semibold file:text-black hover:file:bg-zinc-200"
            />
          </div>

          <div>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="input"
              required
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="age">
                Age
              </label>
              <input
                id="age"
                type="number"
                name="age"
                value={data.age}
                onChange={handleChange}
                placeholder="e.g. 22"
                className="input"
                required
              />
            </div>
            <div>
              <label className="label" htmlFor="sex">
                Sex
              </label>
              <input
                id="sex"
                type="text"
                name="sex"
                value={data.sex}
                onChange={handleChange}
                placeholder="e.g. Female"
                className="input"
                required
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="birthdate">
                Birthdate
              </label>
              <input
                id="birthdate"
                type="date"
                name="birthdate"
                value={data.birthdate}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div>
              <label className="label" htmlFor="birthplace">
                Birthplace
              </label>
              <input
                id="birthplace"
                type="text"
                name="birthplace"
                value={data.birthplace}
                onChange={handleChange}
                placeholder="City, Country"
                className="input"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Next: Projects
          </button>
        </div>
      </form>
    </section>
  );
}
