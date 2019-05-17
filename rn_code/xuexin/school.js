import React, {Component} from 'react'
import {View, Text} from 'react-native'
import CommonStyles from "./commonStyles/CommonSytes";

export default class School extends Component {
    render() {

        return (
            <View style={CommonStyles.container}>
                <Text style={CommonStyles.text}>我是学校页面</Text>
            </View>
        );
    }
}
