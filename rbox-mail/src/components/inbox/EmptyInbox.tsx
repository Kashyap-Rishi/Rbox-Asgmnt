import React from "react";
import { Box, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import EmptyMailIcon from "../../icons/svg/empty-mail";

const EmptyInbox: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap:3,
       
      }}
    >
      <SvgIcon

      ><EmptyMailIcon/></SvgIcon>
      <Typography  sx={{  fontSize: '24px',
            lineHeight: '36.53px',
            fontWeight: 700,color:'black' }}>
        It’s the beginning of a legendary sales pipeline
      </Typography>
      <Typography  sx={{ fontSize: '18px',
            lineHeight: '27.4px',
            fontWeight: 500, color:'#9E9E9E',maxWidth:'289px' }}>
        When you have inbound E-mails you’ll see them here
      </Typography>
    </Box>
  );
};

export default EmptyInbox;
