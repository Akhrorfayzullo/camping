import React, { useRef, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Questionh1 } from "../../style";

export const Question = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emptyField, setEmptyField] = useState(false);

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
    setSuccess(false);
    setError(false); // Reset error state
    setEmptyField(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check for empty input fields
    if (!name || !email || !message) {
      setEmptyField(true);
      setOpen(true);
      return; // Prevent email sending if any input field is empty
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
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div style={{ display: "flex", paddingTop: "20px" }}>
      <div style={{ flex: "7" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Question Lorem ipsum dolor sit amet ?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Question Lorem ipsum dolor sit amet ?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Question Lorem ipsum dolor sit amet ?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              Question Lorem ipsum dolor sit amet ?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              Question Lorem ipsum dolor sit amet ?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6-content"
              id="panel6-header"
            >
              Question Lorem ipsum dolor sit amet ?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          flex: "4",

          margin: "0 50px 28px 50px",
          padding: "30px",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Questionh1>Have you got a question</Questionh1>
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
          value={message}
          onChange={handleMessageChange}
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
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={emptyField ? "error" : "info"} // Adjust severity based on emptyField
          variant="filled"
          sx={{ width: "100%" }}
        >
          {emptyField ? "Please fill out all fields." : "Input is Full"}
        </Alert>
      </Snackbar>

      {success && (
        <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Email sent successfullyyyy!
          </Alert>
        </Snackbar>
      )}
      {error && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Failed to send email. Please try again later.
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};
