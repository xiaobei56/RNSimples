//Main项目的跟组件
import React, {Component} from 'react'
// 导入路由相关的组件
//Router：相当于 HashRouter
//Stack：一个分组容器，他不表示具体的路由，专门给路由分组的。
//Scens: 表示一个具体的路由规则

import {Router, Stack, Scene,Tabs} from 'react-native-router-flux'

// 导入App组件

import App from './App.js'
import BaseComponents from "./rn_code/one_base_component/BaseComponents";
import StudyPropsAndState from "./rn_code/zero_state_props/StudyPropsAndState";
import TabBar from "./rn_code/TabBar";
import Index from "./rn_code/page";
import Type from "./rn_code/page/type";
import Car from "./rn_code/page/shopCar";
import Me from "./rn_code/page/me";
import Info from "./rn_code/page/info";
import Register from "./rn_code/page/register";

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
                <Scene key="tabbar" backTitle="返回" component={} title="学习State和props"/>

            </Stack>



            {/*下部导航开始*/}
            <Stack key="flux_demo">
                <Scene key="tabbar" name="tabbar" duration={0} tabs={true} style={styles.tabbarContainer}
                       initial={true}>
                    <Tabs key="index" duration={0} component={Index} title="首页" icon={TabBar}/>
                    <Tabs key="type" duration={0} component={Type} title="分类" icon={TabBar}/>
                    <Tabs key="car" duration={0} component={Car} title="购物车" icon={TabBar}/>
                    <Tabs key="me" duration={0} component={Me} hideNavBar={true} title="我的" icon={TabBar}/>
                </Scene>
                {/*下部导航结束*/}
                <Scene key="info" duration={0} hideNavBar={true} component={Info} title="详情"/>
                <Scene key="register" duration={0} hideNavBar={true} component={Register} title="注册"/>
                {/*<Scene key="u" duration={0} component={UserInfo} title="用户详情"/>*/}
            </Stack>
        </Router>);
    }
}