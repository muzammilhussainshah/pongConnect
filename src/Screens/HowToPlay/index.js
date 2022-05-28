import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import HeaderCustom from '../../Components/Header';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
const play1 = require('../../Assets/howtoplay/1.png');
const play2 = require('../../Assets/howtoplay/2.png');
const play3 = require('../../Assets/howtoplay/3.png');
const play4 = require('../../Assets/howtoplay/4.png');
const play5 = require('../../Assets/howtoplay/5.png');
const play6 = require('../../Assets/howtoplay/6.png');
const play7 = require('../../Assets/howtoplay/7.png');
const play8 = require('../../Assets/howtoplay/8.png');
const play9 = require('../../Assets/howtoplay/9.png');
const play10 = require('../../Assets/howtoplay/10.png');
const play11 = require('../../Assets/howtoplay/11.png');
const play12 = require('../../Assets/howtoplay/12.png');
const play13 = require('../../Assets/howtoplay/13.png');
const play14 = require('../../Assets/howtoplay/14.png');
const play15 = require('../../Assets/howtoplay/15.png');


import styles from '../styles';
import style from './styles';

export default function HowToPlay({ navigation }) {
    const { navigate, goBack } = navigation;
    const [search, setsearch] = useState('');

    return (
        <ImgBg>
            <HeaderCustom showLogo={true} back={true} goBack={goBack} />

            <KeyboardAwareScrollView
                contentContainerStyle={[
                    styles.justifySpaceBetween,
                    styles.alignCenter,
                    styles.flexGrow_1,
                ]}
                style={styles.w_100}
                showsVerticalScrollIndicator={false}>

                <View style={{ flex: 1, width: '95%', marginHorizontal: '2.5%', }}>

                    <View style={{ height: 180 }}>
                        <Text style={style.boxesContainerC1Text}>HOW TO PLAY</Text>
                        <Text style={[style.subText,]}>COUNTUP</Text>
                        <ScrollView horizontal={true}>
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, top: '-3%' }}
                                resizeMode="contain"
                                src={play1}
                            />
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, marginLeft: 15, top: '-3%' }}
                                resizeMode="contain"
                                src={play2}
                            />
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, marginLeft: 15, top: '-3%' }}
                                resizeMode="contain"
                                src={play3}
                            />
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, marginLeft: 15, top: '-3%' }}
                                resizeMode="contain"
                                src={play4}
                            />

                        </ScrollView>
                        <Text style={style.smallText}>Game consist of 9 rounds with 3 balls per round The side with the highest points after 9 rounds win.</Text>
                    </View>

                    <View style={{ height: 180, }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={[style.subText, styles.margin2Percent,]}>COMBO OUT</Text>
                            <Text style={[style.smallText, styles.margin2Percent,]}>Player(s) per team: 1-2</Text>
                            <Text style={[style.smallText, styles.margin2Percent,]}>Time limit: 10</Text>
                            <Text style={[style.smallText, styles.margin2Percent,]}>Round: 10</Text>
                        </View>

                        <ScrollView horizontal={true}>
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, top: '-3%' }}
                                resizeMode="contain"
                                src={play5}
                            />
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, marginLeft: 15, top: '-3%' }}
                                resizeMode="contain"
                                src={play6}
                            />
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, marginLeft: 15, top: '-3%' }}
                                resizeMode="contain"
                                src={play7}
                            />
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, marginLeft: 15, top: '-3%' }}
                                resizeMode="contain"
                                src={play8}
                            />
                        </ScrollView>
                        <Text style={style.smallText}>Game consist of 9 rounds with 3 balls per round The side with the highest points after 9 rounds win.</Text>
                    </View>

                    <View style={{ height: 180, }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={[style.subText, styles.margin2Percent,]}>CHALLENGE</Text>
                            <Text style={[style.smallText, styles.margin2Percent,]}>Player(s) per team: 1-2</Text>
                            <Text style={[style.smallText, styles.margin2Percent,]}>Time limit: 10</Text>
                            <Text style={[style.smallText, styles.margin2Percent,]}>Round: 10</Text>
                        </View>

                        <ScrollView horizontal={true}>
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, top: '-3%' }}
                                resizeMode="contain"
                                src={play9}
                            />
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, marginLeft: 15, top: '-3%' }}
                                resizeMode="contain"
                                src={play10}
                            />
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, marginLeft: 15, top: '-3%' }}
                                resizeMode="contain"
                                src={play11}
                            />
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, marginLeft: 15, top: '-3%' }}
                                resizeMode="contain"
                                src={play12}
                            />

                        </ScrollView>
                        <Text style={style.smallText}>Game consist of 9 rounds with 3 balls per round The side with the highest points after 9 rounds win.</Text>
                    </View>

                    <View style={{ height: 180, }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={[style.subText, styles.margin2Percent,]}>TIME ATTACK</Text>
                            <Text style={[style.smallText, styles.margin2Percent,]}>Player(s) per team: 1-2</Text>
                            <Text style={[style.smallText, styles.margin2Percent,]}>Time limit: 10</Text>
                            <Text style={[style.smallText, styles.margin2Percent,]}>Round: 10</Text>
                        </View>

                        <ScrollView horizontal={true}>
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, top: '-3%' }}
                                resizeMode="contain"
                                src={play13}
                            />
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, marginLeft: 15, top: '-3%' }}
                                resizeMode="contain"
                                src={play14}
                            />
                            <Img
                                local={true}
                                style={{ height: 150, width: 150, marginLeft: 15, top: '-3%' }}
                                resizeMode="contain"
                                src={play15}
                            />


                        </ScrollView>
                        <Text style={style.smallText}>Game consist of 9 rounds with 3 balls per round The side with the highest points after 9 rounds win.</Text>
                    </View>

                    <View style={{ height: 130, }}>
                        <Img
                            local={true}
                            style={{ width: '100%', height: 130, }}
                            src={require('../../Assets/add2blk.png')}
                            resizeMode={'contain'}
                        />
                    </View>
                </View>

            </KeyboardAwareScrollView>
        </ImgBg>
    );
}
