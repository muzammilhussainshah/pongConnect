import React, {
  useState
} from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import ImgBg from '../../Components/BackgroundImage';
import Logo from '../../Components/Logo';
import ButtonCustom from '../../Components/ButtonCustom';
import LoadingButtonCustom from '../../Components/LoadingButtonCustom';
import { Colors } from '../../Styles';
import TextInput from '../../Components/TextInput';
import { scale } from '../../Components/scaling';

const facebook = require('../../Assets/facebook.png');
const emailIcon = require('../../Assets/email.png');
const people = require('../../Assets/people.png');
const user = require('../../Assets/user.png');

export default function Login({ navigation }) {
  const { navigate } = navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  return (
    <ImgBg>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: "20%",
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
              fontWeight: 'bold',
              fontSize: scale(13),
              marginBottom: 5,
              marginHorizontal: 15
            }}>
            EMAIL
          </Text>
          <TextInput
            placeholder="Email"
            placeholderTextHolder={Colors.Grey}
            value={email}
            change={setEmail}
          />
          <Text
            style={{
              color: Colors.White,
              fontWeight: 'bold',
              fontSize: scale(13),
              marginBottom: 5,
              marginHorizontal: 15
            }}>
            PASSWORD :
          </Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextHolder={Colors.Grey}
            value={password}
            change={setPassword}
          />
          <Text
            style={{
              color: Colors.White,
              fontFamily: '700',
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: scale(14),
              width: '30%',
              textAlign: 'center',
              paddingHorizontal: 10,
              textTransform: 'uppercase', marginBottom: 15
            }}>
            {'Forgot Password'}
          </Text>
          <View style={{ flexDirection: 'row', marginBottom: 25 }}>
            <View
              style={{
                flex: 1,
                alignSelf: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={{ height: 40, width: 40 }}
                resizeMode="contain"
                source={people}
              />
              <Image
                style={{ height: 40, width: 40, marginHorizontal: 10 }}
                resizeMode="contain"
                source={facebook}
              />
              <Image
                style={{ height: 40, width: 40 }}
                resizeMode="contain"
                source={emailIcon}
              />
              <Image
                style={{ height: 40, width: 40, marginHorizontal: 10 }}
                resizeMode="contain"
                source={user}
              />
            </View>
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
              textAlign: 'center',
              fontSize: 14,
              width: '80%',
              marginTop: 40,
              fontWeight: '700',
              textTransform: 'uppercase',

            }}>
            {'Not a PONGConnect member yet? '}
            <Text
              style={{
                fontSize: 14,
                alignSelf: 'center',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: Colors.primary,
              }}
              onPress={() => {
                navigate('SignUp');
              }}>
              Register now
            </Text>
            {`!`}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 10,
            letterSpacing: 1,
            marginBottom: "2%",
            lineHeight: 15,
            textTransform: 'uppercase',
            color: Colors.White, textAlign: 'center'
          }}>
          Copyright© 2021 Atalon Ventures (International) Limited All Rights Reserved.
        </Text>
      </KeyboardAwareScrollView>
    </ImgBg>
  );
}
