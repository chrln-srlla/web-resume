import { Link, useNavigate, useLocation } from "react-router-dom";
import webResumeL from './assets/webResumeL.png';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); 

  const base = "px-3 py-2 cursor-pointer border rounded-full text-xs transition";
  const activeStyle = "bg-[#2a2a2a] text-white border-white/10 shadow-[inset_0_1px_rgba(225,225,225,0.2)]";
  const inactiveStyle = "border-transparent hover:bg-[#2a2a2a] hover:text-white hover:border-white/10 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Personal Information", path: "/personal-information" },
    { name: "Projects", path: "/projects" },
    { name: "Account", path: "/account" },
  ];

  return (
    <nav className="relative text-white px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <img src={webResumeL} alt="Logo" className="w-auto h-16 object-contain" />
        <div className="font-poppins">
          <span className="font-light text-white-400">web</span>
          <span className="font-bold italic text-gray-500">Resume</span>
        </div>
      </div>

      <ul className="hidden md:flex gap-6 border rounded-xl border-white-100 px-2 py-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.name} className={`${base} ${isActive ? activeStyle : inactiveStyle}`}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>

      <div
        className="flex items-center group cursor-pointer w-fit"
        onClick={() => navigate("/about")}>
        <div className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-full p-1 shadow-xl hover:bg-[#2a2a2a] transition-all">
          <div className="text-white text-xs px-4 py-2 font-medium">about</div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2a2a2a] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:translate-x-1 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
