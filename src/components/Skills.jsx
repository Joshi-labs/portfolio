import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import i_sys from "../assets/img/i-sys.png";
import i_os from "../assets/img/i-os.png";
import i_game from "../assets/img/i-game.png";
import i_web from "../assets/img/i-web.png";
import i_cloud from "../assets/img/i-cloud.png";
import i_ops from "../assets/img/i-ops2.png";

import colorSharp from "../assets/img/color-sharp-new.png";


const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 3 }
  };

  const skillsData = [
    { img: i_web, title: "Full Stack Dev" },
    { img: i_cloud, title: "Cloud Deployment" },
    { img: i_ops, title: "DevOps" },
    { img: i_os, title: "Operating Systems" },
    { img: i_game, title: "Game Dev" },
    { img: i_sys, title: "System Design" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        <div className="bg-[#151515] rounded-[2rem] md:rounded-[3rem] px-4 py-10 md:px-8 md:py-16 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-white">Skills</h2>
          
          <div className="text-slate-300 text-sm md:text-lg lg:text-xl max-w-4xl mx-auto mb-12 md:mb-16 space-y-2">
            <p><span className="text-white font-bold tracking-wide">FrontEnd:</span> React.js, Bootstrap, Tailwind</p>
            <p><span className="text-white font-bold tracking-wide">BackEnd:</span> Java, Python, Express, Node.js, C++</p>
            <p><span className="text-white font-bold tracking-wide">Cloud Experience:</span> GCP, AWS, Self-Hosted Server</p>
            <p><span className="text-white font-bold tracking-wide">Database:</span> MongoDB, PostgreSQL, SQLite</p>
            <p><span className="text-white font-bold tracking-wide">Tools:</span> Linux, Docker, Git, GitHub Actions, Kubernetes</p>
          </div>

          <Carousel 
            responsive={responsive} 
            infinite={true} 
            className="skill-slider pb-8 cursor-grab active:cursor-grabbing custom-arrow-position"
          >
            
            {skillsData.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group px-2 md:px-4">
                <div className="w-20 h-20 md:w-40 md:h-40 bg-[#1c1c1c] rounded-full flex items-center justify-center mb-4 md:mb-6 border border-white/5">
                  <img src={skill.img} alt={skill.title} className="w-40 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h5 className="font-bold text-[0.65rem] md:text-lg text-slate-300 group-hover:text-white transition-colors leading-tight">
                  {skill.title}
                </h5>
              </div>
            ))}

          </Carousel>
        </div>
      </div>
      
      <img src={colorSharp} alt="background gradient" className="absolute top-[20%] left-0 w-[40%] -z-10 opacity-60" />
    </section>
  );

};

export default Skills;