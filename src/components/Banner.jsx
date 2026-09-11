import { ArrowRight } from "react-bootstrap-icons";

import awsLogo from "../assets/img/certs/aws-certified-solutions-architect-associate.png";
import devopsLogo from "../assets/img/certs/devops.png";
import pythonLogo from "../assets/img/certs/python.png";

const Banner = () => {
  return (

    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full mt-35">
        <div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-300  to-indigo-400 bg-clip-text text-transparent">
              Vishwash Joshi
            </span>
            <br />
            AI Engineer & Developer
          </h1>

          <p className="mt-8 text-xl text-zinc-400 max-w-3xl">
            Building AI agents, scalable web applications and self-hosted
            infrastructure. Focused on LLMs, RAG systems, automation and
            distributed architectures.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
            >
              Resume
              <ArrowRight />
            </a>
          </div>

          {/* Certifications */}
          <div className="mt-24">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
              Certifications
            </p>

            <div className="flex flex-wrap gap-8">

              {/* AWS */}
              <a
                href="https://www.credly.com/badges/5a4db644-385d-4e03-9669-4023102e2136/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-fit"
              >
                <img
                  src={awsLogo}
                  alt="AWS SAA"
                  className="w-20 h-20 object-contain"
                />

                <div>
                  <h3 className="font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    AWS Solutions Architect Associate
                  </h3>

                  <p className="text-sm text-zinc-500">
                    Amazon Web Services
                  </p>
                </div>
              </a>

              {/* DevOps */}
              <a
                href="https://www.linkedin.com/learning/paths/devops-professional-certificate-by-pagerduty-and-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-fit"
              >
                <img
                  src={devopsLogo}
                  alt="AWS SAA"
                  className="w-20 h-20 object-contain"
                />

                <div>
                  <h3 className="font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    DevOps Professional Certificate
                  </h3>

                  <p className="text-sm text-zinc-500">
                    PagerDuty x LinkedIn Learning
                  </p>
                </div>
              </a>

              {/* Python */}
              <a
                href="https://www.credly.com/badges/d3956fb6-f64c-4c37-907b-9d5c32851d7c"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-fit"
              >
                <img
                  src={pythonLogo}
                  alt="Cisco : Python 1 & 2"
                  className="w-20 h-20 object-contain"
                />

                <div>
                  <h3 className="font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    Cisco : Python Essentials 1 & 2
                  </h3>

                  <p className="text-sm text-zinc-500">
                    Cisco NetAcad
                  </p>
                </div>
              </a>


            </div>
          </div>

        <div className="pb-20" />

        </div>
      </div>
    </section>
  );
};

export default Banner;