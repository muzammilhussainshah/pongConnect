import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {scale} from '../Components/scaling';
import {Colors} from '../Styles';

export default function HeaderCustom({back, nav}) {
  return (
    <View
      style={{
        paddingTop: getStatusBarHeight() ,
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          height: 55,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (back) nav();
          }}
          activeOpacity={0.8}
          style={{position: 'absolute', left: 20}}>
          {back ? (
            <Image
              source={require('../Assets/back.png')}
              style={{height: 30, width: 30, resizeMode: 'contain'}}
            />
          ) : (
            <Image
              source={require('../Assets/back.png')}
              style={{height: 30, width: 30, resizeMode: 'contain'}}
            />
          )}
        </TouchableOpacity>
        <Image
          source={require('../Assets/logo.png')}
          style={{
            height: scale(100, 20),
            width: scale(180, 80),
            resizeMode: 'contain',
          }}
        />
      </View>
    </View>
  );
}
