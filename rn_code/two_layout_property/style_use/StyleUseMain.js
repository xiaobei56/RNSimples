import React,{Component} from 'react'
import RedBigText from './RedBigText'
import {View} from 'react-native'

export default class StyleUseMain extends Component{
    render(){
        return <View>
            <RedBigText>我是复用来的属性</RedBigText>
        </View>
    }
}