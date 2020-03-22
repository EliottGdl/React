import React, { Component } from 'react'
import {StyleSheet,View,Text,ActivityIndicator} from 'react-native';

export default class FilmDetail extends Component {

    constructor(props) {
        super(props);
        this.setState={
            film:undefined,
            isLoading:true,
        }
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return (<View style={styles.loading}>
                <ActivityIndicator size="large"/>
            </View>)
        }
    }

    render() {
        const idFilm = this.props.navigation.state.params.idFilm;
        return (
            <View style={styles.main_container}>
                <Text> Détail du film </Text>
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
    },

    loading:{
        position:"absolute",
        left:0,
        right:0,
        top:0,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
    },

})