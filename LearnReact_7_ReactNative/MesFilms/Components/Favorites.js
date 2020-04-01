import React, { Component } from 'react'
import FilmList from "./FilmList";
import { connect } from 'react-redux';
import Avatar from "./Avatar";
import { View } from 'react-native';

class Favorites extends Component {

    render() {

        return (
            <View style={{flex:1}}>
                <View style={{alignItems:'center'}}>
                    <Avatar/>
                </View>
                <FilmList
                    films={this.props.favoritesFilm} // C'est bien le component Search qui récupère les films depuis l'API et on les transmet ici pour que le component FilmList les affiche
                    navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
                    loadFilms={() => 1} // _loadFilm charge les films suivants, ça concerne l'API, le component FilmList va juste appeler cette méthode quand l'utilisateur aura parcouru tous les films et c'est le component Search qui lui fournira les films suivants
                    page={0}
                    totalPages={0} // les infos page et totalPages vont être utile, côté component FilmList, pour ne pas déclencher l'évènement pour charger plus de film si on a atteint la dernière page
                />
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
      favoritesFilm: state.toggleFavorite.favoritesFilm
    }
  }
export default connect(mapStateToProps)(Favorites);
