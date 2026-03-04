import { useState, useEffect } from "react";

import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/leetcode.svg";

import logo from "../assets/img/logo.svg";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#121212]/90 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <img src={logo} alt="Joshi" className="w-20 hover:scale-105 transition-transform" />
        
        {/* Changed hover colors to white and base to slate-400 for better contrast */}
        <div className="hidden md:flex items-center space-x-12 text-slate-300 font-medium tracking-wide">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="https://docs.vpjoshi.in" className="hover:text-white transition-colors">Docs</a>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex space-x-3">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white transition-all group">
              <img src={navIcon1} alt="LinkedIn" className="w-4 group-hover:brightness-0" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white transition-all group">
              <img src={navIcon2} alt="GitHub" className="w-4 group-hover:brightness-0" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white transition-all group">
              <img src={navIcon3} alt="LeetCode" className="w-4 group-hover:brightness-0" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;