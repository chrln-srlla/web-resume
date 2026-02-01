import { useNavigate } from "react-router-dom";
import info from './assets/info.png';

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pl-16 justify-center items-center pt-10">
      <img
        src={info}
        alt="information"
        className="w-96 h-96 pb-10"
      />

      <h1 className="text-white text-center max-w-2xl">
        A webRESUME is an online platform developed where people can fill up and create their resume online and print it directly.
      </h1>

      <button
        onClick={() => navigate("/personal-information")}
        className="mt-6 bg-[#2a2a2a] p-4 text-white hover:bg-[#333333] border-white/10 rounded-full shadow-[inset_0_1px_rgba(225,225,225,0.2)]"
      >
        Fill Up Now!
      </button>
    </div>
  );
}
