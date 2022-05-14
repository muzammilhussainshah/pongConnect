import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {launchImageLibrary} from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Entypo from 'react-native-vector-icons/Entypo';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

import ImgBg from '../../Components/BackgroundImage';
import HeaderCustom from '../../Components/Header';
import ButtonCustom from '../../Components/ButtonCustom';
import LoadingButtonCustom from '../../Components/LoadingButtonCustom';
import TextInput from '../../Components/TextInput';
import {Colors} from '../../Styles';
import {scale} from '../../Components/scaling';
import styles from '../styles';
import style from './styles';

export default function SignUp({navigation, route}) {
  const {navigate, goBack} = navigation;
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUriLocal, setimageUriLocal] = useState('');

  const getImg = async () => {
    try {
      let options = {
        title: 'Select Image',
        includeBase64: true,
        customButtons: [
          {
            name: 'customOptionKey',
            title: 'Choose Photo from Custom Option',
          },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      launchImageLibrary(options, async res => {
        if (res.didCancel) {
        } else if (res.error) {
        } else {
          setimageUriLocal(res.assets[0].uri);
        }
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  const imageChange = method => {
    setGender(method);
    SheetManager.hide('gender');
  };
  return (
    <ImgBg type="success">
      <ActionSheet
        id="gender"
        containerStyle={{backgroundColor: 'transparent'}}>
        <View style={{padding: 10}}>
          <View
            style={{
              backgroundColor: 'rgba(241,241,241,0.8)',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                borderBottomWidth: 1.5,
                borderBottomColor: '#ccc',
                paddingVertical: 10,
              }}>
              <Text style={{color: 'grey', textAlign: 'center'}}>
                Choose Gender
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                imageChange('Male');
              }}
              style={{
                paddingVertical: 12,
                alignItems: 'center',
                borderBottomWidth: 1.5,
                borderBottomColor: '#ccc',
              }}>
              <Text style={{color: 'rgb(0,88,200)', fontSize: 18}}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                imageChange('Female');
              }}
              style={{paddingVertical: 12, alignItems: 'center'}}>
              <Text style={{color: 'rgb(0,88,200)', fontSize: 18}}>Female</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => SheetManager.hide('gender')}
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              paddingVertical: 12,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'rgb(0,88,200)',
                fontSize: 18,
                fontWeight: '600',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
      <HeaderCustom back={true} goBack={goBack} />
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.mainContainer,
          styles.justifySpaceBetween,
          styles.alignCenter,
          styles.flexGrow_1,
          ,
          {
            padding: 20,
          },
        ]}
        style={styles.w_100}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.w_100, styles.margin4Percent]}>
          <View style={[styles.alignSelfCenter, {marginBottom: 20}]}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => getImg()}
              style={[
                styles.justifyCenter,
                styles.alignCenter,
                style.profilePicture,
              ]}>
              <Image
                source={{uri: imageUriLocal}}
                style={[styles.w_100, {height: '100%'}]}></Image>
              <View
                style={[
                  styles.justifyCenter,
                  styles.alignCenter,
                  styles.w_100,
                  {
                    position: 'absolute',
                    zIndex: 1,
                    height: '100%',
                  },
                ]}>
                <View
                  style={[
                    styles.justifyCenter,
                    styles.alignCenter,
                    styles.directionRow,
                  ]}>
                  <Entypo name={'camera'} size={15} color={Colors.White} />
                  <Entypo
                    name={'arrow-long-up'}
                    size={15}
                    color={Colors.White}
                  />
                </View>
                <Text
                  style={style.texts}>
                  UPLOAD IMAGE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={style.labelText}>
            USER NAME:
          </Text>
          <TextInput
            // icon={userIcon}
            placeholder="Full Name"
            placeholderTextHolder={Colors.Grey}
            value={fullName}
            change={setFullName}
          />
          <Text
            style={style.labelText}>
            EMAIL:
          </Text>
          <TextInput
            // icon={userIcon}
            placeholder="Email Address"
            placeholderTextHolder={Colors.Grey}
            value={email}
            change={setEmail}
          />
          <View style={[styles.w_100, styles.alignCenter, styles.directionRow]}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{flex: 1}}
              onPress={() => {
                SheetManager.show('gender');
              }}>
              <Text
                style={style.labelText}>
                GENDER:
              </Text>
              <TextInput
                placeholder="Gender"
                placeholderTextHolder={Colors.Grey}
                isEditable={true}
                value={gender}
                change={setGender}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.justifyCenter,
              styles.alignCenter,
              styles.directionRow,
              {
                marginTop: 10,
              },
            ]}>
            {loading ? (
              <LoadingButtonCustom />
            ) : (
              <ButtonCustom title="NEXT >" />
            )}
          </View>
        </View>
        <Text style={style.footerText}>
          Copyright© 2021 Atalon Ventures (International) Limited All Rights
          Reserved.
        </Text>
      </KeyboardAwareScrollView>
    </ImgBg>
  );
}
