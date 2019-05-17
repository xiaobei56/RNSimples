import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent:"center",
            borderLeftWidth:1,
            borderRightWidth:1,
            borderBottomWidth:1,
            borderTopWidth:10,
            borderColor:"yellow",
            transform:([{ rotateX: '45deg' }, { rotateZ: '0.785398rad' }]),
            shadowColor:"pink",

        },
        text: {
            alignContent:"center",
            color:"red",
            fontSize:18,
            fontStyle:"italic",
            justifyContent: "center"
        }
    }
)
export default styles;