import React from "react";
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.favoritesFilm
    };
}

export default connect(mapStateToProps) (({film,displayDetailForFilm,favoritesFilm}) => {

    let displayImage = () => {
        if(favoritesFilm.findIndex(item => item.id === film.id) !== -1) {
            let img = require('../Image/favorite.png');

            return (
                <Image 
                    style={styles.image2}
                    source={img}
                />
            )
        }
    }

    return (
        <TouchableOpacity onPress={() => displayDetailForFilm(film.id)} style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri:"https://image.tmdb.org/t/p/w500"+film.poster_path}}
            />

            <View style={{flex:2,flexDirection:"column"}} > 
                <View style={{flex:3,flexDirection:"row"}}>

                    {displayImage()}
                    <Text style={[styles.title_text,{flex:2}]}> {film.title} </Text>
                    <Text style={styles.vote_text}> {film.vote_average} </Text>
                </View>
                <View style={{flex:7,marginLeft:5}}>
                    <Text style={styles.description_text} numberOfLines={6}> {film.overview} </Text>

                </View>
                <View style={{flex:1}}>
                    <Text style={styles.date_text}> Sorti le : {film.release_date} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    container: {
      marginTop : 20,
      flex:1,
      flexDirection:"row",
    },

    image2: {
        width:30,
        height:30
    },

    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },

    title_text: {
        fontWeight: 'bold',
        fontSize: 15,
        flex: 1,
        paddingRight: 5
    },

    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },

      date_container: {
        flex: 1
    },

    date_text: {
        textAlign: 'right',
        fontSize: 14
    },
    
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },

});