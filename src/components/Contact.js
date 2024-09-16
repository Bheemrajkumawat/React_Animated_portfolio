import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        
        <div className="contact-icon"
           data-aos="zoom-in-up"
           data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/bheemrajkumawat7?igsh=MWY0aGlyeXB2ZGRhdg==" target="_blank" className="items">
            <FaSquareInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/share/fEDw5xsr2nJmb7Dd/?mibextid=qi2Omg" target="_blank"className="items">
            <FaFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/bheemraj-kumawat-114b2b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://x.com/BheemrajKu42272?t=U6ykWaTnZvVeytRFvkZADA&s=09" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/Bheemrajkumawat" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="https://bheemrajkumawat127@gmail.com" target="_blank" className="items">
            <MdEmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
