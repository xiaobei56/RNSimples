import {Text, View} from 'react-native'
import React,{Component} from 'react'

export default class Type extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:"center"}}>
                <Text style={{color:"red",fontSize:20}}>我是 Type 页面</Text>
            </View>
        );
    }
}