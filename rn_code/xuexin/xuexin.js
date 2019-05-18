import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    TouchableHighlight,
    ImageBackground,
    TouchableOpacity,
    ListView,
    FlatList,
} from 'react-native'
import CommonStyles from "./commonStyles/CommonSytes";
import PropTypes from "prop-types";

global.constants = {
    divColor: "#eeeeee"
}
//屏幕信息
let dimensions = require('Dimensions');
//获取屏幕的宽度
let {width} = dimensions.get('window');
let columns = 4;//每一行显示多少列
let itemWidth = width / columns;//每一个item所占的宽度
export default class XueXin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // middleIcon:
        }
    }

    static propsType = {
        normalImg: PropTypes.number.isRequired,
        pressImg: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        normalTextColor: PropTypes.string,
        pressTextColor: PropTypes.string
    }
    static defaultProps = {
        normalTextColor: '#2A2A2A',
        pressTextColor: "#999999"
    }


    _onPressButton(): void {
        console.log("onPressButton has pressed")
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading ...
                </Text>
            </View>
        );
    }

    renderMiddle() {
        return (
            <View style={{
                width:itemWidth,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
            >
                <Image source={()=>this.props.normalImg}/>
                <Text style={styles.textMiddle}>{()=>this.props.name}</Text>
            </View>
        );
    }


    render() {

        let middleData= [{name:"通知", normalImg:require("../../xximgs/xuexin_icon_tz.png")}];
        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    hidden={true}
                    translucent={true}

                />
                <ImageBackground
                    style={{
                        flexDirection: 'column',
                        height: 160,
                    }}
                    source={require("../../xximgs/xuexin_topbg.png")}>
                    <View style={{flexDirection: 'row-reverse', height: 50, alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={this._onPressButton}
                            style={{width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}
                        >
                            <Image source={require('../../xximgs/public_top_w_choice_click.png')}
                                   style={{width: 38, height: 38}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',

                    }}>
                        <TopButton name={"每日一练"} normalImg={require('../../xximgs/xuexin_topicon_one.png')}
                                   pressImg={require('../../xximgs/xuexin_topicon_one_pressed.png')}
                        />
                        <TopButton name={"学情诊断"} normalImg={require("../../xximgs/xuexin_topicon_two.png")}
                                   pressImg={require("../../xximgs/xuexin_topicon_two_pressed.png")}/>
                        <TopButton name={"错题本"} normalImg={require("../../xximgs/xuexin_topicon_three.png")}
                                   pressImg={require("../../xximgs/xuexin_topicon_three_pressed.png")}/>
                        <TopButton name={"巩固练习"} normalImg={require("../../xximgs/xuexin_topicon_four.png")}
                                   pressImg={require("../../xximgs/xuexin_topicon_four_pressed.png")}/>
                    </View>
                </ImageBackground>
                <View style={{height:200}}>
                    {/*<MiddleButton name={"消息"} normalImg={require("../../xximgs/xuexin_icon_tz.png")}*/}
                    {/*              pressImg={require("../../xximgs/xuexin_icon_tz.png")} style={{*/}
                    {/*    borderRightColor: global.constants.divColor,*/}
                    {/*    borderRightWidth: 0.5,*/}
                    {/*    borderBottomWidth: 0.5,*/}
                    {/*    borderBottomColor: global.constants.divColor*/}
                    {/*}}/>*/}
                    {/*<Text>啥都不显示啊</Text>*/}
                    <FlatList
                        //加载数据源
                        data={middleData}
                        //展示数据
                        renderItem={this.renderMiddle}
                        //默认情况下每行都需要提供一个不重复的key属性
                        keyExtractor={(name, normalImg) => (name)}
                        //设置垂直布局（）
                        horizontal={false}
                        //设置水平的排列的个数（只有垂直布局才起作用）
                        numColumns={4}
                    />
                </View>
            </View>
        );
    }
}

//顶部 每日一练、学情诊断、错题本、巩固练习等模块布局
class TopButton extends Component {
    static propTypes = {
        pressImg: PropTypes.number.isRequired,
        normalImg: PropTypes.number.isRequired,
        pressTextColor: PropTypes.string,
        normalTextColor: PropTypes.string,
        name: PropTypes.string.isRequired,
        onViewPressed: PropTypes.func
    }
    static defaultProps = {
        pressTextColor: "gray",
        normalTextColor: "white"
    }

    constructor(props) {
        super(props)
        this.state = {pressStatus: 'normal'}
    }

    onPressIn() {
        this.setState({pressStatus: 'pressIn'})
    }

    onPressOut() {
        this.setState({pressStatus: 'normal'})
    }

    componentDidUpdate(prevProps, prevState): void {

    }

    render() {
        return (
            //()=> 绑定
            <TouchableOpacity onPressIn={() => this.onPressIn()}
                              onPressOut={() => this.onPressOut()}
                              activeOpacity={1}
                              style={{
                                  flex: 1,
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                              }}>
                <Image
                    source={this.state.pressStatus == 'pressIn' ? this.props.pressImg : this.props.normalImg}
                    style={{width: 80, height: 80, justifyContent: 'center'}}
                />
                {/*<Text*/}
                {/*    style={[{color: this.state.pressStatus == 'pressIn' ? ()=>this.props.pressTextColor : ()=>this.props.normalTextColor}, styles.textTop]}>{this.props.name}</Text>*/}

            </TouchableOpacity>
        );
    }
}

// 中间 通知、群空间、社区等功能按钮
class MiddleButton extends Component {
    static propsType = {
        normalImg: PropTypes.number.isRequired,
        pressImg: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        normalTextColor: PropTypes.string,
        pressTextColor: PropTypes.string
    }
    static defaultProps = {
        normalTextColor: '#2A2A2A',
        pressTextColor: "#999999"
    }

    constructor(props) {
        super(props)
        this.state = {
            isClicked: false,
        }
    }

}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        textMiddle: {
            fontSize: 16
        },
        textTop: {
            alignContent: 'center',
            color: 'white',
            fontSize: 18,
        },
        textBottom: {
            alignContent: 'center',
            color: '#2C2C2C',
            fontSize: 18
        },
        textBottomSubTitle: {
            color: "#BCBCBC",
            fontSize: 16,
        }

    }
)
