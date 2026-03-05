import { useState, useEffect, useRef } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";

import headerImg from "../assets/img/main-new.png";
import bannerBg from "../assets/img/banner-bg-new.jpg";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  const toRotate = [ "Vishwash Joshi" ]; 
  const period = 2000;
  const bannerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, isInView]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section ref={bannerRef} id="home" className="relative pt-48 pb-32 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${bannerBg})` }}>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
        <div className={`md:col-span-7 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi! I'm <span className="border-r-4 border-white pr-2 animate-pulse">{text}</span><br/>
          </h1>
          
          <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-2xl">
            Semester 6 B.Tech student specializing in CSE and AIML. I build robust web applications, 
            design autonomous agent communication layers like Unetify, and manage self-hosted homelab infrastructure.
          </p>
          
          <a
            href="/VP_Joshi_Resume_v1.01.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-slate-300 font-bold text-lg flex items-center group hover:text-white transition-colors">
              See Resume
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2 text-white">
                <ArrowRightCircle size={30} />
              </span>
            </button>
          </a>
        </div>

        <div className={`md:col-span-5 flex justify-center relative transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full"></div>
          <img src={headerImg} alt="Header Img" className="w-full relative z-10 animate-float" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#121212] to-transparent z-0 pointer-events-none"></div>
    </section>
  );
};

export default Banner;