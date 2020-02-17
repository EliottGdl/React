import React from "react";

export default class Contact extends React.Component {
  state = {
    loading: true,
    person:null,
  };

  async componentDidMount() {
      const url = "https://api.randomuser.me/"
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
          person: data.results[0],
          loading:false
      });
  }

  render() {
    return (
      <div>
        <h2> Personnal informations : </h2>
        {this.state.loading || !this.state.person ? (<div> loading... </div>) : 
            (<div> 
                <img src={this.state.person.picture.large} />
                <div> Prénom : {this.state.person.name.first} </div>
                <div> Nom : { this.state.person.name.last} </div>
                <div> Mail : {this.state.person.email} </div>
                <div> Ville : {this.state.person.location.city} </div>
                <div> Pays : {this.state.person.location.country} </div>
            </div>)}
      </div>
    );
  }
}
