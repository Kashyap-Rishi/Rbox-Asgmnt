import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, IconButton, Divider, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { fetchEmailByThreadId } from "../../redux/emailSlice";
import { RootState, AppDispatch } from "../../store/store";
import { useThreadContext } from "../../context/ThreadContext";
import SingleThreadCard from "./SingleThreadCard";
import CompletedIcon from "../../icons/svg/completed";
import ReplyIcon from "@mui/icons-material/Reply";
import ReplyBox from "./ReplyBox";

const SingleThread: React.FC = () => {
  const [isReplyBoxOpen, setReplyBoxOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { threadId } = useThreadContext();
  const { emails, loading, error } = useSelector((state: RootState) => ({
    emails: state.emails.email,
    loading: state.emails.loading,
    error: state.emails.error,
  }));

  useEffect(() => {
    if (threadId !== null) {
      dispatch(fetchEmailByThreadId(threadId));
    }
  }, [threadId, dispatch]);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#EEF1F4" }}>
      <Box
        sx={{
          borderBottom: "1px solid #E0E0E0",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 16px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#343A40",
              lineHeight: "20px",
              fontWeight: 600,
            }}
          >
            Orlando
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#343A40B2",
              lineHeight: "18px",
              fontWeight: 400,
            }}
          >
            orlando@gmail.com
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box
            sx={{
              border: "1px solid #DFE3E8",
              display: "flex",
              alignItems: "center",
              padding: "4px 8px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <CompletedIcon />
            <Typography
              sx={{
                fontSize: "12px",
                color: "#172B4D",
                lineHeight: "18.6px",
                fontWeight: 600,
                ml: 1,
              }}
            >
              Meeting Completed
            </Typography>
            <ArrowDropDownIcon />
          </Box>

          <Box
            sx={{
              border: "1px solid #DFE3E8",
              display: "flex",
              alignItems: "center",
              padding: "4px 8px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "#172B4D",
                lineHeight: "18.6px",
                fontWeight: 600,
              }}
            >
              Move
            </Typography>
            <ArrowDropDownIcon />
          </Box>

          <IconButton
            sx={{
              border: "1px solid #DFE3E8",
              borderRadius: "4px",
              padding: "4px",
            }}
          >
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ padding: "20px 20px 0" }}>
        {emails && emails.length > 0 ? (
          emails.map((email, index) => (
            <SingleThreadCard
              key={index}
              subject={email.subject}
              fromEmail={email.fromEmail}
              toEmail={email.toEmail}
              cc={email.cc}
              sentAt={email.sentAt}
              body={email.body}
            />
          ))
        ) : (
          <Typography>No emails found for this thread</Typography>
        )}
      </Box>

      <Box sx={{ padding: "0 20px" }}>
        <Divider sx={{ my: 2 }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#6C757D",
              padding: "0 8px",
            }}
          >
            Today
          </Typography>
        </Divider>
      </Box>

      <Box
        sx={{
          marginLeft: "20px",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            width: "136px",
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
          startIcon={<ReplyIcon />}
          onClick={() => setReplyBoxOpen(true)}
        >
          Reply
        </Button>
      </Box>

      {isReplyBoxOpen && <ReplyBox onClose={() => setReplyBoxOpen(false)} />}
    </Box>
  );
};

export default SingleThread;
