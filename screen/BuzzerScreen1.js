import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet , Button} from 'react-native';
import { Audio } from 'expo-av';

import AppHeader from '../components/AppHeader'



 class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };


  render() {
    return (
      <>
      <AppHeader/>
      <TouchableOpacity style={styles.button1} onPress={this.playSound}>
        <Text style={styles.buttonText}>Player 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')} style={styles.button2}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      </>
    );
  }
}
const styles = StyleSheet.create({
  button1: {
    marginTop: 100,
    marginLeft: '40%',
    //justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    
  },
  button2: {
    
    backgroundColor: 'yellow',
    marginTop: '250px',
    width: '100%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 2,
    justifySelf: 'center',
  }
});

export default SoundButton;
