import React, { useRef, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export const ContactUs = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_x0u6gaj", "template_sxoir5f", form.current, {
        publicKey: "yZkziWqshgy7iGDB2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          setError(false);
          console.log(email, name);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
          setSuccess(false);
        }
      );
    setEmail("");
    setName("");
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          id="filled-multiline-flexible"
          type="text"
          label="Your name"
          name="user_name"
          onChange={handleNameChange}
          multiline
          maxRows={4}
          variant="filled"
          style={{ width: "100%", borderRadius: "8px", height: "50px" }}
        />
        <TextField
          id="filled-multiline-flexible"
          label="Your email"
          name="user_email"
          onChange={handleEmailChange}
          type="email"
          multiline
          maxRows={4}
          variant="filled"
          style={{ width: "100%", borderRadius: "8px", height: "50px" }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Your question"
          multiline
          name="message"
          rows={4}
          variant="filled"
          style={{ width: "100%", borderRadius: "8px", height: "120px" }}
        />
        {/* <input type="submit" value="Send" /> */}
        <Button
          type="submit"
          value="Send"
          variant="contained"
          style={{ with: "100%" }}
          onClick={handleClick}
        >
          Send question
        </Button>
      </form>

      {success && (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            This is a success Alert inside a Snackbar!
          </Alert>
        </Snackbar>
      )}
      {error && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            This is a success Alert inside a Snackbar!
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};
