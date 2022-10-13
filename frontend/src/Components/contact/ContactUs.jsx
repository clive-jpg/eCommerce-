import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactus.css"

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
          console.log("message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mainForm">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label className="label" >Name</label>
        <input className="input" type="text" name="user_name" />
        <label>Email</label>
        <input className="input" type="email" name="user_email" />
        <label>Message</label>
        <textarea className="textArea" name="message" />
        <input className="input" type="submit" value="Send" />
      </form>
    </div>
  );
}
