import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import CommonStyles from "./commonStyles/CommonSytes";

export default class XXMessage extends Component {
    render() {

        return (
            <View style={CommonStyles.container}>
                <Text style={CommonStyles.text}>我是消息页面</Text>
            </View>
        );
    }
}
