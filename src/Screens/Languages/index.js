import React, { useState } from 'react';
import { Text, View } from 'react-native';
import HeaderCustom from '../../Components/Header';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
const play1 = require('../../Assets/lngIcon.png');

import styles from '../styles';
import style from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Languages({ navigation }) {
    const { navigate, goBack } = navigation;

    return (
        <ImgBg>
            <HeaderCustom showLogo={true} back={true} goBack={goBack} />
            <View style={{ flex: 1, width: '95%', marginHorizontal: '2.5%', justifyContent: 'center', }}>

                <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '2.5%', alignItems: 'center', }}>
                    <Img
                        local={true}
                        style={{ height: 30, width: 30, top: 5 }}
                        resizeMode="contain"
                        src={play1}
                    />
                    <Text style={style.boxesContainerC1Text}>{' '}LANGUAGES</Text>
                </View>


                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ width: '80%' }}>
                        <TouchableOpacity>
                            <Text style={style.boxesContainerC1Text}>繁體中文 (Traditional Chinese)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={style.boxesContainerC1Text}>简体中文 (Simplified Chinese)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={style.boxesContainerC1Text}>English (UK)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={style.boxesContainerC1Text}>English (US)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={style.boxesContainerC1Text}>日本語 (Japanese)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={style.boxesContainerC1Text}>한국어 (Korean)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={style.boxesContainerC1Text}>ไทย (Thai)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={style.boxesContainerC1Text}>Français (French)</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                        style={[styles.margin2Percent, {
                            fontSize: 10, marginBottom: 20, color: '#BCBCBC', fontFamily: 'AgencyFB-Bold', letterSpacing: 1,
                        }]}
                    >
                        Copyright© 2021 Atalon Ventures (International) Limited All Rights Reserved.
                    </Text>
                </View>

            </View>
        </ImgBg>
    );
}
