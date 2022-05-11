import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../Styles';
import {scale} from './scaling';

export default function ButtonCustom({title, containerStyle, onPress}) {
  return (
    <LinearGradient
      colors={['#FF2C00', Colors.primary]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={{
        width: '50%',
        padding: scale(10),
        paddingHorizantal: scale(15),
        borderRadius: scale(8),
        alignSelf: 'stretch',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[
          {
            width: '100%',
            borderRadius: scale(8),
            alignSelf: 'stretch',
            alignItems: 'center',
          },
          containerStyle,
        ]}>
        <Text
          style={{
            color: Colors.White,
            fontFamily: '700',
            fontSize: scale(15),
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
