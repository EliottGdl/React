import React, { Component } from 'react'
import {StyleSheet,View,Text} from 'react-native';

export default class FilmDetail extends Component {
    render() {
        const idFilm = this.props.navigation.state.params.idFilm;
        return (
            <View style={styles.main_container}>
                <Text> Détail du film </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
    }
})