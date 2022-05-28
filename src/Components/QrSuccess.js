import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import HeaderCustom from '../Components/Header';
import ImgBg from '../Components/BackgroundImage';
import Img from './Img';
import { scale } from '../Components/scaling';
import ButtonCustom from '../Components/ButtonCustom';

export default function QrSuccess({ navigation }) {
    const { navigate, goBack } = navigation;
    const { width } = Dimensions.get('window');
    const [showBall, setshowBall] = useState(false)

    return (
        <ImgBg>
            <View style={{ flex: 1, width: '95%', marginHorizontal: '2.5%', justifyContent: 'center', alignItems: 'center', }}>
                <Img
                    local={true}
                    style={{
                        height: scale(130, 20),
                        width: scale(200, 80),
                    }}
                    src={require('../Assets/logo.png')}
                    resizeMode={'contain'}
                />
                <Text
                    style={{
                        fontSize: 28,
                        color: 'white',
                        fontFamily: 'AgencyFB-Bold',
                        letterSpacing: 1,
                        top: -20
                    }}
                >
                    PROCESSING
                </Text>
                <Text
                    style={{
                        fontSize: 24,
                        color: 'white',
                        fontFamily: 'AgencyFB-Bold',
                        letterSpacing: 1,
                    }}
                >
                    Waiting for opponent to log in!
                </Text>

                <View
                    style={{ width: 200, marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}
                >
                    {
                        !showBall &&
                        <ButtonCustom
                            title="OKAY"
                            onPress={() => { setshowBall(true) }}
                        />
                    }
                    {
                        showBall &&
                        <ButtonCustom
                            title="OKAY"
                            onPress={() => { navigate('Home'); }}
                        />
                    }

                </View>

                {
                    showBall &&
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            bottom: 8,
                        }}
                        activeOpacity={0.8}
                    >
                        <Img
                            local={true}
                            style={{
                                width: width / 2,
                                height: width / 2 / 1.53,
                                resizeMode: 'contain',

                            }}
                            src={require('../Assets/ball.png')}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                }

            </View>
        </ImgBg>
    );
}
