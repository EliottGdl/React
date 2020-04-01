import React, { Component } from "react";
import {
  Alert,
  Share,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Platform
} from "react-native";
import { getFilmDetailFromApi } from "../Api/TDMApi";
import moment from "moment";
import numeral from "numeral";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Icon } from 'react-native-elements'
import DoubleVolume from "./DoubleVolume";

class FilmDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: undefined,
      isLoading: true
    };
  }

  _shareFilm() {
    const { film } = this.state;
    Share.share({ title: film.title, message: film.overview })
      .then(
        Alert.alert("Succes", "Film partagé", [
          { text: "OK", onPress: () => {} }
        ])
      )
      .catch(err =>
        Alert.alert("Echec", "Film non partagé", [
          { text: "OK", onPress: () => {} }
        ])
      );
  }

  _displayFloatingActionButton() {
    const { film } = this.state;
    if (film != undefined && Platform.OS === "android") {
        console.log("hehe")
      return (
        <TouchableOpacity style={styles.share_touchable_floatingactionbutton} onPress={()=>this._shareFilm()}>
            <Icon style={[styles.share_image,{position:"absolute"}]} name="send" type="material" color="white" style={{borderStyle:"solid"}} />
        </TouchableOpacity>
      );
    }
    
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  _displayFavoriteImage() {
    var sourceImage = require("../Image/notfavorite.png");
    let normal = false;
    if (
      this.props.favoritesFilm.findIndex(
        item => item.id === this.state.film.id
      ) !== -1
      
    ) {
      normal = true;
      sourceImage = require("../Image/favorite.png");
    }
    return (
        <DoubleVolume devraitChanger={normal}>
            <Image source={sourceImage} style={styles.favorite_image} />
        </DoubleVolume>
    );
  }

  _toggleFavorite() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.film };
    this.props.dispatch(action);
  }

  componentDidUpdate() {
    //console.log(this.props.favoritesFilm);
  }

  _displayFilm() {
    const film = this.state.film;
    if (film) {
      return (
        <ScrollView style={styles.scrollViewContainer}>
          <Image
            style={{ height: 170, margin: 5 }}
            source={{
              uri: "https://image.tmdb.org/t/p/w300" + film.backdrop_path
            }}
          />
          <Text style={styles.title_text}> {film.title} </Text>
          <TouchableOpacity
            onPress={() => this._toggleFavorite()}
            style={styles.favorite_container}
          >
            {this._displayFavoriteImage()}
          </TouchableOpacity>
          <Text style={styles.description_text}> {film.overview} </Text>
          <Text style={styles.default_text}>
            Sorti le {moment(new Date(film.release_date)).format("DD/MM/YYYY")}
          </Text>
          <Text style={styles.default_text}>
            Note : {film.vote_average} / 10
          </Text>
          <Text style={styles.default_text}>
            Nombre de votes : {film.vote_count}
          </Text>
          <Text style={styles.default_text}>
            Budget : {numeral(film.budget).format("0,0[.]00 $")}
          </Text>
          <Text style={styles.default_text}>
            Genre(s) :{" "}
            {film.genres
              .map(function(genre) {
                return genre.name;
              })
              .join(" / ")}
          </Text>
          <Text style={styles.default_text}>
            Companie(s) :{" "}
            {film.production_companies
              .map(function(company) {
                return company.name;
              })
              .join(" / ")}
          </Text>
          {this._displayFloatingActionButton()}
        </ScrollView>
      );
    }
  }

  componentDidMount() {
    getFilmDetailFromApi(this.props.route.params.id).then(data => {
      this.setState({
        film: data,
        isLoading: false
      });
    });
  }

  render() {
    const idFilm = this.props.route.params.id;
    return (
      <View style={styles.main_container}>
        {this._displayFilm()}
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },

  favorite_container: {
    alignItems: "center"
  },

  share_touchable_floatingactionbutton: {
    position: "absolute",
    width: 60,
    height: 60,
    right: 30,
    bottom: 70,
    borderRadius: 30,
    backgroundColor: "#e91e63",
    justifyContent: "center",
    alignItems: "center"
  },

  share_image: {
    width: 30,
    height: 30
  },

  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },

  favorite_image: {
    flex:1,
    width: null,
    height: null
  },

  title_text: {
    fontWeight: "bold",
    fontSize: 35,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center"
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
    margin: 5,
    marginBottom: 15
  },

  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },

  scrollViewContainer: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm
  };
};

export default connect(mapStateToProps)(FilmDetail);
