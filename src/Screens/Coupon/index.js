import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import HeaderCustom from '../../Components/Header';
import ButtonCustom from '../../Components/ButtonCustom';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
const couponLogo = require('../../Assets/coupon.png');
const c1 = require('../../Assets/c1.png');
const c2 = require('../../Assets/c2.png');
const c3 = require('../../Assets/c3.png');
const c4 = require('../../Assets/c4.png');

import styles from '../styles';
import style from './styles';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

export default function Coupon({ navigation }) {
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
                        src={couponLogo}
                    />
                    <Text style={style.boxesContainerC1Text}>{'  '}COUPON</Text>
                </View>

                <KeyboardAwareScrollView
                    style={styles.w_100}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>

                        <View style={{ flex: 1, flexDirection: 'row', width: '100%', }}>
                            <View style={{ width: '80%', }}>
                                <Img
                                    local={true}
                                    style={{ height: 160, width: '100%', }}
                                    resizeMode="contain"
                                    src={c1}
                                />
                            </View>
                            <View style={{ width: '20%', }}>
                                <View
                                    style={[
                                        styles.alignCenter,
                                        styles.justifyCenter,
                                        styles.w_35,
                                        { marginTop: '70%' }
                                    ]}>
                                    <ButtonCustom
                                        title="USED"
                                        onPress={() => { navigate('AwardMovieDetails') }}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', width: '100%', marginTop: 10, }}>
                            <View style={{ width: '80%', }}>
                                <Img
                                    local={true}
                                    style={{ height: 160, width: '100%', }}
                                    resizeMode="contain"
                                    src={c2}
                                />
                            </View>
                            <View style={{ width: '20%', }}>
                                <View
                                    style={[
                                        styles.alignCenter,
                                        styles.justifyCenter,
                                        styles.w_35,
                                        { marginTop: '70%' }
                                    ]}>
                                    <ButtonCustom
                                        title="USED"
                                        onPress={() => { navigate('AwardMovieDetails') }}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', width: '100%', marginTop: 10, }}>
                            <View style={{ width: '80%', }}>
                                <Img
                                    local={true}
                                    style={{ height: 160, width: '100%', }}
                                    resizeMode="contain"
                                    src={c3}
                                />
                            </View>
                            <View style={{ width: '20%', }}>
                                <View
                                    style={[
                                        styles.alignCenter,
                                        styles.justifyCenter,
                                        styles.w_35,
                                        { marginTop: '70%' }
                                    ]}>
                                    <ButtonCustom
                                        title="USED"
                                        onPress={() => { navigate('AwardMovieDetails') }}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', width: '100%', marginTop: 10, }}>
                            <View style={{ width: '80%', }}>
                                <Img
                                    local={true}
                                    style={{ height: 160, width: '100%', }}
                                    resizeMode="contain"
                                    src={c4}
                                />
                            </View>
                            <View style={{ width: '20%', }}>
                                <View
                                    style={[
                                        styles.alignCenter,
                                        styles.justifyCenter,
                                        styles.w_35,
                                        { marginTop: '70%' }
                                    ]}>
                                    <ButtonCustom
                                        title="USED"
                                        onPress={() => { navigate('AwardMovieDetails') }}
                                    />
                                </View>
                            </View>
                        </View>


                    </View>

                </KeyboardAwareScrollView>

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
