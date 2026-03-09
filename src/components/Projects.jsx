import { useState, useEffect, useRef } from "react";

import projImgx from "../assets/img/project-imgx.jpg";

import projImage_ott from "../assets/img/projects/ott.jpg";
import projImage_selfhost from "../assets/img/projects/self-host.jpg";
import projImage_doccollab from "../assets/img/projects/doc-collab.jpg";
import projImage_s3 from "../assets/img/projects/s3.jpg";
import projImage_containerorch from "../assets/img/projects/container-orch.jpg";
import projImage_os from "../assets/img/projects/os.jpg";

import projImage_grafana from "../assets/img/projects/grafana.jpg";
import projImage_cicd from "../assets/img/projects/cicd.jpg";
import projImage_aws from "../assets/img/projects/aws.jpg";
import projImage_cf from "../assets/img/projects/cf.jpg";
import projImage_saa from "../assets/img/projects/saa.jpg";

import hackathonProject1 from "../assets/img/projects/hackathon-img1.jpg";
import hackathonProject2 from "../assets/img/projects/hackathon-img2.jpg";
import hackathonProject3 from "../assets/img/projects/hackathon-img3.jpg";

const allProjects = [
  { category: "Core", title: "Joshi OTT", description: "...", imgUrl: projImage_ott, visit: "https://ott.vpjoshi.in", docs: "#", github: "#" },
  { category: "Core", title: "Self Hosted Server", description: "...", imgUrl: projImage_selfhost, visit: "https://stats.vpjoshi.in", docs: "#", github: "#" },
  { category: "Core", title: "Container Orcestrator", description: "...", imgUrl: projImage_containerorch, visit: "#", docs: "#", github: "#" },
  { category: "Core", title: "Doc Collab Tool", description: "...", imgUrl: projImage_doccollab, visit: "https://sync-docs.vpjoshi.in", docs: "#", github: "#" },
  { category: "Core", title: "S3 Drive", description: "...", imgUrl: projImage_s3, visit: "https://s3-drive.vpjoshi.in", docs: "#", github: "#" },
  { category: "Core", title: "Custom OS", description: "...", imgUrl: projImage_os, visit: "#", docs: "#", github: "#" },

  { category: "DevOps", title: "Self-Hosted Server", description: "...", imgUrl: projImage_selfhost, visit: "https://stats.vpjoshi.in", docs: "#", github: "#" },
  { category: "DevOps", title: "Monitoring Tool / Stack", description: "...", imgUrl: projImage_grafana, visit: "https://grafana.vpjoshi.in", docs: "#", github: "#" },
  { category: "DevOps", title: "CI/CD pipeline ", description: "...", imgUrl: projImage_cicd, visit: "https://github.com/Joshi-labs/stats/blob/master/.github/workflows/deploy.yml", docs: "#", github: "#" },
  { category: "DevOps", title: "Multiple AWS Deployments", description: "...", imgUrl: projImage_aws, visit: "#", docs: "#", github: "#" },
  { category: "DevOps", title: "Cloudflare Tunnels", description: "...", imgUrl: projImage_cf, visit: "#", docs: "#", github: "#" },
  { category: "DevOps", title: "AWS SAA Labs", description: "...", imgUrl: projImage_saa, visit: "#", docs: "#", github: "#" },

  { category: "AIML", title: "...", description: "...", imgUrl: projImgx, visit: "#", docs: "#", github: "#" },
  { category: "AIML", title: "...", description: "...", imgUrl: projImgx, visit: "#", docs: "#", github: "#" },
  { category: "AIML", title: "...", description: "...", imgUrl: projImgx, visit: "#", docs: "#", github: "#" }
];

const hackathonProjects = [
  { title: "AI Ticketing System", description: "A low cost ticketing system that uses multilingual AI to generate tickets and manage them.", imgUrl: hackathonProject1, docs: "https://docs.vpjoshi.in/#/hackathon1", github: "#", video: "https://www.youtube.com/watch?v=2zsQ9blK_zA" },
  { title: "Dark Web Surveillance Tool", description: "A tool that uses AI to detect and monitor dark web activities. It costs nothing to run.", imgUrl: hackathonProject2, docs: "https://docs.vpjoshi.in/#/hackathon2", github: "#", video: "https://www.youtube.com/watch?v=NUIAEJaAVQI" },
  { title: "Legal AI Assistant", description: "Fine-tuned chatbot for Dept. of Justice · Built at SIH 2024", imgUrl: hackathonProject3, docs: "https://docs.vpjoshi.in/#/hackathon3", github: "#", video: "https://www.youtube.com/watch?v=UXvvrmIAqxc" }

];

// Detects if the device is touch-only (no real hover support)
const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

const ProjectCard = ({ project, className = "" }) => {
  const [tapped, setTapped] = useState(false);
  const cardRef = useRef(null);

  // Close on tap outside (mobile only)
  useEffect(() => {
    if (!tapped) return;

    const handleOutsideClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setTapped(false);
      }
    };

    document.addEventListener("touchstart", handleOutsideClick);
    return () => document.removeEventListener("touchstart", handleOutsideClick);
  }, [tapped]);

  const handleTap = (e) => {
    if (!isTouchDevice()) return; // desktop: let CSS hover handle it
    e.preventDefault();
    setTapped((prev) => !prev);
  };

  const overlayVisible = tapped ? "opacity-100" : "opacity-0 group-hover:opacity-100";

  return (
    <div
      ref={cardRef}
      onTouchStart={handleTap}
      className={`relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all outline-none ${className}`}
    >
      <img
        src={project.imgUrl}
        alt={project.title}
        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className={`absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-transparent transition-all duration-300 flex flex-col justify-end items-center text-center p-8 ${overlayVisible}`}>
        <h4 className={`text-2xl font-bold mb-2 text-white transition-transform duration-300 ${tapped ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}`}>
          {project.title}
        </h4>
        <p className={`text-slate-300 text-sm italic mb-6 transition-transform duration-300 delay-75 ${tapped ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}`}>
          {project.description}
        </p>
        <div className={`flex justify-center gap-3 transition-transform duration-300 delay-100 ${tapped ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}`}>
          {project.visit && project.visit !== "#" && <a href={project.visit} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white/10 transition-all">Visit</a>}
          {project.docs && project.docs !== "#" && <a href={project.docs} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white/10 transition-all">Docs</a>}
          {project.github && project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white/10 transition-all">GitHub</a>}
          {project.video && project.video !== "#" && <a href={project.video} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white/10 transition-all">Video</a>}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Core", "DevOps", "AIML"];
  const filteredProjects = allProjects.filter(p => p.category === tabs[activeTab]);

  return (
    <section id="projects" className="py-24 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Projects</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore how I bring ideas to life through programming, problem-solving, and creativity across different domains.
          </p>
        </div>

        <div className="relative w-full max-w-lg md:max-w-xl mx-auto mb-20 p-1 bg-zinc-900 rounded-full border border-zinc-800 shadow-sm">
          <div className="relative flex items-center">
            <div
              className="absolute top-0 bottom-0 left-0 w-1/3 bg-slate-100 rounded-full transition-transform duration-300 ease-out shadow-sm"
              style={{ transform: `translateX(${activeTab * 100}%)` }}
            />
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`relative z-10 flex-1 py-2 md:py-2.5 text-xs md:text-sm font-bold tracking-wide transition-colors duration-300 ${activeTab === index ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div key={activeTab} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="h-px my-10" />

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Hackathon Team Projects</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Fast-paced prototypes and competitive projects built under pressure.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {hackathonProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              className="w-full sm:w-[calc(50%-1rem)] lg:max-w-[380px]"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;