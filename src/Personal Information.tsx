import { type ChangeEvent, type FormEvent } from "react";

export interface UserData { 
  image: File | null;
  name: string;
  age: number;
  sex: string;
  birthdate: string;
  birthplace: string;
}

interface PersonalInformationProps {
  data: UserData;
  setData: (data: UserData) => void;
  setActive: (step: string) => void; 
}

export default function PersonalInformation({ data, setData, setActive }: PersonalInformationProps) {
    
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

  return (
     <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] px-10 md:px-20">
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center justify-center">
        <div className="space-y-4 flex flex-col items-center mb-10">

          <div className="flex justify-center mt-10 mb-6">
            {data.image ? (
              <img
                src={URL.createObjectURL(data.image)}
                alt="Profile Preview"
                className="w-36 h-36 object-cover border border-white/20"
              />
            ) : (
              <div className="w-36 h-36 bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 text-sm">
                No Image
              </div>
            )}
          </div>

          <div>
            <h1 className="text-white pb-2 font-bold uppercase tracking-wide items-center justify-self-center">Profile Picture</h1>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="bg-[#2a2a2a] border border-white/5 rounded-lg p-3 text-white w-full md:w-96"
            />
          </div>

          {/** Name */}
          <div>
            <h1 className="text-white pb-2 font-bold uppercase tracking-wide justify-self-center">Name</h1>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="input your name"
              className="bg-[#2a2a2a] border border-white/5 rounded-lg p-3 text-white w-full md:w-96"
              required
            />
          </div>

          {/** Age */}
          <div>
            <h1 className="text-white pb-2 font-bold uppercase tracking-wide justify-self-center">Age</h1>
            <input
              type="number"
              name="age"
              value={data.age}
              onChange={handleChange}
              placeholder="input your age"
              className="bg-[#2a2a2a] border border-white/5 rounded-lg p-3 text-white w-full md:w-96"
              required
            />
          </div>

          {/** Sex */}
          <div>
            <h1 className="text-white pb-2 font-bold uppercase tracking-wide justify-self-center">Sex</h1>
            <input
              type="text"
              name="sex"
              value={data.sex}
              onChange={handleChange}
              placeholder="input your sex"
              className="bg-[#2a2a2a] border border-white/5 rounded-lg p-3 text-white w-full md:w-96"
              required
            />
          </div>

          {/** Birthdate */}
          <div>
            <h1 className="text-white pb-2 font-bold uppercase tracking-wide justify-self-center">Birthdate</h1>
            <input
              type="date"
              name="birthdate"
              value={data.birthdate}
              onChange={handleChange}
              className="bg-[#2a2a2a] border border-white/5 rounded-lg p-3 text-white w-full md:w-96"
              required
            />
          </div>

          {/** Birthplace */}
          <div>
            <h1 className="text-white pb-2 font-bold uppercase tracking-wide justify-self-center">Birthplace</h1>
            <input
              type="text"
              name="birthplace"
              value={data.birthplace}
              onChange={handleChange}
              placeholder="input your birthplace"
              className="bg-[#2a2a2a] mb-5 border border-white/5 rounded-lg p-3 text-white w-full md:w-96"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-1 w-full md:w-80 bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition"
          >
            Next, Project
          </button>
        </div>
      </form>

      <div className="mt-10 md:mt-0 flex flex-col items-end w-full px-5">
        <div className="flex flex-col items-end">
          <h2 className="font-poppins text-4xl text-white text-right uppercase tracking-wider">Personal</h2>
          <h1 className="font-poppins italic text-7xl text-white mt-1 text-right mr-[-4px]">
            Information
          </h1>
          <p className="font-poppins text-xl text-white mt-5 text-right opacity-80">
            fill your <span className="font-bold text-gray-400">Personal Information</span>.
          </p>
        </div>
      </div>
    </section>
  );
}