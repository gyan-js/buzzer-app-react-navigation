import * as React from 'react';
import {View} from 'react-native';
import HomeScreen from './screen/HomeScreen';
import BuzzerScreen1 from './screen/BuzzerScreen1';
import BuzzerScreen2 from './screen/BuzzerScreen2';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return(
      <View>
        <AppContainer/>
        
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  BuzzerScreen1:BuzzerScreen1
  
})



const AppContainer = createAppContainer(AppNavigator);