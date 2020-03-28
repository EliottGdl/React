import React, { Component } from 'react'
import { View ,Animated} from 'react-native';

export default class DoubleVolume extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taille : new Animated.Value(this.getTaille())
        }

    }

    getTaille() {
        if (this.props.devraitChanger) {
            return 80
        }
        return 40
    }

    componentDidUpdate() {

        Animated.timing(
            this.state.taille,
            {
                toValue:this.getTaille(),
                duration:800
            }
        ).start();

    }

    render() {
        return (
            <Animated.View style={{width:this.state.taille,height:this.state.taille}}>
                {this.props.children}
            </Animated.View>
        )
    }
}
