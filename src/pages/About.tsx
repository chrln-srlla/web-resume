import { useNavigate } from "react-router-dom";
import info from "../assets/info.png";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="page-section">
      <div className="card text-center">
        <div className="flex justify-center">
          <img src={info} alt="information" className="w-64 h-64 object-contain" />
        </div>

        <h1 className="mt-6 text-2xl font-semibold">About webResume</h1>
        <p className="mt-4 mx-auto max-w-2xl text-white/70">
          <span className="font-light text-white/70">web</span>
          <span className="font-bold italic text-white">Resume</span> is an online
          platform where you can fill in your details, generate a resume, and
          print it directly as a PDF.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/personal-information")}
            className="btn-primary sm:w-auto"
          >
            Start building
          </button>
        </div>
      </div>
    </section>
  );
}
