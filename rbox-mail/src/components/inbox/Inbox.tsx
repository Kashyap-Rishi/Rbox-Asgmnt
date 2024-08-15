import React from "react";
import { Grid } from "@mui/material";
import Threads from "./Threads";
import SingleThread from "./SingleThread";
import ThreadDetail from "./ThreadDetail";

const Inbox: React.FC = () => {
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid
        item
        xs={2}
        style={{ width: "23%", height: "100%", overflowY: "auto" }}
      >
        <Threads />
      </Grid>
      <Grid
        item
        xs={8}
        style={{ width: "54%", height: "100%", overflowY: "auto" }}
      >
        <SingleThread />
      </Grid>
      <Grid
        item
        xs={2}
        style={{ width: "23%", height: "100%", overflowY: "hidden" }}
      >
        <ThreadDetail />
      </Grid>
    </Grid>
  );
};

export default Inbox;
