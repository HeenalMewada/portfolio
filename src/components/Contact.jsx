import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const contacts = [
  { icon: <FaEnvelope />, action: () => navigator.clipboard.writeText("mewadaheenal304@gmail.com"), tooltip: "mewadaheenal304@gmail.com" },
  { icon: <FaPhone />, action: () => navigator.clipboard.writeText("7678055069"), tooltip: "+91 7678055069" },
  { icon: <FaWhatsapp />, action: () => window.open("https://wa.me/917678055069", "_blank"), tooltip: "WhatsApp" },
];

export default function Contact() {
  return (
    <div className='contact' id='contact'>
     <h2 className="text-center mb-2 fw-bold">Let's connect..</h2>
    <div className="contact-wave-container">
        
      {contacts.map((c, idx) => (
        <div
          key={idx}
          className="contact-wave-icon"
          onClick={c.action}
          style={{ animationDelay: `${idx * 0.2}s` }}
        >
          {c.icon}
          <span className="tooltip">{c.tooltip}</span>
        </div>
      ))}
    </div>
    </div>
  );
}

