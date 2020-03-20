import React, { Component } from 'react'
import {View,Button,TextInput,StyleSheet,FlatList,Text} from 'react-native';
import {films} from "../Helpers/filmsData";
import FilmItem from "./FilmItem";

export default class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={[styles.inputs,styles.spaceAllAround]} placeholder="Titre du film"></TextInput>
                {/** Buttons can't have any style, you need to create a TouchableNativeFeedback */}
                <Button title="Rechercher" onPress={()=>{}}/>
                <FlatList
                    data={films}
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
  
