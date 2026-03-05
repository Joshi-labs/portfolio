import { useState } from "react";

import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img4.jpg"; 
import projImg3 from "../assets/img/project-img5.jpg";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Core", "DevOps", "AIML"];

  const allProjects = [
    { category: "Core", title: "Joshi OTT", description: "Microservices streaming platform with FFmpeg processing.", imgUrl: projImg1, visit: "#", docs: "#", github: "#" },
    { category: "Core", title: "SyncDocs", description: "Real-time collaborative editor using event-driven architecture.", imgUrl: projImg2, visit: "#", docs: "#", github: "#" },
    { category: "Core", title: "Custom Compiler", description: "A custom programming language and compiler built from scratch.", imgUrl: projImg3, visit: "#", docs: "#", github: "#" },
    { category: "Core", title: "Vite Portfolio", description: "Modern React portfolio migrated from legacy CRA.", imgUrl: projImg1, visit: "#", docs: "#", github: "#" },
    { category: "Core", title: "Chess Engine", description: "Multiplayer chess platform with custom move validation.", imgUrl: projImg2, visit: "#", docs: "#", github: "#" },
    { category: "Core", title: "UpCheck SaaS", description: "Web monitoring and uptime tracking software as a service.", imgUrl: projImg3, visit: "#", docs: "#", github: "#" },

    { category: "DevOps", title: "Self-Hosted Server", description: "Personal Ubuntu home server with Docker & NAS storage.", imgUrl: projImg2, visit: "#", docs: "#", github: "#" },
    { category: "DevOps", title: "Container Orchestrator", description: "Lightweight custom system for scaling Docker services.", imgUrl: projImg3, visit: "#", docs: "#", github: "#" },
    { category: "DevOps", title: "K3s Homelab", description: "Multi-node Kubernetes cluster running on local hardware.", imgUrl: projImg1, visit: "#", docs: "#", github: "#" },
    { category: "DevOps", title: "S3 Storage Engine", description: "Custom object storage solution mimicking AWS S3 architecture.", imgUrl: projImg2, visit: "#", docs: "#", github: "#" },
    { category: "DevOps", title: "Cloudflare Tunnels", description: "Securely exposing local services to the web without port forwarding.", imgUrl: projImg3, visit: "#", docs: "#", github: "#" },
    { category: "DevOps", title: "AWS SAA Labs", description: "Various highly-available VPC and EC2 architectures.", imgUrl: projImg1, visit: "#", docs: "#", github: "#" },

    { category: "AIML", title: "Unetify", description: "Autonomous AI agent communication layer.", imgUrl: projImg1, visit: "#", docs: "#", github: "#" },
    { category: "AIML", title: "Vision Classifier", description: "Deep learning model for real-time image recognition.", imgUrl: projImg2, visit: "#", docs: "#", github: "#" },
    { category: "AIML", title: "NLP Chatbot", description: "Context-aware conversational agent using transformer models.", imgUrl: projImg3, visit: "#", docs: "#", github: "#" }
  ];

  const hackathonProjects = [
    { 
      title: "AI Ticketing System", 
      description: "A low cost ticketing system that uses multilingual AI to generate tickets and manage them.", 
      imgUrl: projImg1, 
      visit: "#", docs: "#", github: "#" 
    },
    { 
      title: "Dark Web Surveillance Tool", 
      description: "A tool that uses AI to detect and monitor dark web activities. It costs nothing to run.", 
      imgUrl: projImg2, 
      visit: "#", docs: "#", github: "#" 
    },    
  ];

  const filteredProjects = allProjects.filter(project => project.category === tabs[activeTab]);

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
            ></div>

            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`relative z-10 flex-1 py-2 md:py-2.5 text-xs md:text-sm font-bold tracking-wide transition-colors duration-300 ${
                  activeTab === index ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div key={activeTab} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              tabIndex="0" 
              className="relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 focus:border-white/20 transition-all outline-none"
            >
              <img 
                src={project.imgUrl} 
                alt={project.title} 
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 flex flex-col justify-end items-center text-center p-8">
                <h4 className="text-2xl font-bold mb-2 text-white translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h4>
                <p className="text-slate-300 text-sm italic mb-6 translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300 delay-75">
                  {project.description}
                </p>

                <div className="flex justify-center gap-3 translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300 delay-100">
                  {project.visit && <a href={project.visit} className="text-xs font-bold px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white/10 transition-all">Visit</a>}
                  {project.docs && <a href={project.docs} className="text-xs font-bold px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white/10 transition-all">Docs</a>}
                  {project.github && <a href={project.github} className="text-xs font-bold px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white/10 transition-all">GitHub</a>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-px my-10 "></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Hackathon Team Projects</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Fast-paced prototypes and competitive projects built under pressure.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {hackathonProjects.map((project, index) => (
            <div 
              key={index} 
              tabIndex="0" 
              className="relative w-full sm:w-[calc(50%-1rem)] lg:max-w-[380px] rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 focus:border-white/20 transition-all outline-none"
            >
              <img 
                src={project.imgUrl} 
                alt={project.title} 
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 flex flex-col justify-end items-center text-center p-8">
                <h4 className="text-2xl font-bold mb-2 text-white translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h4>
                <p className="text-slate-300 text-sm italic mb-6 translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300 delay-75">
                  {project.description}
                </p>

                <div className="flex justify-center gap-3 translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300 delay-100">
                  {project.visit && <a href={project.visit} className="text-xs font-bold px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white/10 transition-all">Visit</a>}
                  {project.docs && <a href={project.docs} className="text-xs font-bold px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white/10 transition-all">Docs</a>}
                  {project.github && <a href={project.github} className="text-xs font-bold px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white/10 transition-all">GitHub</a>}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;