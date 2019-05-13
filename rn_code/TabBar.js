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
    Router,

} from 'react-native-router-flux';
import Index from './page/index';
import Me from './page/me';
import Info from './page/info';
import Type from './page/type';
import Car from './page/shopCar';
import Register from './page/register';
import UserInfo from './page/userinfo';
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

    render() {


        let param = this.data[this.props.navigation.state.key];
        let activeStyle = this.props.selected ? {color: "#3399FF"} : {};
        return <View>
            <Icon name={param.icon} color={activeStyle.color} size={25}/>
            <Text style={[activeStyle, styles.tabbarItem]}>{param.title}</Text>
        </View>
    }
}

class TabBarNavigator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const iconSize = 30;
        return (
            <Router>
                {/*下部导航开始*/}
                <Scene key="tabbar"  name="tabbar" duration={0} tabs={true} style={styles.tabbarContainer}
                       initial={true}>
                    <Scene key="index" duration={0} component={Index} title="首页" icon={TabBar}/>
                    <Scene key="type" duration={0} component={Type} title="分类" icon={TabBar}/>
                    <Scene key="car" duration={0} component={Car} title="购物车" icon={TabBar}/>
                    <Scene key="me" duration={0} component={Me} hideNavBar={true} title="我的" icon={TabBar}/>
                </Scene>
                {/*下部导航结束*/}
                <Scene key="info" duration={0} hideNavBar={true} component={Info} title="详情"/>
                <Scene key="register" duration={0} hideNavBar={true} component={Register} title="注册"/>
                <Scene key="userinfo" duration={0} component={Userinfo} title="用户详情"/>
            </Router>
        )
    }
}

var styles = StyleSheet.create({
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