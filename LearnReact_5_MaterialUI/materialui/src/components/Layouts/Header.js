import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h3" color="inherit">
        Exercise
      </Typography>
    </Toolbar>
  </AppBar>
);
