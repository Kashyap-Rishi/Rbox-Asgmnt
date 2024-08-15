import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";

interface ReplyBoxProps {
  onClose: () => void;
}

const ReplyBox: React.FC<ReplyBoxProps> = ({ onClose }) => {
  const theme = useTheme();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSend = () => {
    // Simulate sending the message
    setTimeout(() => {
      // Close the reply box
      onClose();

      // Show success message
      setOpenSnackbar(true);
    }, 500); // Simulate network delay
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        minWidth: "752px",
        backgroundColor: theme.palette.mode === "light" ? "#FFFFFF" : "#141517",
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
        ml: "50px",
        padding: "0",
        zIndex: 1000,
        borderRadius: "8px",
        border: "1px solid",
        borderImageSource:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #4A5055 0%, #2A2F32 100%)"
            : "linear-gradient(180deg, #4A5055 0%, #2A2F32 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          px: "25px",
          backgroundColor:
            theme.palette.mode === "light" ? "#ECEFF3" : "#23272C",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
          borderBottom:
            theme.palette.mode === "light"
              ? "1px solid #41464B"
              : "1px solid #41464B",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#BAB9BD",
            lineHeight: "16.34px",
            letterSpacing: "-2%",
            fontWeight: 700,
          }}
        >
          Reply
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          mb: 1,
          borderBottom:
            theme.palette.mode === "light"
              ? "1px solid #41464B"
              : "1px solid #41464B",
        }}
      >
        <Typography
          sx={{
            display: "inline",
            fontSize: "14px",
            color: "#BAB9BD",
            lineHeight: "20px",
            fontWeight: 600,
            pl: "25px",
          }}
        >
          To:{" "}
        </Typography>
        <Box
          sx={{
            display: "inline-block",
            ml: 0.5,
          }}
        >
          <TextField
            fullWidth
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ mt: -0.5 }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          mb: 1,
          borderBottom:
            theme.palette.mode === "light"
              ? "1px solid #41464B"
              : "1px solid #41464B",
        }}
      >
        <Typography
          sx={{
            display: "inline",
            fontSize: "14px",
            color: "#BAB9BD",
            lineHeight: "20px",
            fontWeight: 600,
            pl: "25px",
          }}
        >
          From:{" "}
        </Typography>
        <Box
          sx={{
            display: "inline-block",
            ml: 0.5,
          }}
        >
          <TextField
            fullWidth
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ mt: -0.5 }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          mb: 1,
          borderBottom:
            theme.palette.mode === "light"
              ? "1px solid #41464B"
              : "1px solid #41464B",
        }}
      >
        <Typography
          sx={{
            display: "inline",
            fontSize: "14px",
            color: "#BAB9BD",
            lineHeight: "20px",
            fontWeight: 600,
            pl: "25px",
          }}
        >
          Subject:{" "}
        </Typography>
        <Box
          sx={{
            display: "inline-block",
            ml: 0.5,
          }}
        >
          <TextField
            fullWidth
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ mt: -0.5 }}
          />
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            borderBottom:
              theme.palette.mode === "light"
                ? "1px solid #41464B"
                : "1px solid #41464B",
            mt: 1,
          }}
        >
          <TextField
            fullWidth
            variant="standard"
            InputProps={{ disableUnderline: true }}
            multiline
            inputProps={{
              style: {
                fontSize: "14px",
                color: "#636970",
                lineHeight: "20px",
                fontWeight: 400,
                letterSpacing: "-2%",
              },
            }}
            rows={15}
            placeholder="Hi Jeannie,"
            sx={{
              pl: "25px",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
      >
        <Button
          onClick={handleSend}
          sx={{
            width: "114px",
            height: "40px",
            padding: "8px 40px 8px 24px",
            gap: "10px",
            borderRadius: "4px",
            opacity: 1,
            background:
              "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
            color: "#FFFFFF",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 600,
          }}
          startIcon={<SendIcon />}
        >
          Send
        </Button>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <InsertDriveFileIcon sx={{ color: "#ADADAD" }} />
          <Typography
            sx={{
              fontSize: "14px",
              color: "#ADADAD",
              lineHeight: "21.7px",
              fontWeight: 600,
            }}
          >
            Variables
          </Typography>
          <AttachFileIcon sx={{ color: "#ADADAD" }} />
          <Typography
            sx={{
              fontSize: "14px",
              color: "#ADADAD",
              lineHeight: "21.7px",
              fontWeight: 600,
            }}
          >
            Preview Email
          </Typography>
          <ImageIcon sx={{ color: "#ADADAD" }} />
          <EmojiEmotionsIcon sx={{ color: "#ADADAD" }} />
          <FormatBoldIcon sx={{ color: "#ADADAD" }} />
          <FormatItalicIcon sx={{ color: "#ADADAD" }} />
        </Box>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ReplyBox;
