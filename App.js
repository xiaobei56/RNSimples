/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Platform, StyleSheet, ScrollView, Button} from 'react-native';
import {Actions} from "react-native-router-flux";

Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
    }

    //暂时性死区
    componentWillMount(): void {
        let tmp = "dev";
        if (true) {
            console.log(tmp);

            let tmp;
            console.log(tmp);

            tmp = 123;
            console.log(tmp);
        }
        console.log(tmp);

        // varTest();
        // function varTest() {
        //     var x = 1;
        //     if (true) {
        //         var x = 2;  // same variable!
        //         console.log(x);  // 2
        //     }
        //     console.log(x);  // 2
        // }

    }

    render() {

        return (
            <ScrollView style={{flex: 1, backgroundColor: 'aquamarine '}}>

                <Button title="基础组件" onPress={() => {
                    Actions.basecomponents()
                }} color='darkgray'/>

                <View style={{flex: 1, height: 5, backgroundColor: "yellow"}}/>

                <Button title="学习State和Props" onPress={() => {
                    Actions.stateandprops()
                }} color='darkgray'/>

                <View style={{flex: 1, height: 5, backgroundColor: "yellow"}}/>

                <Button title="react-native-router-flux 实现底部导航" onPress={() => {
                    Actions.tabbar()
                }} color='darkgray'/>

                <View style={{flex: 1, height: 5, backgroundColor: "yellow"}}/>
                  <Button title="跳转到 真 学信" onPress={() => {
                    Actions.xuexin_component()
                }} color='darkgray'/>

            </ScrollView>
        );
    }

    /**
     * 基础组件
     */
    onPressBtn1() {
        // Actions.base_component_textview()

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
