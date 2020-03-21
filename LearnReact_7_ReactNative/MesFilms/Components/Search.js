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
        this.searchedText = ""
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return (<View style={styles.loading}>
                <ActivityIndicator size="large"/>
            </View>)
        }
    }

    _searchTextInputChange(text) {
        this.searchedText=text;
    }

    _loadFilms() {
        if(this.searchedText.length > 0) {
            this.setState({isLoading:true})
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => this.setState({ films: data.results,isLoading:false }))
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput onSubmitEditing={() => this._loadFilms()} onChangeText={(text) => this._searchTextInputChange(text)}  style={[styles.inputs,styles.spaceAllAround]} placeholder="Titre du film"></TextInput>
                {/** Buttons can't have any style, you need to create a TouchableNativeFeedback */}
                <Button title="Rechercher" onPress={() => this._loadFilms()}/>
                {this._displayLoading()}
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item}/>}
                 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop : 20,
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
  
