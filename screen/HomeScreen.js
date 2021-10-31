import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader';

//import

export default class HomeScreen extends React.Component {
 
  render() {
    return(
      <View>
        <AppHeader/>
        <TouchableOpacity style={styles.buttonStyle} onPress ={() => this.props.navigation.navigate('BuzzerScreen1')}>
          <Text style={styles.buttonText}>Player1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle2} onPress ={() => this.props.navigation.navigate('BuzzerScreen2')}>
          <Text style={styles.buttonText}>Player2</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
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
  buttonStyle2: {
    backgroundColor: 'blue',
    marginTop: 40,
    width: 200,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
  },
});
