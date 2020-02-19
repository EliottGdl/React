import React, { Component } from "react";
import { id } from "./conf";
import logo from "../assets/iconSpotify.png";
import "../index.css"
import { MDBBox } from "mdbreact";
import styled from 'styled-components';

const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = id;
const redirectUri = "http://localhost:3000/about";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played"
];

export class SpotConnexion extends Component {
  render() {
        
    return (
        <MDBBox display="flex" justifyContent="center">
            <a
            className="btn btn--loginApp-link d-flex justify-content-center"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
            )}&response_type=token&show_dialog=true`}
            >
            <img src={logo} className="App-logo" alt="logo" />
            </a>
            </MDBBox>
        );
  }
}
