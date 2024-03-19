import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_x0u6gaj", "template_sxoir5f", form.current, {
        publicKey: "yZkziWqshgy7iGDB2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <TextField
        id="filled-multiline-flexible"
        label="Your name"
        name="user_name"
        multiline
        maxRows={4}
        variant="filled"
        style={{ width: "100%", borderRadius: "8px", height: "50px" }}
      />
      {/* <label>Email</label>
      <input type="email" name="user_email" /> */}
      <TextField
        id="filled-multiline-flexible"
        label="Your email"
        name="user_email"
        multiline
        maxRows={4}
        variant="filled"
        style={{ width: "100%", borderRadius: "8px", height: "50px" }}
      />
      {/* <label>Message</label>
      <textarea name="message" /> */}
      <TextField
        id="outlined-multiline-static"
        label="Your question"
        multiline
        name="message"
        rows={4}
        variant="filled"
        style={{ width: "100%", borderRadius: "8px", height: "120px" }}
      />
      <input type="submit" value="Send" />
    </form>
  );
};
