import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  SvgIcon,
  ButtonProps,
} from "@mui/material";
import LogoIcon from "../../icons/svg/logo";
import GoogleIcon from "../../icons/svg/google";

const CustomButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        textTransform: "none",
        padding: "8px 16px",
        fontSize: "16px",
        fontWeight: 400,
        width: "380px",
        height: "48px",
        lineHeight: "26.1px",
        letterSpacing: "-0.3px",
        backgroundImage: "linear-gradient(#111214, #121212)",
        color: "#cccccc",
        border: "1px solid #707172",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://rbox-asgmnt.vercel.app/";
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          py: "10px",
          borderBottom: "1px solid grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SvgIcon fontSize="medium" sx={{ color: "#e74c3c", marginRight: 1 }}>
          <LogoIcon />
        </SvgIcon>
        <Typography sx={{ color: "#fff", fontSize: "20px" }} variant="h5">
          REACHINBOX
        </Typography>
      </Box>

      <Paper
        elevation={6}
        sx={{
          padding: "24px 40px 40px 40px",
          textAlign: "center",
          borderRadius: "17px",
          width: "fit-content",
          backgroundColor: "#f7f7f7",
          backgroundImage: "linear-gradient(#111214, #121212)",
          border: "1px solid #343A40",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "31px",
            color: "#fff",
            marginBottom: "24px",
          }}
        >
          Create a new account
        </Typography>

        <Box sx={{ marginBottom: "48px" }}>
          <CustomButton onClick={handleGoogleLogin}>
            <SvgIcon sx={{ marginRight: 1 }} fontSize="small">
              <GoogleIcon />
            </SvgIcon>
            Sign up with Google
          </CustomButton>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundImage:
              "linear-gradient(180deg, #4B63DD 0%, #0524BF 100%)",
            borderRadius: "4px",
            width: "195px",
            height: "48px",
            fontSize: "14px",
            lineHeight: "21.7px",
            fontWeight: 500,
            marginBottom: "24px",
            textTransform: "none",
          }}
        >
          Create an Account
        </Button>

        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "24.7px",
            fontWeight: 400,
            color: "#909296",
          }}
        >
          Already have an account?{" "}
          <Typography
            component="span"
            sx={{ color: "#C1C2C5", cursor: "pointer", marginLeft: 1 }}
          >
            Sign in
          </Typography>
        </Typography>
      </Paper>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          borderTop: "1px solid grey",
          padding: "10px 0",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        <Typography sx={{ color: "#6c757d", fontSize: "14px" }}>
          © 2023 Reachinbox. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
