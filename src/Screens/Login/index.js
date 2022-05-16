import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
import Logo from '../../Components/Logo';
import ButtonCustom from '../../Components/ButtonCustom';
import LoadingButtonCustom from '../../Components/LoadingButtonCustom';
import {Colors} from '../../Styles';
import TextInput from '../../Components/TextInput';
import styles from '../styles';
import style from './styles';

const facebook = require('../../Assets/facebook.png');
const emailIcon = require('../../Assets/email.png');
const people = require('../../Assets/people2.png');
const user = require('../../Assets/user.png');

export default function Login({navigation}) {
  const {navigate} = navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  return (
    <ImgBg>
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.justifySpaceBetween,
          styles.alignCenter,
          styles.flexGrow_1,
          {
            paddingHorizontal: 20,
          },
        ]}
        style={styles.w_100}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.w_100, {marginTop: '20%'}]}>
          <View
            style={[
              styles.directionRow,
              styles.justifyCenter,
              styles.alignCenter,
              {marginBottom: 15},
            ]}>
            <Logo />
          </View>
          <Text style={style.labelText}>EMAIL</Text>
          <TextInput
            placeholder="Email"
            placeholderTextHolder={Colors.Grey}
            value={email}
            change={setEmail}
          />
          <Text style={style.labelText}>PASSWORD :</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextHolder={Colors.Grey}
            value={password}
            change={setPassword}
          />
          <Text
            style={[
              styles.alignSelfCenter,
              styles.textCenter,
              styles.colorPrimary,
              styles.w_30,
              style.texts,
            ]}>
            {'Forgot Password'}
          </Text>
          <View style={[styles.directionRow, {marginBottom: 25}]}>
            <View
              style={[
                styles.mainContainer,
                styles.alignSelfCenter,
                styles.justifyCenter,
                styles.directionRow,
              ]}>
              <Img
                local={true}
                style={[style.customImages, {marginHorizontal: 10}]}
                resizeMode="contain"
                src={people}
              />
              <Img
                local={true}
                style={[style.customImages, {marginHorizontal: 10}]}
                resizeMode="contain"
                src={facebook}
              />
              <Img
                local={true}
                style={[style.customImages, {marginHorizontal: 10}]}
                resizeMode="contain"
                src={emailIcon}
              />
              <Img
                local={true}
                style={[style.customImages, {marginHorizontal: 10}]}
                resizeMode="contain"
                src={user}
              />
            </View>
          </View>
          <View
            style={[
              styles.alignCenter,
              styles.justifyCenter,
              styles.directionRow,
            ]}>
            {loader ? (
              <LoadingButtonCustom />
            ) : (
              <ButtonCustom
                title="Login"
                onPress={() => {
                  navigate('Home');
                }}
              />
            )}
          </View>
          <Text
            style={[
              styles.alignSelfCenter,
              styles.textCenter,
              styles.colorWhite,
              styles.w_80,
              style.texts1,
            ]}>
            {'Not a PONGConnect member yet ? '}
            <Text
              style={[style.texts1, styles.colorPrimary]}
              onPress={() => {
                navigate('SignUp');
              }}>
              Register now
            </Text>
            {` !`}
          </Text>
        </View>
        <Text style={style.footerText}>
          Copyright© 2021 Atalon Ventures (International) Limited All Rights
          Reserved.
        </Text>
      </KeyboardAwareScrollView>
    </ImgBg>
  );
}
