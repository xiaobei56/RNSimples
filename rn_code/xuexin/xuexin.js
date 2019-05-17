import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    TouchableHighlight,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import CommonStyles from "./commonStyles/CommonSytes";
import PropTypes from "prop-types";

export default class XueXin extends Component {
    render() {

        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    hidden={true}
                    translucent={true}
                />
                <ImageBackground
                    style={{flex:1,flexDirection: 'row', width: "auto", height: 180, alignItems: 'center'}}
                    source={require("../../xximgs/xuexin_topbg.png")}>
                    <TopButton name={"每日一练"} normalImg={require('../../xximgs/xuexin_topicon_one.png')}
                               pressImg={require('../../xximgs/xuexin_topicon_one_pressed.png')}/>
                    <TopButton name={"学情诊断"} normalImg={require("../../xximgs/xuexin_topicon_two.png")}
                               pressImg={require("../../xximgs/xuexin_topicon_two_pressed.png")}/>
                    <TopButton name={"错题本"} normalImg={require("../../xximgs/xuexin_topicon_three.png")}
                               pressImg={require("../../xximgs/xuexin_topicon_three_pressed.png")}/>
                    <TopButton name={"巩固练习"} normalImg={require("../../xximgs/xuexin_topicon_four.png")}
                               pressImg={require("../../xximgs/xuexin_topicon_four_pressed.png")}/>


                </ImageBackground>
            </View>
        );
    }
}

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
                              style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <Image
                    source={this.state.pressStatus == 'pressIn' ? this.props.pressImg : this.props.normalImg}
                    style={{width: 80, height: 80}}
                />
                {/*<Text*/}
                {/*    style={[{color: this.state.pressStatus == 'pressIn' ? ()=>this.props.pressTextColor : ()=>this.props.normalTextColor}, styles.textTop]}>{this.props.name}</Text>*/}

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,

        },
        textMiddle: {
            color: '#2C2C2C',
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
