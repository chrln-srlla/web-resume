import { type ChangeEvent, type FormEvent } from "react";

export interface AccountData {
  number: number;
  email: string;
  github: string;
}

interface AccountDataProps {
  data: AccountData;
  setData: (data: AccountData) => void;
  resumeData: any; 
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
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] px-10 md:px-20">
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center mt-10">
        <h1 className="text-white pb-2 font-bold uppercase tracking-wide">Contact Number</h1>
        <input
          type="number"
          name="number"
          value={data.number}
          onChange={handleChange}
          placeholder="input your contact number"
          className="bg-[#2a2a2a] border border-white/5 rounded-lg p-3 text-white focus:outline-none focus:border-white/20 transition w-full md:w-96 mb-5"
          required
        />

        <h1 className="text-white pb-2 font-bold uppercase tracking-wide">Email Address</h1>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="input your email address"
          className="bg-[#2a2a2a] border border-white/5 rounded-lg p-3 text-white focus:outline-none focus:border-white/20 transition w-full md:w-96 mb-5"
          required
        />

        <h1 className="text-white pb-2 font-bold uppercase tracking-wide">Github</h1>
        <input
          type="text"
          name="github"
          value={data.github}
          onChange={handleChange}
          placeholder="input your github account"
          className="bg-[#2a2a2a] border border-white/5 rounded-lg p-3 text-white focus:outline-none focus:border-white/20 transition w-full md:w-96 mb-5"
          required
        />

        <div className="flex flex-col gap-4 mt-5 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="uppercase tracking-wide mt-2 w-full md:w-80 bg-[#111111] py-3 rounded-lg text-white font-bold hover:bg-[#1c1c1c] transition-colors items-center justify-self-center"
          >
            Print Resume (PDF)
          </button>
          
          <button
            type="submit"
            className="mt-1 w-full md:w-80 bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition"
          >
            Finish & Return Home
          </button>
        </div>
      </form>

      <div className="mt-10 md:mt-0 flex flex-col items-end w-full px-5">
        <div className="flex flex-col items-end">
          <h2 className="font-poppins text-4xl text-white text-right">Your</h2>
          <h1 className="font-poppins italic text-7xl text-white mt-1 text-right mr-[-4px]">
            Account
          </h1>
          <p className="font-poppins text-xl text-white mt-5 text-right opacity-80">
            fill your <span className="font-bold text-gray-400">Account</span> details.
          </p>
        </div>
      </div>
    </section>
  );
}