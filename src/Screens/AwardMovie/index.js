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
import ButtonCustom from '../../Components/ButtonCustom';
const userDummy = require('../../Assets/userDummy.png');
const upaerrow = require('../../Assets/upaerrow.png');
const searchIcon = require('../../Assets/search.png');
const movieIcon = require('../../Assets/movieIcon.png');
const plusBox = require('../../Assets/plusBox.png');
const goldCoin = require('../../Assets/goldCoin.png');
const roundDimond = require('../../Assets/roundDimond.png');
const m1 = require('../../Assets/m1.png');
const m2 = require('../../Assets/m2.png');
const m3 = require('../../Assets/m3.png');

import styles from '../styles';
import style from './styles';

export default function AwardMovie({ navigation }) {
    const { navigate, goBack } = navigation;
    const [search, setsearch] = useState('');


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
                            src={userDummy}
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
                                src={movieIcon}
                            />
                            <Text style={style.gameDataText}>AWARD MOVIE</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    iconRight={searchIcon}
                                    placeholder="SEARCH MOVIE"
                                    placeholderTextHolder={Colors.Grey}
                                    value={search}
                                    change={setsearch}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginHorizontal: '5%' }}>
                    <Text style={style.textLower}>YOUR ITEM LIST</Text>
                    <Text style={style.textLower}>TOTAL: 6</Text>
                </View>

                <View style={{ flexDirection: 'row', height: 180, width: '90%', marginHorizontal: '5%', marginTop: 10, }} >
                    <View style={{ flex: 7, alignItems: 'center', }}>
                        <Img
                            local={true}
                            style={{ height: 150, width: '100%', }}
                            resizeMode="cover"
                            src={m1}
                        />
                        <Text style={[style.textLower, styles.margin1Percent]}>ONE PIECE luffy #02</Text>
                    </View>
                    <View style={{ flex: 4, alignItems: 'center', }}>
                        <View
                            style={[
                                styles.alignCenter,
                                styles.justifyCenter,
                                styles.directionRow,
                                styles.w_50,
                            ]}>
                            <ButtonCustom
                                title="USED"
                            // onPress={() => { navigate('Home') }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', height: 180, width: '90%', marginHorizontal: '5%', marginTop: 10, }} >
                    <View style={{ flex: 7, alignItems: 'center', }}>
                        <Img
                            local={true}
                            style={{ height: 150, width: '100%', }}
                            resizeMode="cover"
                            src={m2}
                        />
                        <Text style={[style.textLower, styles.margin1Percent]}>Kimet­su #06</Text>
                    </View>
                    <View style={{ flex: 4, alignItems: 'center', }}>
                        <View
                            style={[
                                styles.alignCenter,
                                styles.justifyCenter,
                                styles.directionRow,
                                styles.w_50,
                            ]}>

                            <TouchableOpacity style={{ backgroundColor: '#4A4A4A', width: "50%", height: 40, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[style.textLower, { fontSize: 12 }]}>USE THIS THEME</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', height: 180, width: '90%', marginHorizontal: '5%', marginTop: 10, }} >
                    <View style={{ flex: 7, alignItems: 'center', }}>
                        <Img
                            local={true}
                            style={{ height: 150, width: '100%', }}
                            resizeMode="cover"
                            src={m3}
                        />
                        <Text style={[style.textLower, styles.margin1Percent]}>HXH #23</Text>
                    </View>
                    <View style={{ flex: 4, alignItems: 'center', }}>
                        <View
                            style={[
                                styles.alignCenter,
                                styles.justifyCenter,
                                styles.directionRow,
                                styles.w_50,
                            ]}>

                            <TouchableOpacity style={{ backgroundColor: '#4A4A4A', width: "50%", height: 40, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[style.textLower, { fontSize: 12 }]}>USE THIS THEME</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

            </KeyboardAwareScrollView>

        </ImgBg >
    );
}
