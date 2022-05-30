import React, { useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import HeaderCustom from '../../Components/Header';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
import { FlatList } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import TextInput from '../../Components/TextInput';
import ButtonCustom from '../../Components/ButtonCustom';
const silverUdummy = require('../../Assets/silverUdummy.png');
const goldUdummy = require('../../Assets/goldUdummy.png');
const browndUdummy = require('../../Assets/browndUdummy.png');
const worldRanking = require('../../Assets/worldRanking.png');
const KOREASOUTH = require('../../Assets/KOREASOUTH.png');

const filter = require('../../Assets/filter.png');


import styles from '../styles';
import style from './styles';
import { Colors } from '../../Styles';

export default function WorldRanking({ navigation }) {
    const { navigate, goBack } = navigation;
    const [search, setsearch] = useState('');
    let data = [
        { name: 'KANNA.Y', point: '1', type: 'CHALLANGE', date: '02/11/2021', img: goldUdummy, },
        { name: 'SIMSON.L', point: '2', type: 'TIME ATTACK', date: '31/10/2021', img: silverUdummy, },
        { name: 'CHRISTY.C', point: '3', type: 'COUNT UP', date: '27/10/2021', img: browndUdummy, },
    ]

    return (
        <ImgBg>
            <HeaderCustom showLogo={true} back={true} goBack={goBack} />
            <ImageBackground
                source={require('../../Assets/bgworldranking.png')}
                style={style.userProfileBackground}
            >

                <View style={{ margin: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Img
                        local={true}
                        style={{ height: 80, width: 80, }}
                        resizeMode="contain"
                        src={silverUdummy}
                    />
                    <Text style={style.gameDataText}>NAME8FONT</Text>
                    <Text style={style.uidText}>UID: 223323</Text>
                </View>

                <View style={{ margin: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Img
                        local={true}
                        style={{ height: 110, width: 110, }}
                        resizeMode="contain"
                        src={goldUdummy}
                    />
                    <Text style={style.gameDataText}>JOE MEI</Text>
                    <Text style={style.uidText}>UID: 223323</Text>
                </View>

                <View style={{ margin: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Img
                        local={true}
                        style={{ height: 80, width: 80, }}
                        resizeMode="contain"
                        src={browndUdummy}
                    />
                    <Text style={style.gameDataText}>JOE MEI</Text>
                    <Text style={style.uidText}>UID: 223323</Text>
                </View>

            </ImageBackground>

            <View style={{ flexDirection: 'row', width: '95%', marginHorizontal: '2.5%', }}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <Img
                        local={true}
                        style={{ height: 30, width: 30, }}
                        resizeMode="contain"
                        src={worldRanking}
                    />
                    <Text style={[style.gameDataText, { marginLeft: 10 }]}>WORLD RANKING</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 1 }}>
                        <View
                            style={[
                                styles.alignCenter,
                                styles.justifyCenter,
                                styles.directionRow,
                            ]}>
                            <ButtonCustom
                                customWidth='100%'
                                title="FIND YOUR STATS"
                            // onPress={() => {
                            //     navigate('Home');
                            // }}
                            />
                        </View>
                    </View>
                </View>



            </View>

            <View style={{ flexDirection: 'row', width: '95%', marginHorizontal: '2.5%', }}>

                <TouchableOpacity style={{ zIndex: 5, backgroundColor: '#EC6707', marginTop: 10, borderRadius: 7, justifyContent: 'center', alignItems: 'center', height: 35, width: '20%' }}>
                    <Text style={[style.boxesText]}>THE WORLD</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ zIndex: 4, backgroundColor: '#2C3A4C', left: '-8%', borderColor: '#0C1D34', borderWidth: 2, paddingRight: 2.2, marginTop: 10, borderRadius: 7, justifyContent: 'center', alignItems: 'flex-end', height: 35, width: '20%' }}>
                    <Text style={[style.boxesText]}>CHALLENGE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ zIndex: 3, backgroundColor: '#2C3A4C', left: '-28%', borderColor: '#0C1D34', borderWidth: 2, paddingRight: 2.2, marginTop: 10, borderRadius: 7, justifyContent: 'center', alignItems: 'flex-end', height: 35, width: '20%' }}>
                    <Text style={[style.boxesText]}>COUNT UP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ zIndex: 2, backgroundColor: '#2C3A4C', left: '-37%', borderColor: '#0C1D34', borderWidth: 2, paddingRight: 2.2, marginTop: 10, borderRadius: 7, justifyContent: 'center', alignItems: 'flex-end', height: 35, width: '22%' }}>
                    <Text style={[style.boxesText]}>COMBO OUT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ zIndex: 1, backgroundColor: '#2C3A4C', left: '-48%', borderColor: '#0C1D34', borderWidth: 2, paddingRight: 2.2, marginTop: 10, borderRadius: 7, justifyContent: 'center', alignItems: 'flex-end', height: 35, width: '22%' }}>
                    <Text style={[style.boxesText]}>TIME ATTACK</Text>
                </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', width: '90%', marginHorizontal: '5%', marginTop: 10 }}>

                <TouchableOpacity style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                    <Text style={[style.boxesText]}>RANK</Text>
                    <Img
                        local={true}
                        style={{ height: 15, width: 15, marginLeft: 10 }}
                        resizeMode="contain"
                        src={filter}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1.3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={[style.boxesText]}>PLAYER NAME</Text>
                    <Img
                        local={true}
                        style={{ height: 15, width: 15, marginLeft: 10 }}
                        resizeMode="contain"
                        src={filter}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={[style.boxesText, { marginLeft: 15 }]}>REGION</Text>
                    <Img
                        local={true}
                        style={{ height: 15, width: 15, marginLeft: 10 }}
                        resizeMode="contain"
                        src={filter}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1.3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={[style.boxesText]}>VP</Text>
                    <Img
                        local={true}
                        style={{ height: 15, width: 15, marginLeft: 10 }}
                        resizeMode="contain"
                        src={filter}
                    />
                </TouchableOpacity>

            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={style.listingContainer}
                            onPress={() => navigate('OtherProfile')}
                        >

                            <View style={{ flex: 0.5, }}>
                                <View style={style.listingContainerC2}>
                                    <Text style={style.itemPointText}>{item.point}</Text>
                                </View>
                            </View>

                            <View style={{ flex: 1.5, }}>
                                <View style={style.listingContainerC1}>
                                    <Img
                                        local={true}
                                        style={{ height: 40, width: 40, }}
                                        resizeMode="contain"
                                        src={item.img}
                                    />
                                    <Text style={style.itemNameText}>{item.name}</Text>
                                </View>
                            </View>

                            <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', }}>
                                <Img
                                    local={true}
                                    style={{ height: 40, width: 40, }}
                                    resizeMode="contain"
                                    src={KOREASOUTH}
                                />
                            </View>

                            <View style={{ flex: 1.3, justifyContent: 'center', alignItems: 'center', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[style.customText]}>VP</Text>
                                    <Text style={[style.customText, styles.colorPrimary, { fontSize: 24, marginLeft: 10 }]}>
                                        1,624
                                    </Text>
                                    <View style={[styles.justifyCenter, styles.alignCenter, { marginLeft: 10, }]}>
                                        <Text style={[style.customText, { color: Colors.Grey, }]}>
                                            5
                                        </Text>
                                        <Img
                                            local={true}
                                            style={{
                                                height: 10,
                                                width: 10,
                                            }}
                                            resizeMode="contain"
                                            src={require('../../Assets/upaerrow.png')}
                                        />
                                    </View>
                                </View>
                            </View>

                        </TouchableOpacity>
                    )
                }}
            />

        </ImgBg>
    );
}
