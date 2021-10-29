import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../components/Header';

//import

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Team 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: "green"}]}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: "lime"}]}>
          <Text style={styles.buttonText}>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: "yellow"}]}>
          <Text style={styles.buttonText}>Team 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
  },

  buttonStyle: {
    backgroundColor: 'red',
    marginTop: 40,
    width: 200,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
  },
});
