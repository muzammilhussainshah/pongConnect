import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import HeaderCustom from '../Components/Header';
import Img from '../Components/Img';
import { RNCamera } from 'react-native-camera';
const scanning = require('../Assets/scanning.png');

const QRScanner = ({ navigation }) => {
    const { navigate, goBack } = navigation;
    const onSuccess = e => {
        navigate('QrSuccess');
        // console.error('An error occured', e)
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        // );
    };

    return (

        <QRCodeScanner
            onRead={() => onSuccess()}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
                <View style={styles.header}>
                    <HeaderCustom back showLogo={true} goBack={goBack} />
                </View>
            }
            bottomContent={
                <View style={styles.buttonTouchable}>
                    <Img
                        local={true}
                        style={{ height: 250, width: '80%', }}
                        resizeMode="stretch"
                        src={scanning}
                    />
                </View>
            }
        />
    );
};

export default QRScanner;

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'white',
        textAlign: 'center',
        // color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 10,
        height: 380,
        width: '100%',
        zIndex: 1,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#050D18',
        // backgroundColor: 'red',

    }
    ,
    header: {
        width: '100%',
        // height: 100,
        zIndex: 1,
        backgroundColor: '#050D18',
    }
});
