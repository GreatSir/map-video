import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './src/pages/Home'
import Act from './src/pages/Act'
import StoreList from './src/pages/StoreList'
import StoreVideo from './src/pages/StoreVideo'
import Task from './src/pages/Task'

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Act:{
      screen:Act,
    },
    StoreList:{
      screen:StoreList,
    },
    StoreVideo:{
      screen:StoreVideo
    },
    Task:{
      screen:Task
    }
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends Component {
    // ...
    render() {
        return (
            <RootStack/>
        )
    }
}