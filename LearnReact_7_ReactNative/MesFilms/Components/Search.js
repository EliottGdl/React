import React, { Component } from 'react'
import {View,Button,TextInput,StyleSheet,FlatList,Text, ActivityIndicator} from 'react-native';
import {films} from "../Helpers/filmsData";
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from "../Api/TDMApi";

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
          films: [],
          isLoading:false,
        }
        this.page = 0;
        this.totalPages = 0;
        this.searchedText = ""
    }

    _displayDetailForFilm = (idFilm) => {
        this.props.navigation.navigate("Details", {idFilm:idFilm});
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return (<View style={styles.loading}>
                <ActivityIndicator size="large"/>
            </View>)
        }
    }

    _searchFilms() {
        this.page = 0;
        this.totalPages = 0
        this.setState({
            films:[]
        }, () => this._loadFilms());
    }

    _searchTextInputChange(text) {
        this.searchedText=text;
    }

    _loadFilms() {
        if(this.searchedText.length > 0) {
            this.setState({isLoading:true})
            getFilmsFromApiWithSearchedText(this.searchedText,this.page + 1).then(data => {
                this.page = data.page;
                this.totalPages = data.total_pages;
                this.setState({ films: [...this.state.films,...data.results],
                    isLoading:false })
            })
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput onSubmitEditing={() => this._searchFilms()} onChangeText={(text) => this._searchTextInputChange(text)}  style={[styles.inputs,styles.spaceAllAround]} placeholder="Titre du film"></TextInput>
                {/** Buttons can't have any style, you need to create a TouchableNativeFeedback */}
                <Button title="Rechercher" onPress={() => this._searchFilms()}/>
                {this._displayLoading()}
                <FlatList
                    data={this.state.films}
                    renderItem={({ item }) => <FilmItem displayDetailForFilm={this._displayDetailForFilm} film={item}/>}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached= {() => {
                        if(this.state.films.length > 0 && this.page < this.totalPages) {
                            this._loadFilms();
                            console.log("e")
                        }
                    }}
                 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },

    loading:{
        position:"absolute",
        left:0,
        right:0,
        top:100,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
    },

    spaceAllAround: {
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        marginTop:10
    },

    inputs: {
        
        height:50,
        borderColor: '#000000',
        borderWidth:1,
        paddingLeft:5,
        
    },

});
  
