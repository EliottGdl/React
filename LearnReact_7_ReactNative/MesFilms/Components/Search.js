import React, { Component } from 'react'
import {View,Button,TextInput} from 'react-native';

export default class Search extends Component {
    render() {
        return (
            <View>
                <TextInput placeholder="Titre du film"></TextInput>
                <Button title="Rechercher" onPress={()=>{}}> </Button>
            </View>
        )
    }
}
