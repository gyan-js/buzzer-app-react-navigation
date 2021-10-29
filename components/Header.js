import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';




export default class App extends React.Component {
  render() {
    return (
      <View>
       <Text style={styles.textStyle}>Buzzer App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "black",
    color: "#f20044"
    
  },
})
