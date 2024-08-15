import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";

interface ConfirmationPopupProps {
  onClose: () => void;
  onDelete: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  onClose,
  onDelete,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "200px",
        backgroundColor: theme.palette.mode === "light" ? "fff" : "black",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          color: theme.palette.mode === "light" ? "#000000" : "#fff",
        }}
      >
        Are you Sure?
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 3, color: theme.palette.mode === "light" ? "grey" : "grey" }}
      >
        Your selected email will be deleted.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <Button
          sx={{
            color: theme.palette.mode === "light" ? "black" : "white",
            backgroundColor: theme.palette.mode === "light" ? "white" : "black",
            border: "1px solid grey",
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          sx={{
            background:
              "linear-gradient(91.73deg, #FA5252 -2.99%, #A91919 95.8%)",
            color: "white",
          }}
          onClick={onDelete}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmationPopup;
