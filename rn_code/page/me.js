import {Text, View} from 'react-native'
import React,{Component} from 'react'

export default class Me extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:"center"}}>
                <Text style={{color:"red",fontSize:20,textAlign:'center'}}>我是 Me 页面</Text>
            </View>
        );
    }
}