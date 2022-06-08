import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
import { Colors } from '../../Styles';
import HeaderCustom from '../../Components/Header';
import GameData from '../../Components/gameData';
import styles from '../styles';
import style from './styles';
import { FlatList } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { SliderBox } from "react-native-image-slider-box";

const { width } = Dimensions.get('window');

const user = `https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80`;

export default function Home({ navigation }) {
  const { navigate, toggleDrawer } = navigation;
  const [index, setIndex] = useState(0);
  const [comboOutDetailEnabled, setComboOutDetailEnabled] = useState(false);
  const [anim, setanim] = useState('fadeIn')
  const [fadeOut, setfadeOut] = useState(true)

  const COMBOOUTDATA = [
    { name: 'game', flight: '', rate: 560 },
    { name: 'BALL IN', flight: '', rate: 342 },
    { name: 'CUP SUNK', flight: '', rate: 128 },
    { name: 'AVG CUP SUNK', flight: '', rate: 0.28 },
    { name: 'FIRST BLOOD', flight: '', rate: 52 },
    { name: 'FIRST BLOOD COMBO', flight: '', rate: 23 },
    { name: 'FIRST BLOOD RATE', flight: '', rate: 12 },
    { name: 'BALL IN COMBO', flight: '', rate: 27 },
    { name: 'CHERRY', flight: '', rate: 78 },
    { name: 'DOUBLE CHERRY', flight: '', rate: 22 },
  ]

  const images = [
    require('../../Assets/ad1.png'),          // Local image
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",

  ]


  const comboOutDetailToggle = (status, animName) => {
    setanim(animName)
    if (animName == 'fadeOut') setTimeout(() => { setComboOutDetailEnabled(status) }, 1000)
    else setComboOutDetailEnabled(status)
  }

  // when click on combo out
  const ComboOutRender = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => comboOutDetailToggle(false, 'fadeOut')}
        style={[styles.comboOutMainContainer,]}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.comboOutDetailCOntainer}>

          <FlatList
            data={COMBOOUTDATA}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => comboOutDetailToggle(false, 'fadeOut')}
                  activeOpacity={0.8} style={styles.comboOutListCOntainer}>
                  <View style={styles.comboOutNameContainer}>
                    <Text style={styles.comboOutName}>{item.name}</Text>
                  </View>
                  <View style={styles.comboOutRateContainer}>
                    <Text style={styles.comboOutName}>{item.rate}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
  // when click on combo out


  return (
    <ImgBg>
      <HeaderCustom scan showLogo={true} toggleDrawer={toggleDrawer} navigate={navigate} />
      <ScrollView
        bounces={false}
        contentContainerStyle={[
          styles.alignCenter,
          styles.justifySpaceBetween,
          {
            paddingHorizontal: 20,
          },
        ]}
        style={styles.w_100}
        showsVerticalScrollIndicator={false}>
        <View style={styles.directionRow}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigate('OtherProfile')}>
            <Img
              local={false}
              style={style.profilePicture}
              src={user}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <View style={[styles.mainContainer, { marginLeft: 20 }]}>
            <Text style={style.customText}>UID: 223232</Text>
            <Text style={[style.customText, { fontSize: 24 }]}>DEMO USER</Text>
            <View style={[styles.directionRow, { marginTop: 10 }]}>
              <View>
                <Text style={style.customText}>Rank</Text>
                <View style={styles.directionRow}>
                  <Text style={[style.customText, { fontSize: 24 }]}>23</Text>
                  <View
                    style={[
                      styles.alignCenter,
                      styles.justifyCenter,
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
                      20
                    </Text>
                    <Image
                      source={require('../../Assets/sortUp.png')}
                      style={style.sortUp}
                    />
                  </View>
                </View>
              </View>
              <View style={{ marginLeft: 30 }}>
                <Text style={[style.customText]}>VP</Text>
                <View style={{ flexDirection: 'row' }}>
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
                      styles.alignCenter,
                      styles.justifyCenter,
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
                      style={style.sortUp}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* <Img
          local={true}
          style={style.adsImage}
          src={require('../../Assets/ad1.png')}
          resizeMode={'contain'}
        /> */}
        <View
          style={style.adsImage}
        >
          <SliderBox
            autoplay
            circleLoop

            style={style.adsImage}
            images={images}
            sliderBoxHeight={1}
            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            dotColor="#ffff"
            inactiveDotColor="#90A4AE"
          />

        </View>



        <View style={[styles.mainContainer, styles.w_100]}>
          <View
            style={[
              styles.directionRow,
              styles.w_100,
              styles.alignCenter,
              styles.justifySpaceBetween,
              {
                paddingTop: 10,
              },
            ]}>
            <MenuItem
              title="Upcoming Events"
              icon={require('../../Assets/calendar.png')}
              onPress={() => { setIndex(0), navigate('Event') }}
            />
            <MenuItem
              title={`Game\nData`}
              icon={require('../../Assets/data.png')}
              onPress={() => { setIndex(1), navigate('GameData') }}
            />
            <MenuItem
              title="Award Movie"
              icon={require('../../Assets/movie.png')}
              onPress={() => { setIndex(2), navigate('AwardMovieDetails') }}
            />
            <MenuItem
              title="Thunder Ball NFT"
              icon={require('../../Assets/nft.png')}
              onPress={() => { setIndex(2), navigate('AwardMovieDetails') }}
            />
            <MenuItem
              title="World Ranking"
              icon={require('../../Assets/ranks.png')}
              onPress={() => { setIndex(3), navigate('WorldRanking') }}
            />
            <MenuItem
              title="Daily Mission"
              icon={require('../../Assets/mission.png')}
              onPress={() => { setIndex(4), navigate('DailyMission') }}
            />
          </View>

          {
            index===0 ?
              <MenuData1 index={index} setIndex={setIndex} callBack={() => comboOutDetailToggle(true, 'fadeIn')} />
              :
              <MenuData2 index={index} setIndex={setIndex} callBack={() => comboOutDetailToggle(true, 'fadeIn')} />
          }
        </View>
      </ScrollView>

      {
        comboOutDetailEnabled &&
        <Animatable.View
          duration={400}
          animation={anim}
          useNativeDriver={true}
          iterationCount={1}
          style={[styles.comboOutMainContainer,]}
        >
          <ComboOutRender />
        </Animatable.View>
      }

      <Img
        local={true}
        style={style.adsImageSecond}
        src={require('../../Assets/ad2.png')}
      // resizeMode={''}
      // resizeMode={'stretch'}
      />

    </ImgBg>
  );
}

