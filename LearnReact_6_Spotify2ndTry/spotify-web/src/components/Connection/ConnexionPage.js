import React, { Component } from 'react'
import { id } from "./conf";

const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = id;
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played"
];


export default class ConnexionPage extends Component {
    render() {
        return (
            <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}>
                Connexion
            </a>
        )
    }
}
