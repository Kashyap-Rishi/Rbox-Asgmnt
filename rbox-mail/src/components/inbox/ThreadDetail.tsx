import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import CampaignMailIcon from "../../icons/svg/campaign-mail";
import OpenMailIcon from "../../icons/svg/open-mail";

const ThreadDetail: React.FC = () => {
  const theme = useTheme();
  const leadDetails = [
    { label: "Name", value: "Orlando" },
    { label: "Contact No", value: "+54-9062827869" },
    { label: "Email ID", value: "orlando@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/timvadde/" },
    { label: "Company Name", value: "Reachinbox" },
  ];

  const steps = [
    { step: "Step 1: Email", date: "3rd, Feb" },
    { step: "Step 2: Email", date: "5th, Feb" },
    { step: "Step 3: Email", date: "5th, Feb" },
  ];

  return (
    <Box
      sx={{
        borderLeft: `1px solid ${theme?.palette?.threads?.borderColor}`,
        minHeight: "100vh",
        backgroundColor: theme?.palette?.threads?.mainBackground,
        position: "fixed",
      }}
    >
      <Box sx={{ padding: "5px" }}>
        <Typography
          sx={{
            fontSize: "14px",
            color: theme?.palette?.threads?.headText,
            lineHeight: "20px",
            fontWeight: 600,
            backgroundColor: theme?.palette?.threads?.headBackground,
            padding: "8px 12px",
            borderRadius: "8px",
            mt: 2,
          }}
        >
          Lead Details
        </Typography>
      </Box>

      <Box sx={{ padding: "16px" }}>
        {leadDetails.map((detail, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
            
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: theme?.palette?.threads?.detailslabel,
                lineHeight: "14.52px",
                fontWeight: 400,
              }}
            >
              {detail.label}
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                color: theme?.palette?.threads?.detailsText,
                lineHeight: "16.94px",
                fontWeight: 400,
                mt:-0.2
              
              }}
            >
              {detail.value}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ padding: "5px" }}>
        <Typography
          sx={{
            fontSize: "14px",
            color: theme?.palette?.threads?.headText,
            lineHeight: "20px",
            fontWeight: 600,
            backgroundColor: theme?.palette?.threads?.headBackground,
            padding: "8px 12px",
            borderRadius: "8px",
            mt: 2,
          }}
        >
          Activities
        </Typography>
      </Box>

      <Box sx={{ padding: "16px" }}>
        <Typography
          sx={{
            fontSize: "15px",
            color: theme?.palette?.campaign?.mainText,
            fontWeight: 600,
            lineHeight: "20.43px",
            padding: " 5px 16px 16px",
          }}
        >
          Campaign Name
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: theme?.palette?.campaign?.primaryText,
            fontWeight: 500,
            lineHeight: "16.34px",
            padding: "0 16px",
          }}
        >
          <span
            style={{ color: theme.palette.mode === "dark" ? "white" : "black" }}
          >
            3
          </span>{" "}
          steps |{" "}
          <span
            style={{ color: theme.palette.mode === "dark" ? "white" : "black" }}
          >
            5
          </span>{" "}
          Days in Sequence
        </Typography>

        <Timeline sx={{ marginLeft: "-80%" }}>
          {steps.map((step, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <CampaignMailIcon />

                {index < steps.length - 1 && (
                  <TimelineConnector
                    sx={{
                      height: "25px",

                      bgcolor: "#DFE3E8",
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginTop: "-10px",
                  paddingLeft: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: theme?.palette?.campaign?.mainText,
                      fontWeight: 600,
                      lineHeight: "17.7px",
                    }}
                  >
                    {step.step}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 0.5,
                  }}
                >
                  <OpenMailIcon />

                  <Typography
                    sx={{
                      fontSize: "10px",
                      color: theme?.palette?.campaign?.secondaryText,
                      fontWeight: 500,
                      lineHeight: "18px",
                      ml: 1,
                    }}
                  >
                    Opened{" "}
                    <span style={{ color: "grey", fontWeight: "600" }}>
                      {step.date}
                    </span>
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
};

export default ThreadDetail;
