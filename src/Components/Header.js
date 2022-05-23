import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { scale } from '../Components/scaling';
import Img from './Img';
import { Colors } from '../Styles';

export default function HeaderCustom({
  back = false,
  goBack,
  toggleDrawer,
  showLogo,
  isDrawer,
  scan = false,
  scanPrivate = false,
  setting,
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
          style={{ position: 'absolute', left: 20 }}>
          {back ? (
            <Img
              local={true}
              style={{ height: 30, width: 30 }}
              src={require('../Assets/back.png')}
              resizeMode={'contain'}
            />
          ) : (
            <Image
              source={
                isDrawer
                  ? require('../Assets/back.png')
                  : require('../Assets/menu.png')
              }
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                tintColor: Colors.White,
              }}
            />
          )}
        </TouchableOpacity>
        {showLogo && (
          <Img
            local={true}
            style={{
              height: scale(100, 20),
              width: scale(180, 80),
            }}
            src={require('../Assets/logo.png')}
            resizeMode={'contain'}
          />
        )}
        {scan ? (
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
            <Img
              local={true}
              style={{
                height: 30,
                width: 30,
                tintColor: Colors.White,
              }}
              src={require('../Assets/qr.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        ) : setting ? (
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
              borderRadius: 5,
            }}>
            <Img
              local={true}
              style={{
                height: 30,
                width: 30,
                tintColor: Colors.White,
              }}
              src={require('../Assets/settings.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        ) : null}

        {
          scanPrivate &&
          <TouchableOpacity
            onPress={() => {
              // if (back) goBack();
              // else NavService.toggleDrawer();
            }}
            activeOpacity={0.8}
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              right: 20,
              borderRadius: 5,
              top: 10
            }}>
            <Img
              local={true}
              style={{
                height: 30,
                width: 30,
                tintColor: Colors.White,
              }}
              src={require('../Assets/pvScan.png')}
              resizeMode={'contain'}
            />
            <Text numberOfLines={2} style={{ color: 'white', textAlign: 'center' }}>Private{'\n'} Scan</Text>
          </TouchableOpacity>
        }
      </View>
    </View>
  );
}
