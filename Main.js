//Main项目的跟组件
import React, {Component} from 'react'
// 导入路由相关的组件
//Router：相当于 HashRouter
//Stack：一个分组容器，他不表示具体的路由，专门给路由分组的。
//Scens: 表示一个具体的路由规则

import {Router, Stack, Scene, Tabs} from 'react-native-router-flux'

// 导入App组件

import App from './App.js'
import BaseComponents from "./rn_code/one_base_component/BaseComponents";
import StudyPropsAndState from "./rn_code/zero_state_props/StudyPropsAndState";
import Index from "./rn_code/page";
import Type from "./rn_code/page/type";
import Car from "./rn_code/page/shopCar";
import Me from "./rn_code/page/me";
import Info from "./rn_code/page/info";
import Register from "./rn_code/page/register";
import {StyleSheet} from "react-native";
import TabIcon from "./TabIcon";

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (<Router scensStyle={{backgroundColor: 'white'}}>
            <Stack key="root">
                {/* 配置路由规则 */}
                {/* 注意，所有的路由规则，都应该写到这个位置 */}
                {/* 第一个 Scene 就是默认要展示的首页 *  /}
                {/* key 属性，表示路由的规则名称，将来可以使用这个 key ，进行编程式导航，每一个路由规则，都应该提供一个 唯一的key， key不能重复 */}
                <Scene key="app" component={App} title="Main页" hideNavBar={true}/>
                <Scene key="basecomponents" backTitle="返回" component={BaseComponents} title="基础组件"/>
                <Scene key="stateandprops" backTitle="返回" component={StudyPropsAndState} title="学习State和props"/>

                <Tabs
                    hideNavBar
                    key="tabbar"
                    routerName="tabbar"
                    backToInitial
                    panHandlers={null}
                    onTabOnPress={() => {
                        console.log('Back To initial and also print this')
                    }}
                    showLabe={false}
                    tabBarStyle={styles.tabBarStyle}
                    activeBackgroundColor="pink"
                    inactiveBackgroundColor="white"
                >
                    <Stack
                        key="index"
                        name="首页"
                        duration={0}
                        tabs={true}
                        style={styles.tabbarContainer}
                        initial={true}
                        hideNavbar
                    >
                        <Scene key="index_1" component={Index} title="首页" hideNavbar icon={TabIcon}/>
                    </Stack>
                    <Stack
                        key="type"
                        name="分类"
                        duration={0}
                        tabs={true}
                        style={styles.tabbarContainer}
                        initial={true}
                    >
                        <Scene key="index_1" component={Type} title="分类"/>
                    </Stack>
                    <Stack
                        key="car"
                        name="购物车"
                        duration={0}
                        tabs={true}
                        style={styles.tabbarContainer}
                        initial={true}
                    >
                        <Scene key="index_1" component={Car} title="购物车"/>
                    </Stack>
                    <Stack
                        key="me"
                        name="我的"
                        duration={0}
                        tabs={true}
                        style={styles.tabbarContainer}
                        initial={true}
                    >
                        <Scene key="index_1" component={Me}  title="我的"/>
                    </Stack>
                </Tabs>


                {/*下部导航开始*/}
                <Stack key="flux_demo">
                    {/*下部导航结束*/}
                    <Scene key="info" duration={0} hideNavBar={true} component={Info} title="详情"/>
                    <Scene key="register" duration={0} hideNavBar={true} component={Register} title="注册"/>
                    {/*<Scene key="u" duration={0} component={UserInfo} title="用户详情"/>*/}
                </Stack>
            </Stack>


        </Router>);
    }
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
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
})