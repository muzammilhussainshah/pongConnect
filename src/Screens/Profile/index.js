import React, {useState} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
import {Colors} from '../../Styles';
import HeaderCustom from '../../Components/Header';
import {TextInput} from 'react-native-gesture-handler';
import styles from '../styles';
import style from './styles';

const user = `https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`;
const dummy1 = `https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80`;
export default function Profile({navigation}) {
  const {navigate, goBack} = navigation;
  const [index, setIndex] = useState(1);

  return (
    <ImgBg>
      <HeaderCustom back goBack={goBack} />

      <ScrollView
        bounces={false}
        contentContainerStyle={[
          styles.justifySpaceBetween,
          styles.alignCenter,
          {
            paddingHorizontal: 20,
          },
        ]}
        style={styles.w_100}
        showsVerticalScrollIndicator={false}>
        <View style={styles.directionRow}>
          <Img
            local={false}
            style={style.profilePicture}
            src={user}
            resizeMode={'contain'}
          />
          <View style={[styles.mainContainer, {marginLeft: 20}]}>
            <Text style={style.customText}>UID: 223232</Text>
            <View style={[styles.directionRow, styles.alignCenter]}>
              <Text style={[style.customText, {fontSize: 24}]}>KANNA.Y</Text>
              <Img
                local={false}
                style={style.flagImage}
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png'
                }
                resizeMode={'contain'}
              />
            </View>
            <View style={[styles.directionRow, {marginTop: 10}]}>
              <View>
                <Text style={style.customText}>Total Game</Text>
                <Text
                  style={[style.customText, styles.textCenter, {fontSize: 24}]}>
                  1,829
                </Text>
              </View>
              <View style={{marginLeft: 15}}>
                <Text style={style.customText}>Win Rate</Text>
                <Text
                  style={[style.customText, styles.textCenter, {fontSize: 24}]}>
                  71%
                </Text>
              </View>
              <View style={{marginLeft: 15}}>
                <Text style={style.customText}>STATS</Text>
                <Text
                  style={[style.customText, styles.textCenter, {fontSize: 24}]}>
                  11.9
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.directionRow,
            styles.alignCenter,
            styles.justifySpaceBetween,
            {width: '100%'},
          ]}>
          <View style={[styles.directionRow, styles.alignCenter]}>
            <Image
              source={require('../../Assets/data.png')}
              style={{tintColor: Colors.White}}
            />
            <Text style={[style.customText, {fontSize: 18, marginLeft: 10}]}>
              GAME DATA
            </Text>
          </View>
          <View style={style.searchContainer}>
            <TextInput style={styles.w_100} placeholder="Search" />
          </View>
        </View>

        <View
          style={[
            styles.directionRow,
            styles.justifySpaceBetween,
            {
              marginTop: 15,
              width: '100%',
            },
          ]}>
          <View style={style.textWrap}>
            <Text style={style.customText1}>CHALLENGE</Text>
            <Text style={style.mainHeadingSecond}>22</Text>
          </View>
          <View style={style.textWrap}>
            <Text style={style.customText1}>COUNT UP</Text>
            <Text style={style.mainHeadingSecond}>60</Text>
          </View>
          <View style={style.textWrap}>
            <Text style={style.customText1}>COMBO OUT</Text>
            <Text style={style.mainHeadingSecond}>2</Text>
          </View>
          <View style={style.textWrap}>
            <Text style={style.customText1}>TIME ATTACK</Text>
            <Text style={style.mainHeadingSecond}>45</Text>
          </View>
        </View>

        <Text style={style.newSubHeading}>LATEST GAMES data</Text>
        <GameStatus status={'win'} />
        <GameStatus status={'loss'} />
        <GameStatus status={'win'} />
        <GameStatus status={'loss'} />
        <GameStatus status={'win'} />
        <GameStatus status={'win'} />
        <GameStatus status={'loss'} />
        <GameStatus status={'loss'} />
      </ScrollView>
    </ImgBg>
  );
}

const GameStatus = ({status}) => {
  const win = status === 'win';
  return (
    <View
      style={[styles.alignCenter, styles.directionRow, style.mainViewGameData]}>
      <View
        style={[
          styles.alignCenter,
          styles.justifyCenter,
          styles.directionRow,
          styles.w_40,
          {
            height: '100%',
            backgroundColor: win ? Colors.primary : Colors.Blue,
            borderRadius: 5,
          },
        ]}>
        <Img
          local={false}
          style={{
            width: 35,
            height: 35,
            borderRadius: 35 / 2,
          }}
          src={dummy1}
          resizeMode={'cover'}
        />
        <Text style={style.playerName}>KANNA.Y</Text>
      </View>
      <Text style={style.playerRating}>1:0</Text>
      <View>
        <Text style={style.challengeHeading}>CHALLENGE</Text>
        <Text style={style.challengeDate}>22/11/2022</Text>
      </View>
      <View
        style={[
          styles.mainContainer,
          styles.justifyCenter,
          styles.alignCenter,
        ]}>
        <Image
          source={
            win
              ? require('../../Assets/crown.png')
              : require('../../Assets/l.png')
          }
          style={{
            width: 35,
            height: 35,
            resizeMode: 'contain',
            tintColor: win ? Colors.primary : Colors.White,
          }}
        />
      </View>
    </View>
  );
};
