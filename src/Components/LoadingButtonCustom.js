import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Colors} from '../Styles';
import {scale} from './scaling';

export default function LoadingButtonCustom({containerStyle, width}) {
  return (
    <View
      style={[
        width
          ? {
              backgroundColor: Colors.primary,
              padding: scale(15),
              margin: scale(10),
              borderRadius: 100,
              alignSelf: 'stretch',
              alignItems: 'center',
              width: width,
            }
          : {
              backgroundColor: Colors.primary,
              padding: scale(15),
              borderRadius: 100,
              alignSelf: 'stretch',
              alignItems: 'center',
            },
        containerStyle,
      ]}>
      <ActivityIndicator size={'small'} color={Colors.White} />
    </View>
  );
}
