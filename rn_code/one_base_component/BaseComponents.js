import React, {Component} from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Touchable,
    StyleSheet
} from 'react-native'
import StyleUseMain from "../two_layout_property/style_use/StyleUseMain";

const IMAGE_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: {thumbnail: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556008395528&di=9f78fc314fb7af5b469ac6cd9e3b0b7d&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Ffashion%2Fpics%2Fhv1%2F227%2F41%2F2253%2F146512007.jpg"}
    }
];
export default class BaseComponents extends Component {

    render() {
        return <ScrollView style={{flex: 1, backgroundColor: 'LightCyan'}}>
            <Text style={styles.subTitleStyle}>TextView</Text>
            <Text style={{
                //字体
                color: '#aff',
                fontSize: 30,
                fontFamily: "黑体",
                backgroundColor: "red",
                //内边距
                padding: 5,
                //边框
                borderWidth: 3,
                borderColor: '#a1f',
                borderRadius: 10,
                //外边距
                margin: 5,//外边距
            }}>我是测试TextView的</Text>
            <Text style={styles.subTitleStyle}>Image-获取图片</Text>
            <Text style={styles.subsubTitleStyle}>网络图片</Text>
            <Image style={styles.imageStyles}
                   source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556008395528&di=9f78fc314fb7af5b469ac6cd9e3b0b7d&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Ffashion%2Fpics%2Fhv1%2F227%2F41%2F2253%2F146512007.jpg'}}/>
            <Text style={styles.subsubTitleStyle}>全局变量获取</Text>
            <Image style={{width: 60, height: 60, alignContent: 'center'}}
                   source={{uri: IMAGE_DATA[0].posters.thumbnail}}/>
            <Text style={styles.subsubTitleStyle}>路径下的图片</Text>
            <Image style={styles.imageStyles}
                   source={require('../../imags/beauty.jpg')}/>
            <Text style={styles.subsubTitleStyle}>资源文件下-Android必须是 drawable目录下</Text>

            <Text style={styles.subsubTitleStyle}>属性复用</Text>
            <StyleUseMain/>
            <Image style={styles.imageStyles}
                   source={{uri: 'ic_launcher'}}/>

            <TextInput style={{alignContent:'center',width: 100, height: 50}}
                       defaultValue="我是默认值"/>


        </ScrollView>
    }

}
const styles = StyleSheet.create({
    container: {},
    subTitleStyle: {
        backgroundColor: '#ffaa11',
        justifyContent: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        height: 30,
    }, subsubTitleStyle: {
        backgroundColor: '#aaa',
        justifyContent: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        height: 30,

    },
    imageStyles: {
        width: 80,
        height: 80,
    }
})