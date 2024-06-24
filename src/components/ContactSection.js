// import React from 'react';
// import { FaInstagram, FaLinkedin } from 'react-icons/fa';

// const ContactSection = () => {
//   return (
//     <div className="contact-buttons">
//       <a href="https://www.instagram.com/yourprofilehttps://www.instagram.com/ayush.k.dhiman?igsh=MXJmcmZid3l6aXZicw==" target="_blank" rel="noopener noreferrer" className="contact-button"> 
//         <FaInstagram size={30} />
//       </a>
//        <a href="https://www.linkedin.com/in/yourprofilehttp://www.linkedin.com/in/ayush-dhiman-514914250" target="_blank" rel="noopener noreferrer" className="contact-button"> 
//         <FaLinkedin size={30} />
//       </a>
//     </div>
    
//   );
// };

// export default ContactSection;


import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>Connect with us on social media or send us an email to get in touch!</p>
      <div className="contact-buttons">
        <a href="https://www.instagram.com/yourprofilehttps://www.instagram.com/ayush.k.dhiman?igsh=MXJmcmZid3l6aXZicw==" target="_blank" rel="noopener noreferrer" className="contact-button"> 
          <FaInstagram size={30} />
          <span>Instagram</span>
        </a>
        <a href="https://www.linkedin.com/in/yourprofilehttp://www.linkedin.com/in/ayush-dhiman-514914250" target="_blank" rel="noopener noreferrer" className="contact-button"> 
          <FaLinkedin size={30} />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;

