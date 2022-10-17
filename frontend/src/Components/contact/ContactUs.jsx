import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactus.css";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_arlb651",
        "template_sisjcx9",
        form.current,
        "o18OjYYvCudGEuQ3H"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };
  return (
    <section>
      <div className="container">
          <h2 className="--text-center">Contact Us</h2>
        <form className="--form-control --card --flex-center --dir-column" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Full Name"/>
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email" />
          <label>Subject</label>
          <input type="text" name="subject" placeholder="Subject" />
          <label>Message</label>
          <textarea name="message" cols="30" rows="10"/>
          <button type="submit" className="--btn --btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
