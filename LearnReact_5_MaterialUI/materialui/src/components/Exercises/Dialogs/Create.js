import React, { Fragment, Component } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";

export default class extends Component {

    state = {
        open:false
    }

    handleToggle = () => {
        this.setState({
            open : !this.state.open,
        })
    }

  render() {

    const {open} = this.state;

    return (
      <Fragment>
        <Box borderRadius="50%">
          <Button aria-label="add" style={{backgroundColor:"white"}} onClick={this.handleToggle}>
            <AddIcon />
          </Button>
        </Box>

        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create an exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <form></form>
          </DialogContent>
          <DialogActions>
            <Button color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}