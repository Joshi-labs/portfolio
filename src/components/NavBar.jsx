import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/leetcode.svg";

import logo from "../assets/img/logo.svg";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <img
          src={logo}
          alt="Joshi"
          className="w-15 hover:scale-105 transition-transform duration-300"
        />

        <div className="hidden md:flex items-center space-x-12 text-slate-300 font-medium tracking-wide">
          <a
            href="#home"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#skills"
            className="hover:text-white transition-colors duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-white transition-colors duration-300"
          >
            Projects
          </a>

          <a
            href="#connect"
            className="hover:text-white transition-colors duration-300"
          >
            Connect
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href="https://www.linkedin.com/in/vishwash-joshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/[0.03] rounded-full flex items-center justify-center border border-white/10 hover:bg-white hover:border-white transition-all duration-300 group"
          >
            <img
              src={navIcon1}
              alt="LinkedIn"
              className="w-4 group-hover:brightness-0 transition-all"
            />
          </a>

          <a
            href="https://github.com/Joshi-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/[0.03] rounded-full flex items-center justify-center border border-white/10 hover:bg-white hover:border-white transition-all duration-300 group"
          >
            <img
              src={navIcon2}
              alt="GitHub"
              className="w-4 group-hover:brightness-0 transition-all"
            />
          </a>

          <a
            href="https://leetcode.com/u/vpjoshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/[0.03] rounded-full flex items-center justify-center border border-white/10 hover:bg-white hover:border-white transition-all duration-300 group"
          >
            <img
              src={navIcon3}
              alt="LeetCode"
              className="w-4 group-hover:brightness-0 transition-all"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;