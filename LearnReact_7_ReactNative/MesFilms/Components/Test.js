import React, { Component } from 'react'
import {StyleSheet,View,Platform} from 'react-native'


export default class Test extends Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.subview_container}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        justifyContent:'center',
        alignItems : 'center'
    },
    subview_container : {
        backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue',
        ...Platform.select({
            ios: {
                backgroundColor:'red'
            },
            android: {
                backgroundColor:'yellow'
            }
        }),
        width:50,
        height:50
    }
}) 