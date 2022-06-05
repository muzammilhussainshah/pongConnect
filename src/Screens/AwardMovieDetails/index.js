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
const moviePlay = require('../../Assets/moviePlay.png');

const gem = require('../../Assets/gem.png');

const aw1 = require('../../Assets/aw/aw1.png');
const aw2 = require('../../Assets/aw/aw2.png');
const aw3 = require('../../Assets/aw/aw3.png');
const aw4 = require('../../Assets/aw/aw4.png');
const aw5 = require('../../Assets/aw/aw5.png');
const aw6 = require('../../Assets/aw/aw6.png');

import styles from '../styles';

import style from './styles';

export default function AwardMovieDetails({ navigation }) {
    const { navigate, goBack } = navigation;
    const [search, setsearch] = useState('');

    let data = [
        { title: 'x20', img: aw1, icon: gem },
        { title: 'x30', img: aw2, icon: gem },
        { title: 'OUT OF STOCK', img: aw3, icon: gem },
        { title: 'OUT OF STOCK', img: aw4, icon: gem },
        { title: 'x250', img: aw5, icon: gem },
        { title: 'x600', img: aw6, icon: gem },
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

                <Img
                    local={true}
                    style={{ height: 180, width: "100%", }}
                    resizeMode="contain"
                    src={moviePlay}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', }}>
                    <Text style={[style.gameDataText, { fontSize: 14 }]}>YOU USING ONE PIECE luffy #02 - MOVIE FRAME</Text>
                    <Text style={[style.gameDataText, { fontSize: 14, marginRight: 10 }]}>EDIT</Text>
                </View>

                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginHorizontal: '2.5%' }}>
                    <FlatList
                        numColumns={3}
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={{ width: '33.3%', marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => { navigate('AwardMovie') }}
                                >
                                    <Img
                                        local={true}
                                        style={{ height: 90, width: 90, }}
                                        resizeMode="contain"
                                        src={item.img}
                                    />
                                    <View style={{ width: "75%", flexDirection: 'row', height: 30, marginTop: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF4E00' }}>
                                        {
                                            item.title != 'OUT OF STOCK' &&
                                            <>
                                                <Img
                                                    local={true}
                                                    style={{ height: 15, width: 15, }}
                                                    resizeMode="contain"
                                                    src={item.icon}
                                                />
                                                <Text style={{ fontSize: 20, color: 'white', fontFamily: 'AgencyFB-Bold', letterSpacing: 1, fontSize: 14, marginLeft: 10 }}>{item.title}</Text>
                                            </>
                                        }
                                        {
                                            item.title == 'OUT OF STOCK' &&
                                            <Text style={{ fontSize: 20, color: 'white', fontFamily: 'AgencyFB-Bold', letterSpacing: 1, fontSize: 14, }}>{item.title}</Text>
                                        }
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </KeyboardAwareScrollView>

        </ImgBg >
    );
}
