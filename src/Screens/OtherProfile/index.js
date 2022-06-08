import React, {
  useState,
  useReducer,
  useEffect
} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import ImgBg from '../../Components/BackgroundImage';
import Img from '../../Components/Img';
import { Colors } from '../../Styles';
import HeaderCustom from '../../Components/Header';
import styles from '../styles';
import style from './styles';

const user = `https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`;
const dummy1 = `https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80`;

const initialState = { name: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'gameStatus':
      return { name: 'gameStatus' };
    case 'gameMode':
      return { name: 'gameMode' };
    default:
      throw new Error();
  }
}

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

const GameStats = ({ callBack }) => {
  return (
     <Animatable.View 
    
    animation="fadeIn" duration={3000}
      style={[
        styles.directionRow,
        styles.alignCenter,
        styles.justifySpaceBetween,
        style.defaultMainView,
        // {backgroundColor:'red'}
      ]}>

      <View style={{ position: 'absolute', zIndex: 0, width: '100%', height: '100%', opacity: 0.8 }}>

        <Img
          local={true}
          style={{ width: '100%', height: '100%', }}
          src={require('../../Assets/12.png')}
          resizeMode={'cover'}
        />
      </View>
      <Img
        local={true}
        style={[{ width: '100%', height: '20%', opacity: 0.5, position: 'absolute', zIndex: 1, top: -45 }]}
        src={require('../../Assets/shadow.png')}
        resizeMode={'cover'}
      />
      {/* <Img
            local={true}
            style={[{width:'100%',height:'100%',opacity:1,position:'absolute',zIndex:1, bottom:0}]}
            src={require('../../Assets/whiteshadow.png')}
            resizeMode={'cover'}
          /> */}
      <View style={[styles.w_25, styles.alignCenter, styles.justifyCenter,]}>

        <Text
          style={[styles.colorWhite, styles.textCenter, style.customText]}>
          {`GAME\nPLAYED`}
        </Text>
        <Text style={style.mainHeading}>693</Text>
      </View>
      <View style={style.secondViewDivision}>
        <Text style={style.subHeading}>WIN RATE</Text>
        <Text style={style.mainHeading}>94%</Text>
        <TouchableOpacity
          style={[style.ballSecond, {
            bottom: 0,





          }]}
          activeOpacity={0.8}
          onPress={callBack}>
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
        <Text style={style.mainHeading}>S</Text>
      </View>
    </Animatable.View>
  )
}
const GameModeDetail = ({ callBack, comboOutDetailDistable }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={comboOutDetailDistable}
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
                onPress={callBack}
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
const GameMode = ({ callBack, gameModeDisable }) => {
  return (
    <Animatable.View 
    
    animation="fadeIn" duration={3000}
    
    style={style.menuContainer}>
    <TouchableOpacity
        activeOpacity={0.9}
        onPress={gameModeDisable}

        style={[{backgroundColor:'red',zIndex:10}]}>

        <Img
          local={true}
          style={[style.ball,{top:40}]}
          src={require('../../Assets/ball.png')}
          resizeMode={'contain'}
        />
        <Img
          local={true}
          style={[style.ball,{opacity:0.4,width:'60%',height:200,top:-40,
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
                backgroundColor: Colors.red,
                borderRadius: 5,
              },
            ]}>
            <Text style={style.flightText}>S</Text>
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
              {
                width: 30,
                height: 30,
                backgroundColor: Colors.red,
                borderRadius: 5,
              },
            ]}>
            <Text style={style.customTextIncreaseBold}>S</Text>
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
            <Text style={style.customTextIncreaseBold}>L</Text>
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
            <Text style={style.customTextIncreaseBold}>L</Text>
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
export default function Login({ navigation }) {
  const { navigate, goBack } = navigation;

  const [comboOutDetailEnabled, setComboOutDetailEnabled] = useState(false);
  const [anim, setanim] = useState('fadeIn')

  const [state, dispatch] = useReducer(reducer, initialState);

  const comboOutDetailToggle = (status, animName) => {
    setanim(animName)
    if (animName == 'fadeOut') setTimeout(() => { setComboOutDetailEnabled(status) }, 1000)
    else setComboOutDetailEnabled(status)
  }
  useEffect(() => { dispatch({ type: 'gameStatus' }) }, [])

  return (
    <ImgBg>
      <HeaderCustom back showLogo={true} goBack={goBack} />
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
          <TouchableOpacity
            activeOpacity={0.8}>
            <Img
              local={false}
              style={style.profilePicture}
              src={user}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
          <View style={[styles.mainContainer, { marginLeft: 20 }]}>
            <Text style={style.customText}>UID: 223232</Text>
            <View style={[styles.directionRow, styles.alignCenter]}>
              <Text style={[style.customText, { fontSize: 24 }]}>KANNA.Y</Text>
              <Img
                local={false}
                style={style.flagImage}
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png'
                }
                resizeMode={'contain'}
              />
            </View>
            <View style={[styles.directionRow, { marginTop: 10 }]}>
              <View>
                <Text style={style.customText}>Rank</Text>
                <View style={styles.directionRow}>
                  <Text style={[style.customText, { fontSize: 24 }]}>1</Text>
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
                      style={style.sortUp}
                    />
                  </View>
                </View>
              </View>
              <View style={{ marginLeft: 30 }}>
                <Text style={style.customText}>VP</Text>
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
                      style={style.sortUp}
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

      {state.name == 'gameStatus' && <GameStats callBack={() => dispatch({ type: 'gameMode' })} />}
      {state.name == ('gameMode') && <GameMode
        callBack={() => { comboOutDetailToggle(true, 'fadeIn') }}
        gameModeDisable={() => {
          comboOutDetailToggle(false, 'fadeOut')
          dispatch({ type: 'gameStatus' })
        }}
      />
      }
      {comboOutDetailEnabled &&
        <Animatable.View
          duration={400}
          animation={anim}
          useNativeDriver={true}
          iterationCount={1}
          style={[styles.comboOutMainContainer,]}
        >
          <GameModeDetail
            comboOutDetailDistable={() => comboOutDetailToggle(false, 'fadeOut')}
            callBack={() => {
              comboOutDetailToggle(false, 'fadeOut')
              dispatch({ type: 'gameStatus' })
            }}
          />
        </Animatable.View>
      }
      <Img
        local={true}
        style={style.adsImageSecond}
        src={require('../../Assets/ad2.png')}
        resizeMode={'contain'}
      />
    </ImgBg>
  );
}

