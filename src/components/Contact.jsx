import contactImg from "../assets/img/contact-img.svg";
import { useState } from "react";

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    try {
      let response = await fetch("https://selfhosted-api.vpjoshi.in/portfolio/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      
      let result = await response.json();
      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });

      } else if (result.code === 429) {
        setStatus({
          success: false,
          message: "You have already sent a message. Please try again after 24 hours."
        });

      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later."
        });
      }
    } catch (error) {
       setStatus({ success: false, message: 'Network error.' });
    }
    
    setButtonText("Send");
  };

  return (
    <section id="connect" className="py-14 bg-[#121212] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center bg-[#151515] rounded-[3rem] p-8 md:p-16 border border-white/5">
          
          {/* Left Side: Contact Graphic */}
          <div className="flex justify-center relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 w-3/4 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
             {/* Replace with your contactImg variable */}
             <img src={contactImg} alt="Contact Us" className="w-full max-w-md relative z-10" />
          </div>

          {/* Right Side: Contact Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Get In Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  value={formDetails.firstName} 
                  placeholder="First Name" 
                  onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  required
                />
                <input 
                  type="text" 
                  value={formDetails.lastName} 
                  placeholder="Last Name" 
                  onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  value={formDetails.email} 
                  placeholder="Email Address" 
                  onChange={(e) => onFormUpdate('email', e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  required
                />
                <input 
                  type="tel" 
                  value={formDetails.phone} 
                  placeholder="Phone No." 
                  onChange={(e) => onFormUpdate('phone', e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <textarea 
                rows="6" 
                value={formDetails.message} 
                placeholder="Message" 
                onChange={(e) => onFormUpdate('message', e.target.value)}
                className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                required
              ></textarea>

              <button 
                type="submit" 
                className="w-full sm:w-auto bg-white text-black font-bold text-lg px-12 py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition-colors disabled:opacity-50"
                disabled={buttonText === "Sending..."}
              >
                <span>{buttonText}</span>
              </button>

              {/* Status Message Handling */}
              {status.message && (
                <div className="mt-4">
                  <p className={`inline-block px-4 py-2 rounded-lg text-sm font-medium ${status.success === false ? "bg-red-500/10 text-red-400" : "bg-emerald-500/10 text-emerald-400"}`}>
                    {status.message}
                  </p>
                </div>
              )}
            </form>

            <div className="mt-8 space-y-2 text-slate-500 text-sm">
              <p>* You can send only one message.</p>
              <p>* I have to set it that way because of DDOS/Email Bombing Protection.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;