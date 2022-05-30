import React, { useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import HeaderCustom from '../../Components/Header';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
import { Colors } from '../../Styles';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import ButtonCustom from '../../Components/ButtonCustom';
import { scale } from '../../Components/scaling';

const plusBox = require('../../Assets/plusBox.png');
const goldCoin = require('../../Assets/goldCoin.png');
const roundDimond = require('../../Assets/roundDimond.png');
const notAvailableUserIcon = require('../../Assets/notAvailableUserIcon.png');

const dimondplus1 = require('../../Assets/1dimondplus.png');
const goldplus1 = require('../../Assets/1goldplus.png');
const goldcoinsserval = require('../../Assets/goldcoinsserval.png');
const goldwithdimond = require('../../Assets/goldwithdimond.png');

import styles from '../styles';
import style from './styles';

export default function DailyMissionDetails({ navigation }) {
    const { navigate, goBack } = navigation;
    const [selectedIndex, setselectedIndex] = useState(null);
    const [modalShow, setmodalShow] = useState(false);

    let data = [
        // 1
        {
            id: 1,
            percent: '+ 20%',
            img: dimondplus1,
            game: '20 GEM',
            rate: 'HK$23.00',
        },
        // 2
        {
            id: 2,
            percent: '+ 50%',
            img: goldplus1,
            game: '10,000 COIN',
            rate: 'HK$8.00',
        },
        // 3
        {
            id: 3,
            percent: 'Free coin',
            img: goldcoinsserval,
            game: '100 COIN',
            rate: 'get',
        },
        // 4
        {
            id: 4,
            percent: '+ 20%',
            img: dimondplus1,
            game: '100 GEM',
            rate: 'HK$78.00',
        },
        // 5
        {
            id: 5,
            percent: '+ 50%',
            img: goldplus1,
            game: '50,000 COIN',
            rate: 'HK$38.00',
        },
        // 6
        {
            id: 6,
            percent: 'Free coin',
            img: goldwithdimond,
            game: '500 COIN + 20 GEM',
            rate: 'Day 5',
        },
        // 7
        {
            id: 7,
            percent: '+ 20%',
            img: dimondplus1,
            rate: 'HK$788.00',
            game: '100 GEM',
        },
        // 8
        {
            id: 8,
            percent: '+ 50%',
            img: goldplus1,
            game: '100,000 COIN',
            rate: 'HK$788.00',
        },
        // 9
        {
            id: 9,
            percent: 'Coming soon',
            img: goldplus1,
            game: '100,000 COIN',
            rate: 'HK$788.00',
        },
    ]

    return (
        <ImgBg>
            {
                modalShow &&
                <View style={{ position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1 }} >
                    <Img
                        local={true}
                        style={{
                            height: scale(110, 20),
                            width: scale(190, 80),
                        }}
                        src={require('./../../Assets/logo.png')}
                        resizeMode={'contain'}
                    />
                    <Text style={[style.userName]}>THANK YOU</Text>
                    <View
                        style={[styles.alignCenter, styles.justifyCenter, styles.directionRow, styles.margin5Percent]}>
                        <ButtonCustom
                            title="OKAY"
                            onPress={() => { setmodalShow(false); navigate('Home'); }}
                        />
                    </View>
                </View>
            }
            <KeyboardAwareScrollView
                style={styles.w_100}
                showsVerticalScrollIndicator={false}
            >
                <HeaderCustom showLogo={true} back={true} goBack={goBack} />

                <View style={style.container}>
                    <View style={style.userProfile}>

                        <Img
                            local={true}
                            style={{ height: 108, width: 108, bottom: 7 }}
                            resizeMode="contain"
                            src={notAvailableUserIcon}
                        />

                    </View>
                    <View style={{ flex: 2, marginVertical: 10, left: '-7%' }}>
                        <View style={{ flex: 1.5, }}>
                            <View style={{ flex: 0.6, }}>
                                <Text style={style.uidText}>UID: 223323</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text style={[style.userName]}>NAME8FONT 12</Text>
                            </View>
                        </View>

                        <View style={{ flex: 1.5, flexDirection: 'row', }}>
                            <View style={{ flex: 0.5, flexDirection: 'row', }}>
                                <View style={{ flex: 1.5, flexDirection: 'row' }}>
                                    <Img
                                        local={true}
                                        style={{ height: 30, width: 30, }}
                                        resizeMode="contain"
                                        src={roundDimond}
                                    />
                                    <Text style={style.gameDetails}>1,526</Text>
                                    <Img
                                        local={true}
                                        style={{ height: 15, width: 15, top: 3.5, marginLeft: 5 }}
                                        resizeMode="contain"
                                        src={plusBox}
                                    />
                                </View>
                            </View>

                            <View style={{ flex: 0.5, flexDirection: 'row', }}>
                                <View style={{ flex: 1.5, flexDirection: 'row' }}>
                                    <Img
                                        local={true}
                                        style={{ height: 30, width: 30, }}
                                        resizeMode="contain"
                                        src={goldCoin}
                                    />
                                    <Text style={style.gameDetails}>1,526</Text>
                                    <Img
                                        local={true}
                                        style={{ height: 15, width: 15, top: 3.5, marginLeft: 5 }}
                                        resizeMode="contain"
                                        src={plusBox}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                <Img
                    local={true}
                    style={{ width: '100%', height: 130, }}
                    src={require('../../Assets/add2blk.png')}
                    resizeMode={'contain'}
                />

                <View style={style.gameDataContainer}>

                    <FlatList
                        data={data}
                        numColumns={3}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={{ width: 120, height: 120, borderRadius: 7, borderWidth: item.id === selectedIndex ? 2 : null, borderColor: item.id === selectedIndex ? '#FF4E00' : null, margin: 5, overflow: 'hidden', backgroundColor: '#0C1D34', }}
                                    onPress={() => { setselectedIndex(item.id) }}
                                >
                                    {
                                        item.id !== selectedIndex &&
                                        <View style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }} />
                                    }
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={style.uidText}>{item.percent}</Text>
                                        <Img
                                            local={true}
                                            style={{ height: 30, width: 30, }}
                                            resizeMode="contain"
                                            src={item.img}
                                        />
                                        <Text style={[style.uidText, { textAlign: 'center' }]}>{item.game}</Text>
                                    </View>
                                    <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF4E00' }}>
                                        <Text style={style.uidText}>{item.rate}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />

                    {
                        selectedIndex != null &&
                        <View
                            style={[styles.alignCenter, styles.justifyCenter, styles.directionRow, styles.margin2Percent]}>
                            <ButtonCustom
                                title="Submit"
                                onPress={() => { setmodalShow(true) }}
                            />
                        </View>
                    }

                    <Text style={[style.uidText, styles.margin2Percent, { fontSize: 10, marginBottom: 20 }]}>Copyright© 2021 Atalon Ventures (International) Limited All Rights Reserved.</Text>

                </View>

            </KeyboardAwareScrollView>

        </ImgBg >
    );
}
