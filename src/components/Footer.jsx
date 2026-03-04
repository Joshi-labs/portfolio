import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/leetcode.svg";

import footerBg from "../assets/img/footer-bg-new.png";


const Footer = () => {
  return (
    <footer className="py-16 bg-cover bg-center relative border-t border-white/5" style={{ backgroundImage: `url(${footerBg})` }}>

      <div className="absolute inset-0 bg-[#121212]/90"></div> 
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12">
          
          <div className="text-center md:text-left space-y-3 text-slate-400">
            <p><span className="text-white font-bold tracking-wider">Ph.</span> - 6266411668</p>
            <p><span className="text-white font-bold tracking-wider">Email</span> - vishwashmax@gmail.com</p>
            <p><span className="text-white font-bold tracking-wider">LinkedIn</span> - VishwashJoshi</p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-6 md:pt-4">
            
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-white transition-all group shadow-lg">
                <img src={navIcon1} alt="LinkedIn" className="w-4 group-hover:brightness-0 transition-all" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-white transition-all group shadow-lg">
                <img src={navIcon2} alt="GitHub" className="w-4 group-hover:brightness-0 transition-all" />
              </a>
              <a href="https://leetcode.com/u/vpjoshi/" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-white transition-all group shadow-lg">
                <img src={navIcon3} alt="LeetCode" className="w-4 group-hover:brightness-0 transition-all" />
              </a>
            </div>

            <div className="text-center md:text-right space-y-2">
              <p className="text-cyan-200 font-bold tracking-widest uppercase text-sm">Stay Hungry - Stay Frosty</p>
            </div>

          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-slate-500 text-xs tracking-widest">
            COPYRIGHT 2026. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;