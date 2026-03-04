import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-cyan-500/30 overflow-x-hidden font-['Centra']">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Companies />
      <Contact />
      <Footer />
    </div>
  );
}