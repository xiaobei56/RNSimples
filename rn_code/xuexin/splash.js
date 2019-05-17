import React, {Component} from 'react'
import {View, Image,Text,StatusBar} from 'react-native'
import {Actions} from 'react-native-router-flux'
export default class Splash extends Component {
    componentDidMount(): void {
        //两秒后跳转到主界面
        this.timer = setTimeout(()=>{Actions.xuexin_tab()}, 1000);
    }

    componentWillUnmount(): void {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={true}  //是否隐藏状态栏。
                    backgroundColor={'green'} //状态栏的背景色
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')
                />
                <Image style={{flex: 1,width:'auto'}} source={require("../../xximgs/logo.png")}/>
                {/*<Text>我什么都没说</Text>*/}
            </View>
        )
    }
}