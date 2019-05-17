import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import CommonStyles from "./commonStyles/CommonSytes";

export default class Me extends Component {
    render() {

        return (
            <View style={CommonStyles.container}>
                <Text style={CommonStyles.text}>我是"我的"页面</Text>
            </View>
        );
    }
}
