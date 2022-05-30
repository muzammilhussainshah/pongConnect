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
const userDummy = require('../../Assets/userDummy.png');
const upaerrow = require('../../Assets/upaerrow.png');
const eventCalender = require('../../Assets/material-event.png');
const searchIcon = require('../../Assets/search.png');
const whatsapp = require('../../Assets/whatsapp.png');
const ev1 = require('../../Assets/eveBanner/ev1.png');
const ev2 = require('../../Assets/eveBanner/ev2.png');
const ev3 = require('../../Assets/eveBanner/ev3.png');
const ev4 = require('../../Assets/eveBanner/ev4.png');
const ev5 = require('../../Assets/eveBanner/ev5.png');
const ev6 = require('../../Assets/eveBanner/ev6.png');

import styles from '../styles';
import style from './styles';

export default function Event({ navigation }) {
    const { navigate, goBack } = navigation;
    const [search, setsearch] = useState('');
    let data = [
        {
            title: 'SILICON JELLY',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
            date: '02/11/2021',
            img: ev1,
            backgroundColorOrange: true
        },
        {
            title: 'WASTED',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
            date: '02/11/2021',
            img: ev2,
        },
        {
            title: 'DOUBLE COUNT UP',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
            date: '02/11/2021',
            img: ev3,
        },
        {
            title: 'MASTER LEAGUE S3',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
            date: '02/11/2021',
            img: ev4,
        },
        {
            title: 'PONG LEAGUE S4',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
            date: '02/11/2021',
            img: ev5,
        },
        {
            title: '飲啦! BEER PONG 大賽',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
            date: '02/11/2021',
            img: ev6,
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
                            src={userDummy}
                        />

                    </View>
                    <View style={{ flex: 2, marginVertical: 10, }}>
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
                                <View style={{ flex: 1.5, }}>
                                    <Text style={style.totalGame}>RANK</Text>
                                    <Text style={style.gameDetails}>23</Text>
                                </View>
                                <View style={{ flex: 0.8, alignItems: 'center', }}>
                                    <Text style={[style.totalGame, { marginTop: 30 }]}>20</Text>
                                    <Img
                                        local={true}
                                        style={{ height: 10, width: 10, }}
                                        resizeMode="contain"
                                        src={upaerrow}
                                    />
                                </View>
                            </View>

                            <View style={{ flex: 1.5, paddingLeft: 20, flexDirection: 'row', }}>
                                <View>
                                    <Text style={style.totalGame}>VP</Text>
                                    <Text style={[style.gameDetails, { color: '#EC6707' }]}>1,624</Text>
                                </View>
                                <View style={{ flex: 0.2, alignItems: 'center', }}>
                                    <Text style={[style.totalGame, { marginTop: 30 }]}>20</Text>
                                    <Img
                                        local={true}
                                        style={{ height: 10, width: 10, }}
                                        resizeMode="contain"
                                        src={upaerrow}
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
                                src={eventCalender}
                            />
                            <Text style={style.gameDataText}>UPCOMING EVENT</Text>
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
                </View>

                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={[style.listingContainer, { backgroundColor: item.backgroundColorOrange ? '#EC6707' : '#303E50', padding: 10 }]}
                                onPress={() => navigate('EventDetails')}
                            >
                                <View style={{ flex: 1.5, paddingRight: 5 }}>
                                    <Img
                                        local={true}
                                        style={{ height: "100%", width: '100%', }}
                                        resizeMode="stretch"
                                        src={item.img}
                                    />
                                </View>
                                <View style={{ flex: 1.5, }}>
                                    <Text style={style.uidText}>{item.title}</Text>
                                    <Text style={[style.uidText, { fontSize: 12 }]}>{item.desc}</Text>

                                </View>
                                <View style={{ flex: 0.8, alignItems: 'flex-end', }}>
                                    <Text style={style.uidText}>{item.date}</Text>
                                    <Img
                                        local={true}
                                        style={{ height: "40%", width: '50%', marginTop: 10 }}
                                        resizeMode="contain"
                                        src={whatsapp}
                                    />
                                </View>

                            </TouchableOpacity>
                        )
                    }}
                />


            </KeyboardAwareScrollView>

        </ImgBg >
    );
}
