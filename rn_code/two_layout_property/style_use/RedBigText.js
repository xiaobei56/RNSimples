import React,{Component} from 'react'
import {Text,View} from 'react-native'

export default class RedBigText extends Component{

    render(){
        return <View>
            <Text style={{color:'#f00',fontSize:50}}>{this.props.children}</Text>
        </View>
    }
}