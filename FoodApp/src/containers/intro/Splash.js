import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Login from '../auth/Login';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.navigate(props);
  }
  navigate = ({navigation}) => {
    setTimeout(() => {
      navigation.navigate(Login);
      navigation.clear;
    }, 3000);
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFF',
        }}>
        <Image
          source={require('../../assets/image/logo.png')}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default Splash;
