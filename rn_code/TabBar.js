'use strict';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import React, {Component} from "react";
import {
    Navigation,
    Scene,
    Router, Stack,

} from 'react-native-router-flux';
import Index from './page/index';
import Me from './page/me';
import Info from './page/info';
import Type from './page/type';
import Car from './page/shopCar';
import Register from './page/register';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TabBar extends Component {

    constructor(props) {
        super(props);
        this.data = {
            index: {
                title: "首页",
                icon: "home",
            },
            type: {
                title: "分类",
                icon: "th-large",
            },
            car: {
                title: "购物车",
                icon: "shopping-cart",
            },
            me: {
                title: "我的",
                icon: "user",
            }
        }
    }

    componentWillMount(): void {
        console.log("componentWillMount()")
    }

    render() {
        const iconSize = 30;
        return (
            <Router>

            </Router>
        )
    }

    //
    // render() {
    //
    //
    //     const param = this.data[this.props];
    //     let activeStyle = this.props.selected ? {color: "#3399FF"} : {};
    //     return <View>
    //         <Icon name={param.icon} color={activeStyle.color} size={25}/>
    //         <Text style={[activeStyle, styles.tabbarItem]}>{param.title}</Text>
    //     </View>
    // }
}
const styles = StyleSheet.create({
    tabbarContainer: {
        flex: 1,
        backgroundColor: "#f6f6f6",
    },
    tabbarItem: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: -3
    }
})