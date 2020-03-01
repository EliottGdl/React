import React, { Component, Fragment } from "react";
import ConnectionPage from "./Connection/ConnexionPage";
import Index from "./Analyze/index";
import $ from "jquery";

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

export default class App extends Component {
  
  state = {
    token:
      undefined ||
      document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      )
  };

  getWhatIlistend(tok) {
    $.ajax({
      url: "https://api.spotify.com/v1/me/top/tracks",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + tok);
      },
      success: data => {
        console.log(data.items);
        let classement = 1;
        for (let item of data.items) {
          item.rank = classement;
          classement++;
        }
        this.setState({
          token: tok,
          songs: data
        });
      }
    });
  }


  componentDidMount() {
    if (!this.state.token) {
      let _token = hash.access_token;
      if (_token) {
        let now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 1000);
        document.cookie = "token=" + _token +"; expires="+now.toUTCString();
        this.getWhatIlistend(_token);
        this.setState({
          token: _token
        });
      }
    } else {
      this.getWhatIlistend(this.state.token);
    }
  }

  render () {

    return (
      <div>
        {!this.state.token ? 
        <ConnectionPage/> : 
          this.state.songs ? <Index data = {this.state.songs} />
          :<p>Loading...</p>}
      </div>
    )
  }
  
}
