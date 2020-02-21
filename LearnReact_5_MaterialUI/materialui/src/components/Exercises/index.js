import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({ exercises, exercise : {title = "Welcome",description = "Please select an exercise"}, category, onSelect }) => (

  <Grid container sm={12} item={true}>
    <Grid item sm={6}>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exos]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography variant="h5" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul" aria-label="secondary mailbox folders">
                {exos.map(({ id,title }) => (
                  <ListItem key={title} button>
                    <ListItemText primary={title} onClick={() => onSelect(id)}/>
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>

    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="h2"> {title} </Typography>
        <Typography variant="subtitle1" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
