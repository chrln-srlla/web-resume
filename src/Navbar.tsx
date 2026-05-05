import { Link, useNavigate, useLocation } from "react-router-dom";
import webResumeL from './assets/webResumeL.png';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); 

  const base = "px-3 py-2 cursor-pointer border rounded-full text-xs font-medium transition-colors";
  const activeStyle = "bg-white text-black border-white";
  const inactiveStyle = "border-transparent text-white/80 hover:bg-white/10 hover:text-white hover:border-white/10";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Personal Information", path: "/personal-information" },
    { name: "Projects", path: "/projects" },
    { name: "Account", path: "/account" },
  ];

  return (
    <nav className="print:hidden relative flex items-center justify-between py-5">
      <div className="flex items-center gap-3">
        <img src={webResumeL} alt="Logo" className="w-auto h-16 object-contain" />
        <div>
          <span className="font-light text-white/70">web</span>
          <span className="font-bold italic text-white">Resume</span>
        </div>
      </div>

      <ul className="hidden md:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1">
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
        <div className="flex items-center border border-white/10 bg-white/5 rounded-full p-1 hover:bg-white/10 transition-colors">
          <div className="text-white text-xs px-4 py-2 font-semibold tracking-wide">about</div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black group-hover:translate-x-1 transition-transform">
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
