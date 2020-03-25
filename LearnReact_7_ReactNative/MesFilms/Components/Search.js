import React, { Component } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator
} from "react-native";
import { films } from "../Helpers/filmsData";
import FilmList from "./FilmList";
import { getFilmsFromApiWithSearchedText } from "../Api/TDMApi";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isLoading: false
    };
    this.page = 0;
    this.totalPages = 0;
    this.searchedText = "";

    this._loadFilms = this._loadFilms.bind(this);
  }

  _displayDetailForFilm = idFilm => {
    this.props.navigation.navigate("Details", { id: idFilm });
  };

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  _searchFilms() {
    this.page = 0;
    this.totalPages = 0;
    this.setState(
      {
        films: []
      },
      () => this._loadFilms()
    );
  }

  _searchTextInputChange(text) {
    this.searchedText = text;
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true });
      getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(
        data => {
          this.page = data.page;
          this.totalPages = data.total_pages;
          this.setState({
            films: [...this.state.films, ...data.results],
            isLoading: false
          });
        }
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onSubmitEditing={() => this._searchFilms()}
          onChangeText={text => this._searchTextInputChange(text)}
          style={[styles.inputs, styles.spaceAllAround]}
          placeholder="Titre du film"
        ></TextInput>
        {/** Buttons can't have any style, you need to create a TouchableNativeFeedback */}
        <Button title="Rechercher" onPress={() => this._searchFilms()} />
        {this._displayLoading()}
        <FilmList
          films={this.state.films} // C'est bien le component Search qui récupère les films depuis l'API et on les transmet ici pour que le component FilmList les affiche
          navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
          loadFilms={this._loadFilms} // _loadFilm charge les films suivants, ça concerne l'API, le component FilmList va juste appeler cette méthode quand l'utilisateur aura parcouru tous les films et c'est le component Search qui lui fournira les films suivants
          page={this.page}
          totalPages={this.totalPages} // les infos page et totalPages vont être utile, côté component FilmList, pour ne pas déclencher l'évènement pour charger plus de film si on a atteint la dernière page
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },

  spaceAllAround: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10
  },

  inputs: {
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5
  }
});
