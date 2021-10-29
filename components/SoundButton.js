import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.playSound}>
        <Text
          style={styles.buttonText}>
          Press Me
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 60,
    marginLeft: 90,
  
    borderColor: 'black',
    
    width: 200,
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
  }
});

export default SoundButton;