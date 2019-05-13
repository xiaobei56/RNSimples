import React, {Component} from 'react'
import {Text, View} from 'react-native'


// 只允许一个 export default
export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar'/>
                <Greeting name='Jaina'/>
                <Greeting name='Valeera'/>
            </View>
        );
    }
}
class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', marginTop: 50}}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }

}