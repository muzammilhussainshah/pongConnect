import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {Colors} from '../Styles';
import {scale} from './scaling';

export default function CustomInput(props) {
  const {
    icon = null,
    textInputStyles = {},
    iconStyle = {},
    value,
    change,
    isEditable,
    keyboardType,
    keyValue,
  } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.White,
        borderRadius: scale(25),
        marginBottom: 15,
        flex: 1,
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
            height: scale(50),
            paddingHorizontal: 15,
            color: Colors.Black,
            fontSize: scale(14),
          },
          textInputStyles,
        ]}
        placeholderTextColor={Colors.Grey}
        value={!!value && value}
        onChangeText={text => {
          !!change && change(keyValue, text);
        }}
        editable={isEditable ? false : true}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
}
