import * as React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Flast, Signh1 } from "../style";
import { AddBox } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Akhrorfayzullo">
        AkhrorFayzullo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Register() {
  const navi = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const NavigateBack = () => {
    navi("/");
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <div
          style={{
            backgroundColor: "#FFF",
            maxWidth: "500px",
            margin: "0 auto 100px",
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.10)",
            borderRadius: "20px",
            // padding: "33px 0 40px",
            paddingBottom: "30px",
          }}
        >
          <Container component="main" maxWidth="xs">
            <CssBaseline style={{ backgroundColor: "red" }} />
            <Box
              style={{ boder: "1px solid red" }}
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                boder: "1px solid red",

                // alignItems: "center",
              }}
            >
              <Flast $sign>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ width: "100%", marginBottom: "15px", mt: 5 }}
                >
                  Registrate
                </Typography>
                <FontAwesomeIcon icon={faXmark} onClick={NavigateBack} />
              </Flast>

              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Signh1>Email</Signh1>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Your email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  sx={{
                    backgroundColor: "rgba(55, 55, 55, 0.1)",
                  }}
                />
                <Signh1>Password</Signh1>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Your password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{
                    backgroundColor: "rgba(55, 55, 55, 0.1)",
                  }}
                />
                <Signh1>Repeat your password</Signh1>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Your password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{
                    backgroundColor: "rgba(55, 55, 55, 0.1)",
                  }}
                />
                <Flast $sign>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Flast>
                <Link to="/">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    REGISTRATE
                  </Button>
                </Link>
              </Box>
            </Box>
          </Container>
        </div>

        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </ThemeProvider>
    </div>
  );
}
