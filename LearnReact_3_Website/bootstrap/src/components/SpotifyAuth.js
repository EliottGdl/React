import React, { Component } from "react";
import { id } from "./conf";
import logo from "../assets/iconSpotify.png";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = id;
const redirectUri = "http://localhost:3000/about";
const scopes = ["user-read-currently-playing", "user-read-playback-state"];

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

window.location.hash = "";

export default class SpotifyAuth extends Component {
  
  state = {
      token: null
  }

  componentDidMount() {
      console.log(hash.access_token)
    let _token = hash.access_token;
    if (_token) {
      this.setState({
        token: _token
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.token ? (<p> Vous etes connectes </p>) : (<a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>)}
      </div>
    );
  }
}
