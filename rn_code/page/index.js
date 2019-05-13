import React,{Component} from 'react'
import {Text, View} from 'react-native'


export default class Index extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:"center"}}>
                <Text>我是index 页面</Text>
            </View>
        );
    }
}