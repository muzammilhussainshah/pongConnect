import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import HeaderCustom from '../../Components/Header';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
import ButtonCustom from '../../Components/ButtonCustom';
const whatsapp = require('../../Assets/whatsapp.png');
const ev1 = require('../../Assets/eveBanner/ev1.png');
const ev2 = require('../../Assets/eveBanner/ev2.png');
const ev3 = require('../../Assets/eveBanner/ev3.png');
const ev4 = require('../../Assets/eveBanner/ev4.png');
const ev5 = require('../../Assets/eveBanner/ev5.png');
const ev6 = require('../../Assets/eveBanner/ev6.png');

import styles from '../styles';
import style from './styles';

export default function EventDetails({ navigation }) {
    const { navigate, goBack } = navigation;
    const [search, setsearch] = useState('');

    return (
        <ImgBg>
            <HeaderCustom showLogo={true} back={true} goBack={goBack} scanPrivate />

            <KeyboardAwareScrollView
                contentContainerStyle={[
                    styles.justifySpaceBetween,
                    styles.alignCenter,
                    styles.flexGrow_1,
                ]}
                style={styles.w_100}
                showsVerticalScrollIndicator={false}>

                <View style={{ flex: 1, width: '95%', marginHorizontal: '2.5%', }}>
                    <Text style={style.boxesContainerC1Text}>EVENT</Text>
                    <Img
                        local={true}
                        style={{ height: 250, width: "100%", }}
                        resizeMode="contain"
                        src={ev1}
                    />

                    <Text style={style.titleText}>SILICON JELLY</Text>

                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flex: 7, flexDirection: 'row', }}>
                            <Text style={style.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={style.boxesContainerC1Text}>JOIN</Text>
                            <Img
                                local={true}
                                style={{ height: 55, width: 55, }}
                                resizeMode="contain"
                                src={whatsapp}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={[style.description, { marginTop: 15 }]}>TIME: 00;00-00;00</Text>
                    <Text style={[style.description, { marginTop: 15 }]}>DATE: 00 DEC 2021</Text>
                    <Text style={[style.description, { marginTop: 15 }]}>VENUE: Lambda Lounge</Text>
                    <Text style={[style.description, { marginTop: 15 }]}>ADDRESS: 108 Hollywood Road Sheung Wan Hong Kong</Text>
                    <Text style={[style.description, { marginTop: 15 }]}>ENTRY FEE: FREE</Text>

                    <View
                        style={[
                            styles.alignCenter,
                            styles.justifyCenter,
                            styles.directionRow,
                            styles.margin2Percent,
                        ]}>
                        <ButtonCustom
                            title="SHOW TAXI"
                            onPress={() => {
                                navigate('ShowTaxi');
                            }}
                        />
                    </View>
                    <Text style={[style.boxesContainerC1Text, styles.margin2Percent,]}>RECOMENDED</Text>
                    <ScrollView horizontal={true}>
                        <Img
                            local={true}
                            style={{ height: 150, width: 150, }}
                            resizeMode="contain"
                            src={ev2}
                        />

                        <Img
                            local={true}
                            style={{ height: 150, width: 150, marginLeft: 15 }}
                            resizeMode="contain"
                            src={ev3}
                        />

                        <Img
                            local={true}
                            style={{ height: 150, width: 150, marginLeft: 15 }}
                            resizeMode="contain"
                            src={ev4}
                        />

                        <Img
                            local={true}
                            style={{ height: 150, width: 150, marginLeft: 15 }}
                            resizeMode="contain"
                            src={ev5}
                        />

                        <Img
                            local={true}
                            style={{ height: 150, width: 150, marginLeft: 15 }}
                            resizeMode="contain"
                            src={ev6}
                        />
                    </ScrollView>
                </View>
            </KeyboardAwareScrollView>
        </ImgBg>
    );
}
