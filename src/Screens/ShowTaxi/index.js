import React, { useState } from 'react';
import { Text, View } from 'react-native';
import HeaderCustom from '../../Components/Header';
import ImgBg from '../../Components/BackgroundImage';

import styles from '../styles';
import style from './styles';

export default function ShowTaxi({ navigation }) {
    const { navigate, goBack } = navigation;

    return (
        <ImgBg>
            <HeaderCustom showLogo={true} back={true} goBack={goBack}  />
            <View style={{ flex: 1, width: '95%', marginHorizontal: '2.5%', justifyContent: 'center', }}>
                <Text style={style.boxesContainerC1Text}>VENUE:</Text>
                <Text style={style.titleText}>LAMBDA LOUNGE</Text>
                <Text style={[style.boxesContainerC1Text, styles.margin3Percent]}>ADDRESS:</Text>
                <Text style={style.titleText}>108 Hollywood Road, Sheung Wan,Hong Kong</Text>
                <Text style={[style.smallText, { marginTop: '50%', textAlign: 'center' }]}>CHANGE LANGUAGE</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={[style.smallText, { textAlign: 'center', color: '#EC6C00' }]}>ENG</Text>
                    <Text style={[style.smallText, { textAlign: 'center' }]}>  |  繁體中文  |  简体中文</Text>
                </View>
            </View>
        </ImgBg>
    );
}
