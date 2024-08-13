import LightIcon from "../../icons/svg/light";
import DarkIcon from "../../icons/svg/dark";
import React, { useState } from "react";
import { Box, SvgIcon } from "@mui/material";


const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
<Box
      sx={{
        width: 51,
        height: 24,
        borderRadius: "80px",
        backgroundColor: isDarkMode ? "#000" : "#E9EAEC",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5px",
        cursor: "pointer",
        position: "relative",
        transition: "background-color 0.3s ease",
      }}
      onClick={handleToggle}
    >
      {/* Moon icon (visible in light mode) */}
      <SvgIcon
        component={DarkIcon}
        sx={{
          color: "#595A5B",
          fontSize: "24px",
          transition: "opacity 0.3s ease",
          opacity: isDarkMode ? 0 : 1,
          
          mt:1,
       
          
        }}
      />

      {/* Sun icon (visible in dark mode) */}
      <SvgIcon
        component={LightIcon}
        sx={{
          color: "#FFD700",
          fontSize: "18px",
          ml:0.5,
          mt:0.5,
          transition: "opacity 0.3s ease",
          opacity: isDarkMode ? 1 : 0,
   
        }}
      />

      {/* The small circle that toggles between sides */}
      <Box
        sx={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          backgroundColor: isDarkMode ? "#595A5B" : "#FFF",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: isDarkMode ? "5px" : "auto",
          right: isDarkMode ? "auto" : "5px",
          transition: "all 0.3s ease",
        }}
      />
    </Box>
  );
};

export default DarkModeToggle;

