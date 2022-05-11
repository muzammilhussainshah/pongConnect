import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Colors} from '../Styles';
import {scale} from './scaling';

export default function ButtonCustom({title, containerStyle, onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          width: '50%',
          backgroundColor: Colors.primary,
          padding: scale(10),
          paddingHorizantal: scale(15),
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
  );
}
