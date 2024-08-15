import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface SingleThreadCardProps {
  subject: string;
  fromEmail: string;
  toEmail: string;
  cc: string[] | null;
  sentAt: string;
  body: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${day} ${month} ${year} : ${time}`;
};

const formatBody = (body: string) => {
  return body
    .replace(/<br\s*\/?>/g, "\n")
    .replace(/<\/p>/g, "\n")
    .replace(/<\/?p>/g, "")
    .trim();
};

const SingleThreadCard: React.FC<SingleThreadCardProps> = ({
  subject,
  fromEmail,
  toEmail,
  cc,
  sentAt,
  body,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: theme?.palette?.threadCard?.boxShadow,
        border: `1px solid ${theme?.palette?.threadCard?.mainBorder}`,
        background: "#F9F9F9",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: theme?.palette?.threadCard?.mainBackground,
        marginBottom: "16px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontSize: "14px",
            color: theme?.palette?.threadCard?.mainText,
            lineHeight: "19.07px",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          {" "}
          {subject}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: theme?.palette?.threadCard?.dateText,
            lineHeight: "16.71px",
            fontWeight: 400,
            marginBottom: "8px",
          }}
        >
          {formatDate(sentAt)}
        </Typography>
      </Box>

      <Typography
        variant="body2"
        sx={{
          fontSize: "14px",
          color: theme?.palette?.threadCard?.primaryText,
          lineHeight: "16.71px",
          fontWeight: 400,
          marginBottom: "8px",
        }}
      >
        From : {fromEmail}
        {cc && cc.length > 0 && <>| CC : {cc.join(", ")}</>}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: "14px",
          color: theme?.palette?.threadCard?.primaryText,
          lineHeight: "16.71px",
          fontWeight: 400,
          marginBottom: "30px",
        }}
      >
        To : {toEmail}
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          color: theme?.palette?.threadCard?.secondaryText,
          lineHeight: "19.07px",
          fontWeight: 400,
          letterSpacing: "-2%",
          marginTop: "12px",
          whiteSpace: "pre-line",
        }}
      >
        {formatBody(body)}
      </Typography>
    </Box>
  );
};

export default SingleThreadCard;