const MenuData2 = ({ index, setIndex, callBack }) => {
  return (
    <Animatable.View
      animation="fadeIn" duration={3000} style={{marginTop:'5%'}}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setIndex(0)}

        style={[{backgroundColor:'red',zIndex:1}]}>

        <Img
          local={true}
          style={style.ball}
          src={require('../../Assets/ball.png')}
          resizeMode={'contain'}
        />
        <Img
          local={true}
          style={[style.ball,{opacity:0.4,width:'60%',height:200,top:-30,
    transform: [{ rotate: '70deg' }, { scaleX: -1 }],

          }]}
          src={require('../../Assets/lightEffect.png')}
          resizeMode={'contain'}
        />
      </TouchableOpacity>

        <View
          style={[
            styles.directionRow,
            styles.w_100,
            {
              height: 20,
            },
          ]}>
          <View
            style={[
              styles.alignCenter,
              styles.justifyCenter,
              {
                width: '35%',
                height: '100%',
              },
            ]}>
            <Text style={style.customTextBold}>GAME MODE</Text>
          </View>
          <View
            style={[
              styles.alignCenter,
              styles.justifyCenter,
              {
                width: '25%',
                height: '100%',
              },
            ]}>
            <Text style={style.customTextBold}>FLIGHT</Text>
          </View>
          <View
            style={[
              styles.justifyCenter,
              {
                width: '20%',
                height: '100%',
              },
            ]}>
            <Text style={style.customTextBold}>RATE</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={callBack}

          activeOpacity={0.8}
          style={[
            styles.directionRow,
            styles.bgPrimary,
            {
              width: '95%',
              marginTop: 5,
              marginHorizontal: 10,
              height: 35,
              borderRadius: 5,
            },
          ]}>

          <View
            style={[
              styles.justifyCenter,
              {
                width: '40%',
                height: '100%',
                paddingLeft: 20,
              },
            ]}>
            <Text style={style.flightText}>COMBO OUT</Text>
          </View>
          <View
            style={[
              styles.justifyCenter,
              styles.alignCenter,
              {
                width: '25%',
                height: '100%',
              },
            ]}>
            <View
              style={[
                styles.justifyCenter,
                styles.alignCenter,
                {
                  width: 30,
                  height: 30,
                  backgroundColor: Colors.Grey,
                  borderRadius: 5,
                },
              ]}>
              <Text style={style.flightText}>U</Text>
            </View>
          </View>
          <View
            style={[
              styles.justifyCenter,
              styles.alignCenter,
              {
                width: '10%',
                height: '100%',
              },
            ]}>
            <Text style={style.flightText}>2</Text>
          </View>
        </TouchableOpacity>
        <View
          style={[
            styles.directionRow,
            {
              marginTop: 5,
              height: 35,
              width: '95%',
              backgroundColor: Colors.darkBlue,
              marginHorizontal: 10,
              borderRadius: 5,
            },
          ]}>
          <View
            style={[
              styles.justifyCenter,
              {
                width: '40%',
                height: '100%',
                paddingLeft: 20,
              },
            ]}>
            <Text style={[style.customTextIncreaseBold, { fontSize: 18 }]}>
              COUNT UP
            </Text>
          </View>
          <View
            style={[
              styles.justifyCenter,
              styles.alignCenter,
              {
                width: '25%',
                height: '100%',
              },
            ]}>
            <View
              style={[
                styles.justifyCenter,
                styles.alignCenter,
                styles.bgPrimary,
                {
                  width: 30,
                  height: 30,
                  borderRadius: 5,
                },
              ]}>
              <Text style={style.customTextIncreaseBold}>D2</Text>
            </View>
          </View>
          <View
            style={[
              styles.justifyCenter,
              styles.alignCenter,
              {
                width: '10%',
                height: '100%',
              },
            ]}>
            <Text style={style.customTextIncreaseBold}>5</Text>
          </View>
        </View>
        <View
          style={[
            styles.directionRow,
            {
              marginTop: 5,
              height: 35,
              backgroundColor: Colors.darkBlue,
              marginHorizontal: 10,
              width: '95%',
              borderRadius: 5,
            },
          ]}>
          <View
            style={[
              styles.justifyCenter,
              {
                width: '40%',
                height: '100%',
                paddingLeft: 20,
              },
            ]}>
            <Text style={[style.customTextIncreaseBold, { fontSize: 18 }]}>
              TIME ATTACK
            </Text>
          </View>
          <View
            style={[
              styles.justifyCenter,
              styles.alignCenter,
              {
                width: '25%',
                height: '100%',
              },
            ]}>
            <View
              style={[
                styles.justifyCenter,
                styles.alignCenter,
                styles.bgPrimary,
                {
                  width: 30,
                  height: 30,
                  borderRadius: 5,
                },
              ]}>
              <Text style={style.customTextIncreaseBold}>A</Text>
            </View>
          </View>
          <View
            style={[
              styles.justifyCenter,
              styles.alignCenter,
              {
                width: '10%',
                height: '100%',
              },
            ]}>
            <Text style={style.customTextIncreaseBold}>45</Text>
          </View>
        </View>
        <View
          style={[
            styles.directionRow,
            {
              marginTop: 5,
              height: 35,
              backgroundColor: Colors.darkBlue,
              marginHorizontal: 10,
              width: '95%',
              borderRadius: 5,
            },
          ]}>
          <View
            style={[
              styles.justifyCenter,
              {
                width: '40%',
                height: '100%',
                paddingLeft: 20,
              },
            ]}>
            <Text style={[style.customTextIncreaseBold, { fontSize: 18 }]}>
              CHALLENGE
            </Text>
          </View>
          <View
            style={[
              styles.justifyCenter,
              styles.alignCenter,
              {
                width: '25%',
                height: '100%',
              },
            ]}>
            <View
              style={[
                styles.justifyCenter,
                styles.alignCenter,
                styles.bgPrimary,
                {
                  width: 30,
                  height: 30,
                  borderRadius: 5,
                },
              ]}>
              <Text style={style.customTextIncreaseBold}>B1</Text>
            </View>
          </View>
          <View
            style={[
              styles.justifyCenter,
              styles.alignCenter,
              {
                width: '10%',
                height: '100%',
              },
            ]}>
            <Text style={style.customTextIncreaseBold}>55</Text>
          </View>
        </View>
    </Animatable.View>
  )
}


