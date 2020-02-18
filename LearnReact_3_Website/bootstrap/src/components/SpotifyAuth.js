import React, { Component } from "react";
import { id } from "./conf";
import logo from "../assets/iconSpotify.png";
import $ from "jquery";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = id;
const redirectUri = "http://localhost:3000/about";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played"
];

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
    token:
      null ||
      document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      )
  };

  getWhatIlistend(tok) {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/recently-played",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + tok);
      },
      success: data => {
        let eAll = "";
        let ecoutes = [];
        for (let item of data.items) {
          eAll += item.track.name + " Artists : ";
          for (let artiste of item.track.artists) {
            eAll += artiste.name + " ";
          }
          ecoutes.push(eAll);
          eAll = "";
        }

        this.setState({
          token: tok,
          songs: ecoutes
        });
      }
    });
  }

  componentDidMount() {
    if (!this.state.token) {
      let _token = hash.access_token;
      if (_token) {
        document.cookie = "token=" + _token;
        this.getWhatIlistend(_token);
        this.setState({
          token: _token
        });
      }
    } else {
      this.getWhatIlistend(this.state.token);
    }
  }

  render() {
    return (
      <div>
        {this.state.token ? (
          this.state.songs ? (
            this.state.songs.map((item, index) => (
              <p key = {index}>
                {index + 1} / {item}{" "}
              </p>
            ))
          ) : (
            <p> Chargement</p>
          )
        ) : (
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        )}
      </div>
    );
  }
}
