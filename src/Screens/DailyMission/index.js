import React, { useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import HeaderCustom from '../../Components/Header';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
import { Colors } from '../../Styles';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import TextInput from '../../Components/TextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
const searchIcon = require('../../Assets/search.png');
const plusBox = require('../../Assets/plusBox.png');
const goldCoin = require('../../Assets/goldCoin.png');
const roundDimond = require('../../Assets/roundDimond.png');
const dailyMissionIcon = require('../../Assets/dailyMissionIcon.png');
const notAvailableUserIcon = require('../../Assets/notAvailableUserIcon.png');

import styles from '../styles';
import style from './styles';

export default function DailyMission({ navigation }) {
    const { navigate, goBack } = navigation;
    const [search, setsearch] = useState('');

    let data = [
        {
            date: '2021-09-09',
            mission: 'Daily login you get 10 Gems',
            point: '+10',
            img: roundDimond,
        },
        {
            date: '2021-09-08',
            mission: 'Play 10 games in 1 day you get 10 Coins',
            point: '+10',
            img: goldCoin,
        },
        {
            date: '2021-09-08',
            mission: 'Daily login you get 10 Gems',
            point: '+10',
            img: roundDimond,
        },
        {
            date: '2021-09-07',
            mission: 'Level up! you get 50 Coins',
            point: '+50',
            img: goldCoin,
        },
        {
            date: '2021-09-07',
            mission: '200 friends you get 10 Coins',
            point: '+100',
            img: goldCoin,
        },


    ]

    return (
        <ImgBg>

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
                <View style={style.gameDataContainer}>
                    <View style={{ flex: 0.8, flexDirection: 'row', }}>
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <Img
                                local={true}
                                style={{ height: 28, width: 28, }}
                                resizeMode="contain"
                                src={dailyMissionIcon}
                            />
                            <Text style={style.gameDataText}>DAILY MISSION</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    iconRight={searchIcon}
                                    placeholder="SEARCH MISSION"
                                    placeholderTextHolder={Colors.Grey}
                                    value={search}
                                    change={setsearch}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ justifyContent: 'space-between', width: '90%', marginTop: 10, marginHorizontal: '5%' }}
                                onPress={() => { navigate('DailyMissionDetails') }}
                            >
                                <View>
                                    <Text style={[style.gameDataText, { textDecorationLine: 'underline' }]}>{item.date}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={[style.gameDataText, { fontSize: 18 }]}>{item.mission}</Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Img
                                            local={true}
                                            style={{ height: 28, width: 28, }}
                                            resizeMode="contain"
                                            src={item.img}
                                        />
                                        <Text style={[style.gameDataText, { textDecorationLine: 'underline' }]}>{item.point}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />


            </KeyboardAwareScrollView>

        </ImgBg >
    );
}
