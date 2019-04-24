/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView,Button} from 'react-native';
import {Actions, ActionsStatic} from "react-native-router-flux";
Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});
type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <ScrollView style={{flex:1,backgroundColor:'aquamarine '}}>
          <Button title="基础组件" onPress={()=>{Actions.basecomponents()}} color='darkgray'/>

        </ScrollView>
    );
  }

  /**
   * 基础组件
   */
  onPressBtn1(){
    // Actions.base_component_textview()

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
