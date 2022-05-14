import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {scale} from '../Components/scaling';
import {Colors} from '../Styles';

export default function HeaderCustom({
  back = false,
  goBack,
  toggleDrawer,
  scan = false,
}) {
  return (
    <View
      style={{
        paddingTop: getStatusBarHeight(),
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
            if (back) goBack();
            else toggleDrawer();
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
              source={require('../Assets/menu.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                tintColor: Colors.White,
              }}
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
        {scan && (
          <TouchableOpacity
            onPress={() => {
              // if (back) goBack();
              // else NavService.toggleDrawer();
            }}
            activeOpacity={0.8}
            style={{
              position: 'absolute',
              right: 20,
              padding: 5,
              backgroundColor: Colors.primary,
              borderRadius: 5,
            }}>
            <Image
              source={require('../Assets/qr.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                tintColor: Colors.White,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