const GameStatus = ({ status }) => {
  const win = status === 'win';
  return (
    <View style={{
      backgroundColor: '#303E50', marginTop: 15, width: '90%', flexDirection: 'row', marginHorizontal: '5%', borderRadius: 7, height: 45, fontFamily: 'AgencyFB-Bold',
    }}>
      <TouchableOpacity
        style={{
          flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 7, backgroundColor: win ? Colors.primary : Colors.Blue, fontFamily: 'AgencyFB-Bold',
        }}
      // onPress={() => navigate('OtherProfile')}
      >
        <Image
          source={{ uri: dummy1 }}
          style={{
            width: 35,
            height: 35,
            resizeMode: 'cover',
            borderRadius: 35 / 2,
          }}
        />
        <Text style={{
          fontSize: 20, marginLeft: 5, color: 'white', fontFamily: 'AgencyFB-Bold', letterSpacing: 1,

        }}>KANNA.Y</Text>
      </TouchableOpacity>
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center', fontFamily: 'AgencyFB-Bold',

      }}>
        <Text style={{
          fontSize: 26, color: 'white', fontFamily: 'AgencyFB-Bold', letterSpacing: 1,

        }}>1:0</Text>
      </View>
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center', fontFamily: 'AgencyFB-Bold',

      }}>
        <Text style={{
          fontSize: 14, color: 'white', fontFamily: 'AgencyFB-Bold', letterSpacing: 1,

        }}>CHALLENGE</Text>
        <Text style={{
          fontSize: 14, color: 'white', fontFamily: 'AgencyFB-Bold', letterSpacing: 1,

        }}>2/11/2022</Text>
      </View>
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center', fontFamily: 'AgencyFB-Bold',

      }}>
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
