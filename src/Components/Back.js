import React from 'react';
import {Image, Keyboard, TouchableOpacity} from 'react-native';
import NavService from '../Components/NavService';
const logo = require('../Assets/back.png');

export default function Back() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        Keyboard.dismiss();
        setTimeout(() => {
          NavService.goBack();
        }, 100);
      }}>
      <Image
        source={logo}
        style={{height: 50, width: 50}}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