const MenuData1 = ({ index, setIndex, callBack }) => {
  return (
    <Animatable.View
    animation="fadeIn" duration={3000}
      
    style={[
        styles.directionRow,
        styles.alignCenter,
        styles.justifySpaceBetween,
        style.defaultMainView,
      ]}>
      <View style={{ position: 'absolute', zIndex: 0, width: '100%', height: '100%', opacity: 0.8 }}>

        <Img
          local={true}
          style={{ width: '100%', height: '100%', }}
          src={require('../../Assets/12.png')}
          resizeMode={'cover'}
        />
      </View>
      <View style={[styles.w_25, styles.alignCenter, styles.justifyCenter]}>
        <Text
          style={[styles.colorWhite, styles.textCenter, style.customText]}>
          {`GAME\nPLAYED`}
        </Text>
        <Text style={style.mainHeading}>173</Text>
      </View>
      <View style={style.secondViewDivision}>

        <Text style={style.subHeading}>WIN RATE</Text>
        <Text style={style.mainHeading}>78%</Text>

        {/* <Img
              local={true}
              style={style.ballSecond}
              src={require('../../Assets/ball.png')}
              resizeMode={'contain'}
            /> */}

        <TouchableOpacity
          style={[style.ballSecond, { bottom: 0 }]}
          activeOpacity={0.9}
          onPress={() => setIndex(2)}
        >
          <Img
            local={true}
            style={style.ballSecond}
            src={require('../../Assets/ball.png')}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.alignCenter, styles.justifyCenter, styles.w_25]}>
        <Text style={style.subHeading}>{`GENERAL\nRANK`}</Text>
        <Text style={style.mainHeading}>A</Text>
      </View>
    </Animatable.View>
  );
}


const MenuItem = ({ title, icon, onPress = () => { } }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.alignCenter,
        {
          // width: '18%',
        },
      ]}>
      <Image
        source={icon}
        style={{ width: 25, height: 25, tintColor: Colors.White }}
      />
      <Text style={[style.customText, styles.textCenter, { width: 50 }]}>{title}</Text>
    </TouchableOpacity>
  );
};
