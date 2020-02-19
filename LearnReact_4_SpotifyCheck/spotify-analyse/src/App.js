import React,{Component} from 'react';
import {SpotConnexion} from "./components/SpotConnexion";

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

class App extends Component {
  
  state = {
    token:
      null ||
      document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      )
  };

  componentDidMount() {
    if (!this.state.token) {
      let _token = hash.access_token;
      if (_token) {
        let now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 1000);
        document.cookie = "token=" + _token +"; expires="+now.toUTCString();
        this.setState({
          token: _token
        });
      }
    } 
  }

  render () {
    return (
      <div className = "bg">
        {!this.state.token ? (<SpotConnexion/>) : (<p> Loading ... </p>) }
      </div>
    );
  }  
}

export default App;
