import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import ImageCropPicker from 'react-native-image-crop-picker';
import Back from '../../Components/Back';
import ImgBg from '../../Components/BackgroundImage';
import HeaderCustom from '../../Components/Header';
import Logo from '../../Components/Logo';
import ButtonCustom from '../../Components/ButtonCustom';
import LoadingButtonCustom from '../../Components/LoadingButtonCustom';
import {Colors} from '../../Styles';
import TextInput from '../../Components/TextInput';
import {scale} from '../../Components/scaling';

const height = Dimensions.get('window').height * 0.01;
const width = Dimensions.get('window').width * 0.01;
const uri = require('../../Assets/staticImage.png');

export default function SignUp({navigation, route}) {
  const {navigate, goBack} = navigation;
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const imageChange = method => {
    SheetManager.hide();
    setGender(method);
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
                //actionSheetRef.hide()
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
      <HeaderCustom back={true} nav={goBack} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          flexGrow: 1,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
        style={{width: '100%'}}
        showsVerticalScrollIndicator={false}>
        <View style={{width: '100%'}}>
          <View style={{marginBottom: 20, alignSelf: 'center'}}>
            <Image
              source={uri}
              style={{
                height: 120,
                width: 120,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: Colors.White,
                backgroundColor: Colors.Grey,
              }}
            />
          </View>
          <Text
            style={{
              color: Colors.White,
              fontFamily: '600',
              fontSize: scale(13),
              marginBottom: 10,
            }}>
            USER NAME
          </Text>
          <TextInput
            // icon={userIcon}
            placeholder="Full Name"
            placeholderTextHolder={Colors.Grey}
            value={fullName}
            change={setFullName}
          />
          <Text
            style={{
              color: Colors.White,
              fontFamily: '600',
              fontSize: scale(13),
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
          <View
            style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{flex: 1}}
              onPress={() => {
                SheetManager.show('gender');
              }}>
              <Text
                style={{
                  color: Colors.White,
                  fontFamily: '600',
                  fontSize: scale(13),
                  marginBottom: 10,
                }}>
                PHONE NUMBER
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
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            {loading ? (
              <LoadingButtonCustom />
            ) : (
              <ButtonCustom title="NEXT >" />
            )}
          </View>
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
      </KeyboardAwareScrollView>
    </ImgBg>
  );
}
