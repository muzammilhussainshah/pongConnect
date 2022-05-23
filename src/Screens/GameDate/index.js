import React, { useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import HeaderCustom from '../../Components/Header';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
import { Colors } from '../../Styles';
import { FlatList } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import TextInput from '../../Components/TextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
const frame = require('../../Assets/photoFrame.png');
const userDummy = require('../../Assets/userDummy.png');
const KOREASOUTHFlag = require('../../Assets/KOREASOUTH.png');
const searchIcon = require('../../Assets/search.png');
const logoGame = require('../../Assets/logoGame.png');
const taj = require('../../Assets/taj.png');
const l = require('../../Assets/l.png');
const d1 = require('../../Assets/d1.png');
const d2 = require('../../Assets/d2.png');
const d3 = require('../../Assets/d3.png');
import styles from '../styles';
import style from './styles';

export default function GameData({ navigation }) {
    const { navigate, goBack } = navigation;
    const [search, setsearch] = useState('');
    let data = [
        { name: 'KANNA.Y', point: '1:0', type: 'CHALLANGE', date: '02/11/2021', img: d1, icon: taj },
        { name: 'SIMSON.L', point: '2:1', type: 'TIME ATTACK', date: '31/10/2021', img: d2, icon: l },
        { name: 'CHRISTY.C', point: '0:3', type: 'COUNT UP', date: '27/10/2021', img: d3, icon: taj },
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
                        <ImageBackground
                            source={frame}
                            style={style.userProfileBackground}
                        >
                            <Img
                                local={true}
                                style={{ height: 108, width: 108, bottom: 7 }}
                                resizeMode="contain"
                                src={userDummy}
                            />
                        </ImageBackground>
                    </View>
                    <View style={{ flex: 2, marginVertical: 10, }}>
                        <View style={{ flex: 1.5, }}>
                            <View style={{ flex: 0.6, }}>
                                <Text style={style.uidText}>UID: 223323</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text style={[style.userName]}>NAME8FONT 12</Text>
                                <Img
                                    local={true}
                                    style={{ height: 30, width: 30, marginLeft: 20 }}
                                    resizeMode="contain"
                                    src={KOREASOUTHFlag}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 1.5, flexDirection: 'row', }}>
                            <View>
                                <Text style={style.totalGame}>TOTAL GAME</Text>
                                <Text style={style.gameDetails}>1,021</Text>
                            </View>
                            <View style={{ marginLeft: '5%' }}>
                                <Text style={style.totalGame}>WIN RATE</Text>
                                <Text style={style.gameDetails}>71%</Text>
                            </View>
                            <View style={{ marginLeft: '5%' }}>
                                <Text style={style.totalGame}>STATS</Text>
                                <Text style={style.gameDetails}>11.7</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={style.gameDataContainer}>
                    <View style={{ flex: 0.8, flexDirection: 'row', }}>
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <Img
                                local={true}
                                style={{ height: 30, width: 30, }}
                                resizeMode="contain"
                                src={logoGame}
                            />
                            <Text style={style.gameDataText}>GAME DATA</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    iconRight={searchIcon}
                                    placeholder="SEARCH PLAYER"
                                    placeholderTextHolder={Colors.Grey}
                                    value={search}
                                    change={setsearch}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={style.boxesContainer}>
                        <View style={style.boxesContainerC1}>
                            <Text style={style.boxesContainerC1Text}>CHALLANGE</Text>
                            <Text style={style.boxesContainerC2Text}>22</Text>
                        </View>
                        <View style={style.boxesContainerC1}>
                            <Text style={style.boxesContainerC1Text}>COUNT UP</Text>
                            <Text style={style.boxesContainerC2Text}>60</Text>
                        </View>
                        <View style={style.boxesContainerC1}>
                            <Text style={style.boxesContainerC1Text}>COMBO OUT</Text>
                            <Text style={style.boxesContainerC2Text}>2</Text>
                        </View>
                        <View style={style.boxesContainerC1}>
                            <Text style={style.boxesContainerC1Text}>TIME ATTACK</Text>
                            <Text style={style.boxesContainerC2Text}>45</Text>
                        </View>
                    </View>

                </View>

                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={style.listingContainer}
                                onPress={() => navigate('OtherProfile')}
                            >
                                <View style={style.listingContainerC1}>
                                    <Img
                                        local={true}
                                        style={{ height: 40, width: 40, }}
                                        resizeMode="contain"
                                        src={item.img}
                                    />
                                    <Text style={style.itemNameText}>{item.name}</Text>
                                </View>
                                <View style={style.listingContainerC2}>
                                    <Text style={style.itemPointText}>{item.point}</Text>
                                </View>
                                <View style={style.listingContainerC2}>
                                    <Text style={style.itemTypeText}>{item.type}</Text>
                                    <Text style={style.itemTypeText}>{item.date}</Text>
                                </View>
                                <View style={style.listingContainerC2}>
                                    <Img
                                        local={true}
                                        style={{ height: 30, width: 30, }}
                                        resizeMode="contain"
                                        src={item.icon}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

            </KeyboardAwareScrollView>

        </ImgBg>
    );
}
