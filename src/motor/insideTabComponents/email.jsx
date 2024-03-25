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
  const [message, setMessage] = useState("");

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleMessageChange = useCallback((e) => {
    setMessage(e.target.value);
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

    // Check if any input field is empty
    if (!name || !email || !message) {
      // Show "it is empty" Snackbar
      setOpen(true);
      return;
    }

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
    // Clear input fields after sending email
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          id="filled-multiline-flexible"
          type="text"
          label="Your name"
          name="to_name"
          value={name}
          onChange={handleNameChange}
          multiline
          maxRows={4}
          variant="filled"
          style={{ width: "100%", borderRadius: "8px", height: "50px" }}
        />
        <TextField
          id="filled-multiline-flexible"
          label="Your email"
          name="from_name"
          value={email}
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
          value={message}
          onChange={handleMessageChange}
          rows={4}
          variant="filled"
          style={{ width: "100%", borderRadius: "8px", height: "120px" }}
        />
        <Button
          type="submit"
          variant="contained"
          style={{ with: "100%" }}
          onClick={handleClick}
        >
          Send question
        </Button>
      </form>
      {/* Snackbar for empty input fields */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Please fill out all fields.
        </Alert>
      </Snackbar>
      {/* Snackbar for success */}
      {success && (
        <Snackbar open={success} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Email sent successfully!
          </Alert>
        </Snackbar>
      )}
      {error && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="failed"
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
