import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './screen/HomeScreen'
import BuzzerScreen from './screen/BuzzerScreen'

export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
        <AppContainer />
        </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen :  HomeScreen,
  BuzzerScreen: BuzzerScreen
});

const AppContainer =  createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});