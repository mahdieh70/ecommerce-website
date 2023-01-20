import React, { useState, useEffect, useRef } from "react";

//style
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const inputsRef = useRef(null);

  useEffect(() => {
    inputsRef.current.focus();
  }, []);
  return (
    <div>
      <div className="contactBanner">
        <h1>Contact Us</h1>
      </div>
      <div className="contactContainer">
        <div className="contactDetails">
          <div className="addressBox">
            <p>
              <span>Address: </span>125, Park street aven, Brocklyn, Newyork.
            </p>
          </div>
          <div className="phoneBox">
            <p>
              <span>Phone: </span>1800-121-3637
            </p>
          </div>
          <div className="emailBox">
            <span>Email: </span>info@deneb.com
          </div>
          <div className="websiteBox">
            <span>Website: </span>yoursite.com
          </div>
        </div>
        <div className="messageContainer">
          <h1>GET IN TOUCH</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio
            justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac
            ex venenatis ultricies at cursus mauris.
          </p>
          <form className="form">
            <input
              type="text"
              ref={inputsRef}
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className="textArea"
              placeholder="Your Message"
            ></textarea>
            <button className="submitBtn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
