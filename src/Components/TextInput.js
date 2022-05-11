import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {Colors} from '../Styles';
import {scale} from './scaling';

export default function TextInputCustom(props) {
  const {
    icon = null,
    textInputStyles = {},
    iconStyle = {},
    value,
    change,
    isEditable,
    keyboardType,
  } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0C1D34',
        marginBottom: 14,
        borderWidth: 2,
        borderColor: Colors.primary,
      }}>
      {icon ? (
        <Image
          source={icon}
          style={[
            {height: scale(16), width: scale(16), marginLeft: 20},
            iconStyle,
          ]}
          resizeMode="contain"
        />
      ) : null}
      <TextInput
        style={[
          {
            flex: 1,
            height: scale(40),
            paddingHorizontal: 15,
            color: Colors.White,
            fontSize: scale(14),
          },
          textInputStyles,
        ]}
        placeholderTextColor={Colors.Grey}
        value={!!value && value}
        onChangeText={text => {
          !!change && change(text);
        }}
        editable={isEditable ? false : true}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
}
