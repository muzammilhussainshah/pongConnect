import React, {useState} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import ImgBg from '../../Components/BackgroundImage';
import Logo from '../../Components/Logo';
import ButtonCustom from '../../Components/ButtonCustom';
import LoadingButtonCustom from '../../Components/LoadingButtonCustom';
import {Colors} from '../../Styles';
import TextInput from '../../Components/TextInput';
import {scale} from '../../Components/scaling';

const facebook = require('../../Assets/facebook.png');
const emailIcon = require('../../Assets/email.png');
const people = require('../../Assets/people.png');
const user = require('../../Assets/user.png');

export default function Login({navigation}) {
  const {navigate} = navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const userLogin = () => {};
  return (
    <ImgBg>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <Logo />
          </View>
          <Text
            style={{
              color: Colors.White,
              fontFamily: '600',
              fontSize: scale(15),
              marginBottom: 10,
            }}>
            EMAIL ADDRESS
          </Text>
          <TextInput
            // icon={userIcon}
            placeholder="Email Address"
            placeholderTextHolder={Colors.Grey}
            value={email}
            change={setEmail}
          />
          <Text
            style={{
              color: Colors.White,
              fontFamily: '600',
              fontSize: scale(15),
              marginBottom: 10,
            }}>
            PASSWORD
          </Text>
          <TextInput
            // icon={passwordIcon}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextHolder={Colors.Grey}
            value={password}
            change={setPassword}
          />
          <Text
            // onPress={() => navigate('ForgotPassword')}
            style={{
              color: Colors.White,
              fontFamily: '700',
              alignSelf: 'center',
              fontSize: scale(14),
            }}>
            {'Forgot Password'}
          </Text>
          <View style={{flexDirection: 'row', marginVertical: 25}}>
            <View style={{flex: 0.2}}></View>
            <View
              style={{
                flex: 0.6,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Image
                style={{height: 40, width: 40}}
                resizeMode="contain"
                source={people}
              />
              <Image
                style={{height: 40, width: 40}}
                resizeMode="contain"
                source={facebook}
              />
              <Image
                style={{height: 40, width: 40}}
                resizeMode="contain"
                source={emailIcon}
              />
              <Image
                style={{height: 40, width: 40}}
                resizeMode="contain"
                source={user}
              />
            </View>
            <View style={{flex: 0.2}}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {loader ? <LoadingButtonCustom /> : <ButtonCustom title="Login" />}
          </View>
          <Text
            style={{
              color: Colors.White,
              alignSelf: 'center',
              fontSize: 14,
              marginVertical: 40,
              textTransform: 'uppercase',
            }}>
            {'Not a PONGConnect member yet? '}
            <Text
              style={{
                fontSize: 14,
                fontFamily: '500',
                textDecorationLine: 'underline',
                color: Colors.primary,
              }}
              onPress={() => {
                navigate('SignUp');
              }}>
              Register now!
            </Text>
          </Text>
        </View>
        <Text
          style={{
            fontSize: 11,
            textDecorationLine: 'underline',
            color: Colors.White,
          }}>
          Copyright© 2021 Atalon Ventures (International) Limited All Rights
          Reserved.
        </Text>
      </ScrollView>
    </ImgBg>
  );
}
