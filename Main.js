//Main项目的跟组件
import React, {Component} from 'react'
// 导入路由相关的组件
//Router：相当于 HashRouter
//Stack：一个分组容器，他不表示具体的路由，专门给路由分组的。
//Scens: 表示一个具体的路由规则

import {Router, Stack, Scene} from 'react-native-router-flux'

// 导入App组件

import App from './App.js'
import BaseComponents from "./rn_code/one_base_component/BaseComponents";

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <Router scensStyle={{backgroundColor: 'white'}}>
            <Stack key="root">
                {/* 配置路由规则 */}
                {/* 注意，所有的路由规则，都应该写到这个位置 */}
                {/* 第一个 Scene 就是默认要展示的首页 *  /}
                {/* key 属性，表示路由的规则名称，将来可以使用这个 key ，进行编程式导航，每一个路由规则，都应该提供一个 唯一的key， key不能重复 */}
                <Scene key="app" component={App} title="Main页" hideNavBar={true}/>
                <Scene key="basecomponents" backTitle="返回" component={BaseComponents} title="基础组件"/>
            </Stack>
        </Router>
    }
}