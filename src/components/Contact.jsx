import contactImg from "../assets/img/contact-img.svg";
import { useState } from "react";

const LIMITS = {
  firstName: 50,
  lastName: 50,
  email: 100,
  phone: 10,
  message: 2000
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ firstName, email, phone, message }) => {
  if (!firstName.trim()) return "First name is required.";
  if (firstName.trim().length > LIMITS.firstName) return `First name must be under ${LIMITS.firstName} characters.`;
  if (!email.trim()) return "Email address is required.";
  if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address.";
  if (email.length > LIMITS.email) return "Email address is too long.";
  if (phone && !/^\+?[\d\s\-().]{7,20}$/.test(phone)) return "Please enter a valid phone number.";
  if (!message.trim()) return "Message is required.";
  if (message.trim().length < 10) return "Message must be at least 10 characters.";
  if (message.length > LIMITS.message) return `Message must be under ${LIMITS.message} characters.`;
  return null;
};

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
    // enforce hard limits on input length
    if (LIMITS[category] && value.length > LIMITS[category]) return;

    // phone: only allow valid phone characters
    if (category === 'phone' && value && !/^[\d\s\-+().]*$/.test(value)) return;

    setFormDetails({ ...formDetails, [category]: value });

    // clear status when user starts editing again
    if (status.message) setStatus({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate(formDetails);
    if (validationError) {
      setStatus({ success: false, message: validationError });
      return;
    }

    setButtonText("Sending...");

    try {
      let response = await fetch("https://selfhosted-api.vpjoshi.in/portfolio/email", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
          firstName: formDetails.firstName.trim(),
          lastName: formDetails.lastName.trim(),
          email: formDetails.email.trim(),
          phone: formDetails.phone.trim(),
          message: formDetails.message.trim()
        }),
      });

      let result = await response.json();

      if (result.code === 200) {
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully! I'll get back to you soon." });
      } else if (result.code === 429) {
        setStatus({ success: false, message: "You've already sent a message. Please try again after 24 hours." });
      } else if (result.code === 503) {
        setStatus({ success: false, message: "Contact form is temporarily unavailable. Please reach out directly." });
      } else if (result.code === 400) {
        setStatus({ success: false, message: result.message || "Invalid submission. Please check your inputs." });
      } else {
        setStatus({ success: false, message: "Something went wrong. Please try again later." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Network error. Please check your connection." });
    }

    setButtonText("Send");
  };

  const isSending = buttonText === "Sending...";
  const msgLen = formDetails.message.length;
  const msgNearLimit = msgLen > LIMITS.message * 0.85;

  return (
    <section id="connect" className="py-14 bg-[#121212] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center bg-[#151515] rounded-[3rem] p-8 md:p-16 border border-white/5">

          {/* Left Side */}
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 w-3/4 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <img src={contactImg} alt="Contact Us" className="w-full max-w-md relative z-10" />
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Get In Touch</h2>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name *"
                  onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  disabled={isSending}
                />
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  disabled={isSending}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Email Address *"
                  onChange={(e) => onFormUpdate('email', e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  disabled={isSending}
                />
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="Phone No."
                  onChange={(e) => onFormUpdate('phone', e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  disabled={isSending}
                />
              </div>

              {/* Message with character counter */}
              <div className="relative">
                <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="Message *"
                  onChange={(e) => onFormUpdate('message', e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  disabled={isSending}
                ></textarea>
                <span className={`absolute bottom-3 right-4 text-xs transition-colors ${msgNearLimit ? 'text-amber-400' : 'text-slate-600'}`}>
                  {msgLen}/{LIMITS.message}
                </span>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto bg-white text-black font-bold text-lg px-12 py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{buttonText}</span>
              </button>

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