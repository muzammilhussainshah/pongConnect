import React, { useState } from 'react';
import { Text, View } from 'react-native';
import HeaderCustom from '../../Components/Header';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
import TextInput from '../../Components/TextInput';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Colors } from '../../Styles';
import ButtonCustom from '../../Components/ButtonCustom';
import { scale } from '../../Components/scaling';

const location = require('../../Assets/location.png');
const locDetail = require('../../Assets/locDetail.png');

import styles from '../styles';
import style from './styles';

export default function LocationDetails({ navigation }) {
    const { navigate, goBack } = navigation;
    const [loc, setloc] = useState('');

    let data = [
        {
            data: 'PONGConnect Open 2021 start on 14:15 ',
            mission: 'No.1, Trademart Dr, Kowloon Bays',
            button: 'join',
        },
        {
            data: 'COA X PONGConnect start on 23:45 ',
            mission: 'Shop A, LG/F Wah Shin House, 6-10 Shin Hing Street, Central, Hong Kong, Central',
            button: 'selected',
        },
        {
            data: 'Acme By Linx start on 22:00',
            mission: '2/F, Silver Fortune Plaza, 1 Wellington St, Central',
            button: 'join',
        },
        {
            data: 'PONGConnect OFFICIAL PLAYER ',
            mission: '49/F China Online Centre,333 Lockhart Road, Wanchai, Hong Kong',
            button: 'lock',
        },
        {
            data: 'PONGConnect Open 2021 start on 14:15 ',
            mission: 'No.1, Trademart Dr, Kowloon Bay',
            button: 'join',
        },


    ]


    return (
        <ImgBg>
            <HeaderCustom showLogo={true} back={true} goBack={goBack} />
            <View style={{ flex: 1, width: '95%', marginHorizontal: '2.5%', justifyContent: 'center', }}>

                <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '2.5%', alignItems: 'center', }}>
                    <Img
                        local={true}
                        style={{ height: 30, width: 30, top: 2 }}
                        resizeMode="contain"
                        src={location}
                    />
                    <Text style={style.boxesContainerC1Text}>{'  '}LOCATION</Text>
                </View>

                <View style={{ width: '85%', marginHorizontal: '7.5%', justifyContent: 'center', }}>
                    <TextInput
                        placeholder="SEARCH LOC."
                        placeholderTextHolder={Colors.Grey}
                        value={loc}
                        change={setloc}
                    />
                </View>

                <Img
                    local={true}
                    style={{ height: 220, width: '100%', top: 2 }}
                    resizeMode="cover"
                    src={locDetail}
                />

                <View style={{ flex: 1, alignItems: 'center', }}>
                    <View style={{ height: 40, width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", borderBottomColor: '#505050', borderBottomWidth: 0.5, }}>
                        <Text style={{ color: '#505050' }}>Update: 9:52am</Text>
                        <Text style={{ color: '#505050' }}>https://earth.google.com/</Text>
                    </View>
                    <View style={{ height: 20, width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", }}>
                        <Text style={{ color: '#505050' }}>Today 07/08/2021</Text>
                    </View>

                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flexDirection: 'row', width: '100%', height: 55, marginTop: 10, }}
                                // onPress={() => { navigate('DailyMissionDetails') }}
                                >

                                    <View style={{ width: '70%', }}>
                                        <Text style={[style.gameDataText,]}>{item.data}</Text>
                                        <Text style={[style.gameDataText, { fontSize: 12, color: '#505050' }]}>{item.mission}</Text>
                                    </View>

                                    <View style={{ width: '30%', }}>

                                        {
                                            item.button === 'join' &&
                                            <View style={{ width: '200%', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                                                <ButtonCustom title="JOIN NOW 79/138" />
                                            </View>
                                        }

                                        {
                                            item.button === 'selected' &&
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                // onPress={onPress}
                                                style={{
                                                    width: '100%',
                                                    height: 50,
                                                    borderRadius: scale(8),
                                                    alignItems: 'center',
                                                    backgroundColor: '#D8D8D8',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: Colors.White,
                                                        textAlign: 'center',
                                                        textTransform: 'uppercase',
                                                        fontWeight: 'bold',
                                                        fontSize: scale(13),
                                                    }}>
                                                    Selected {'\n'} 16/18
                                                </Text>
                                            </TouchableOpacity>
                                        }

                                        {
                                            item.button === 'lock' &&
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                // onPress={onPress}
                                                style={{
                                                    width: '100%',
                                                    height: 50,
                                                    borderRadius: scale(8),
                                                    alignItems: 'center',
                                                    backgroundColor: '#555555',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: Colors.White,
                                                        textAlign: 'center',
                                                        textTransform: 'uppercase',
                                                        fontWeight: 'bold',
                                                        fontSize: scale(13),
                                                    }}>
                                                    Selected {'\n'} 16/18
                                                </Text>
                                            </TouchableOpacity>
                                        }



                                    </View>

                                </View>
                            )
                        }}
                    />
                </View>



            </View>
        </ImgBg >
    );
}
