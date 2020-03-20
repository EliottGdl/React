import React, { Component } from 'react'
import {View,Button,TextInput,StyleSheet} from 'react-native';

export default class Search extends Component {
    render() {
        return (
            <View style={styles.vue}>
                <TextInput style={[styles.inputs,styles.spaceAllAround]} placeholder="Titre du film"></TextInput>
                {/** Buttons can't have any style, you need to create a TouchableNativeFeedback */}
                <Button title="Rechercher" onPress={()=>{}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    vue: {
      marginTop : 20,
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
  
