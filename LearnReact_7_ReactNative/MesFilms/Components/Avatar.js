import React, { Component } from 'react'
import ImagePicker from "react-native-image-picker"
import {StyleSheet, TouchableOpacity, Image} from "react-native" 

export default class Avatar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatar : require("../Image/ic_tag_faces.png"),
        }
    }

    _avatarClicked = () => {

    }

    render() {
        return (
            <TouchableOpacity
                style={StyleSheet.touchableOpacity}
                onPress={this._avatarClicked}
            >
                <Image style={StyleSheet.avatar} source={this.state.avatar}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touchableOpacity: {
      margin: 5,
      width: 100, // Pensez bien à définir une largeur ici, sinon toute la largeur de l'écran sera cliquable
      height: 100,
      justifyContent: 'center',
      alignItems: 'center'
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: '#9B9B9B',
      borderWidth: 2
    }
  })
