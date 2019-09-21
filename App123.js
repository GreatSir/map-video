import React, { Component } from 'react';
import {
  Platform,
  Button,
  NativeModules,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
var nativeModule = NativeModules.LoopyunJumpModule
export default class App extends Component<Props> {
  jumpToNativeView() {
    //nativeModule.openMain();
    nativeModule.startMain("com.Tata.video.activity.MainActivity","rn");
  }
  jumpToNativeView2() {
    nativeModule.openMain();
    //nativeModule.startActivityFromJs("com.Tata.video.activity.MainActivity","test");
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="跳转主页面" onPress={() => {
          this.jumpToNativeView();
        }}/>
        <Text style={styles.welcome}>
          this is App
        </Text>
        <Button title="跳转登录页面" onPress={() => {
          this.jumpToNativeView2();
        }}/>
      </View>
    );
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
  }
 });