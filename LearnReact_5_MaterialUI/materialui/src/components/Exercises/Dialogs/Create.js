import React, { Fragment, Component } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
    FormControl: {
        width:500,
    }
});

export default withStyles(useStyles) (class extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    });
  };

  handleSubmit = () => {
      const { exercise } = this.state
      this.props.onCreate(exercise);
  }

  render() {
    const {
      open,
      exercise: { title, description, muscles }
    } = this.state;

    const {classes} = this.props;

    return (
      <Fragment>
        <Box borderRadius="50%">
          <Button
            aria-label="add"
            variant="contained"
            onClick={this.handleToggle}
          >
            <AddIcon />
          </Button>
        </Box>

        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">Create an exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <form>
              <TextField
                className = {classes.FormControl}
                label="Title"
                onChange={this.handleChange("title")}
                value={title}
                margin="normal"
              />
              <br />

              <FormControl>
                <InputLabel id="demo-simple-select-label">Muscles</InputLabel>
                <Select
                  className = {classes.FormControl}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={muscles}
                  onChange={this.handleChange("muscles")}
                >   
                  {this.props.categories.map(category => 
                      <MenuItem value={category}>{category}</MenuItem>
                    )}
                </Select>
              </FormControl>
              <br />
              <TextField
                className = {classes.FormControl}
                multilane
                rows="4"
                label="Description"
                onChange={this.handleChange("description")}
                value={description}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained" onClick={this.handleSubmit}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
})
