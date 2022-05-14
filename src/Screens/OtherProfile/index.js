import React, {useState} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import ImgBg from '../../Components/BackgroundImage';
import {Colors} from '../../Styles';
import HeaderCustom from '../../Components/Header';
import styles from '../styles';
import style from './styles';

const user = `https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`;
const dummy1 = `https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80`;
export default function Login({navigation}) {
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
          <Image source={{uri: user}} style={style.profilePicture} />
          <View style={[styles.mainContainer, {marginLeft: 20}]}>
            <Text style={style.customText}>UID: 223232</Text>
            <View style={[styles.directionRow, styles.alignCenter]}>
              <Text style={[style.customText, {fontSize: 24}]}>KANNA.Y</Text>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png',
                }}
                style={style.flagImage}
              />
            </View>
            <View style={[styles.directionRow, {marginTop: 10}]}>
              <View>
                <Text style={style.customText}>Rank</Text>
                <View style={styles.directionRow}>
                  <Text style={[style.customText, {fontSize: 24}]}>1</Text>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 5,
                    }}>
                    <Text
                      style={[
                        style.customText,
                        {
                          color: Colors.Grey,
                        },
                      ]}>
                      0
                    </Text>
                    <Image
                      source={require('../../Assets/sortUp.png')}
                      style={{
                        tintColor: 'green',
                        height: 15,
                        width: 15,
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={{marginLeft: 30}}>
                <Text style={style.customText}>VP</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={[
                      style.customText,
                      styles.colorPrimary,
                      {
                        fontSize: 24,
                      },
                    ]}>
                    1,624
                  </Text>
                  <View
                    style={[
                      styles.justifyCenter,
                      styles.alignCenter,
                      {
                        marginLeft: 5,
                      },
                    ]}>
                    <Text
                      style={[
                        style.customText,
                        {
                          color: Colors.Grey,
                        },
                      ]}>
                      5
                    </Text>
                    <Image
                      source={require('../../Assets/sortUp.png')}
                      style={{
                        tintColor: 'green',
                        height: 15,
                        width: 15,
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
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
      </ScrollView>

      <View
        style={[
          styles.directionRow,
          styles.alignCenter,
          styles.justifySpaceBetween,
          style.defaultMainView,
        ]}>
        <View style={[styles.w_25, styles.alignCenter, styles.justifyCenter]}>
          <Text
            style={[
              styles.colorWhite,
              styles.textCenter,
              {
                fontSize: 10,
                fontWeight: '700',
              },
            ]}>
            {`GAME\nPLAYED`}
          </Text>
          <Text style={style.mainHeading}>693</Text>
        </View>
        <View style={style.secondViewDivision}>
          <Text style={style.subHeading}>WIN RATE</Text>
          <Text style={style.mainHeading}>94%</Text>
          <Image
            source={require('../../Assets/ball.png')}
            style={style.ballSecond}
          />
        </View>
        <View style={[styles.alignCenter, styles.justifyCenter, styles.w_25]}>
          <Text style={style.subHeading}>{`GENERAL\nRANK`}</Text>
          <Text style={style.mainHeading}>S</Text>
        </View>
      </View>

      <Image
        source={require('../../Assets/ad2.png')}
        style={style.adsImageSecond}
      />
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
        <Image
          source={{uri: dummy1}}
          style={{
            width: 35,
            height: 35,
            resizeMode: 'cover',
            borderRadius: 35 / 2,
          }}
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
