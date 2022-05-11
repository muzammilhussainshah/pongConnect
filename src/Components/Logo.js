import React from 'react';
import {Image} from 'react-native';
import {scale} from '../Components/scaling';
const logo = require('../Assets/logo.png');

export default function Logo({size = 250}) {
  return (
    <Image
      source={logo}
      style={{
        height: scale(100, 20),
        width: scale(size, 50),
      }}
      resizeMode="contain"
    />
  );
}
