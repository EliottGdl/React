import React, { Component } from 'react'
import {connect} from "react-redux";
import ImagePicker from "react-native-image-picker"
import {StyleSheet, TouchableOpacity, Image} from "react-native" 

const mapStateToProps = state => {
    return {
        avatar:state.changeAvatar.avatar
    }
}

export default connect(mapStateToProps) (class Avatar extends Component {

    constructor(props) {
        super(props);
    }

    _avatarClicked = () => {
        ImagePicker.showImagePicker({}, (response) => {
            if(response.didCancel) {

            } else if(response.error) {
                console.log(response.error);
            } else {
                let photo = { uri : response.uri }
                const action = { type: "NEW_AVATAR", value: photo };
                this.props.dispatch(action);
                console.log("2 : " +this.props.avatar);
            }
        })
    }       

    render() {
        console.log("Moi : "+this.props.avatar);
        return (
            <TouchableOpacity
                style={StyleSheet.touchableOpacity}
                onPress={this._avatarClicked}
            >
                <Image style={StyleSheet.avatar} source={this.props.avatar}/>
            </TouchableOpacity>
        )
    }
})

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
