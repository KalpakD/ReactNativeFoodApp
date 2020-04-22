import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Strings} from '../../theme';

class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <View
          style={{
            flex: 0.8,
            backgroundColor: Colors.white,
            borderBottomEndRadius: wp(8),
            borderBottomStartRadius: wp(8),
            elevation: 8,
            padding: wp(3.5),
          }}>
          <Text
            style={{
              color: Colors.ACCENT_COLOR,
              fontSize: hp(3),
              // backgroundColor: Colors.yellow_100,
              textAlign: 'center',
              textAlignVertical: 'center',
              flex: 0.3,
            }}>
            SignIn
          </Text>
          <View
            style={{
              flex: 0.4,
              // backgroundColor: Colors.yellow_300
            }}>
            <View
              style={{
                backgroundColor: Colors.BG_LIGHTER,
                marginHorizontal: wp(3.5),
                marginTop: wp(3.5),
                borderRadius: wp(2),
                flex: 0.25,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../assets/icons/icon-mail.png')}
                resizeMode="center"
                style={{
                  flex: 0.07,
                  margin: 15,
                  alignSelf: 'center',
                }}
              />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={{flex: 0.92, fontSize: hp(2)}}
                placeholderTextColor={Colors.TXT_LIGHT}
              />
            </View>
            <View
              style={{
                backgroundColor: Colors.BG_LIGHTER,
                marginHorizontal: wp(3.5),
                marginTop: wp(3.5),
                borderRadius: wp(2),
                flex: 0.25,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../assets/icons/icon-padlock.png')}
                resizeMode="center"
                style={{
                  flex: 0.07,
                  margin: 15,
                  alignSelf: 'center',
                }}
              />
              <TextInput
                placeholder="Password"
                keyboardType="default"
                secureTextEntry
                style={{flex: 0.92, fontSize: hp(2)}}
                placeholderTextColor={Colors.TXT_LIGHT}
              />
            </View>

            <Text
              style={{
                flex: 0.3,
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: hp(2),
                color: Colors.TXT_LIGHT,
              }}>
              Forgot password?
            </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              // backgroundColor: Colors.yellow_500,
              // alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.ACCENT_COLOR,
                flex: 0.35,
                borderRadius: wp(8),
                margin: wp(3),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: hp(1.8),
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: Colors.white,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            color: Colors.TXT_LIGHT,
            flex: 0.2,
            fontSize: hp(1.8),
            fontWeight: 'bold',
            textAlign: 'center',
            textAlignVertical: 'center',
            textTransform: 'uppercase',
          }}>
          Create Account
        </Text>
      </View>
    );
  }
}

export default Login;
