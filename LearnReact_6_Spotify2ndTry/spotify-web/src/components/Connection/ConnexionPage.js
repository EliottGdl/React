import React, { Component,Fragment } from "react";
import { id } from "./conf";
import Button from '@material-ui/core/Button';
import "../../connexion.css";
import Paper from "@material-ui/core/Paper";

const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = id;
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played",
  "user-top-read"
];

export default class ConnexionPage extends Component {
  render() {
    let height = (window.innerHeight / 2) - 50;
    let width = (window.innerWidth / 2) - 80;
    return (
      <Paper style={{height:window.innerHeight,flex:1,alignItems:'center',justifyContent:"center",background: `linear-gradient(#7800f7, #ff0000)`}}> 
        <Button style={{marginTop:height,marginLeft:width}} variant="contained" color="primary" onClick={() => window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}>

        >  Connexion
      
        </Button>
      </Paper>
    );
  }
}
