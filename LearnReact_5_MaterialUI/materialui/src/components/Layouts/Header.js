import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/Create"

export default ({muscles,onExerciseCreate}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h3" color="inherit" style={{flex : 1}}>
        Exercise
      </Typography>
      <CreateDialog 
          categories = {muscles}
          onCreate={onExerciseCreate}
      />
    </Toolbar>
  </AppBar>
);
