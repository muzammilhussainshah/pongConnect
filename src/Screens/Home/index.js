import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ImgBg from '../../Components/BackgroundImage';
import {Colors} from '../../Styles';
import HeaderCustom from '../../Components/Header';
import styles from '../styles';
import style from './styles';

const {width} = Dimensions.get('window');

const user = `https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80`;

export default function Home({navigation}) {
  const {navigate, toggleDrawer} = navigation;
  const [index, setIndex] = useState(1);

  return (
    <ImgBg>
      <HeaderCustom scan toggleDrawer={toggleDrawer} />
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
            onPress={() => navigate('Profile')}>
            <Image source={{uri: user}} style={style.profilePicture} />
          </TouchableOpacity>
          <View style={[styles.mainContainer, {marginLeft: 20}]}>
            <Text style={style.customText}>UID: 223232</Text>
            <Text style={[style.customText, {fontSize: 24}]}>DEMO USER</Text>
            <View style={[styles.directionRow, {marginTop: 10}]}>
              <View>
                <Text style={style.customText}>Rank</Text>
                <View style={styles.directionRow}>
                  <Text style={[style.customText, {fontSize: 24}]}>23</Text>
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
                <Text style={[style.customText]}>VP</Text>
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
        <Image
          source={require('../../Assets/ad1.png')}
          style={style.adsImage}
        />
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
              onPress={() => setIndex(0)}
            />
            <MenuItem
              title={`Game\nData`}
              icon={require('../../Assets/data.png')}
              onPress={() => setIndex(1)}
            />
            <MenuItem
              title="Award Movie"
              icon={require('../../Assets/movie.png')}
              onPress={() => setIndex(2)}
            />
            <MenuItem
              title="World Ranking"
              icon={require('../../Assets/ranks.png')}
              onPress={() => setIndex(3)}
            />
            <MenuItem
              title="Daily Mission"
              icon={require('../../Assets/mission.png')}
              onPress={() => setIndex(4)}
            />
          </View>
          <MenuData index={index} />
        </View>
      </ScrollView>
      <Image
        source={require('../../Assets/ad2.png')}
        style={style.adsImageSecond}
      />
    </ImgBg>
  );
}

const MenuData = ({index}) => {
  switch (index) {
    case 1:
      return (
        <View style={style.menuContainer}>
          <Image source={require('../../Assets/ball.png')} style={style.ball} />
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
                  width: '40%',
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
                  width: '20%',
                  height: '100%',
                },
              ]}>
              <Text style={style.customTextBold}>FLIGHT</Text>
            </View>
            <View
              style={[
                styles.justifyCenter,
                {
                  width: '40%',
                  height: '100%',
                },
              ]}>
              <Text style={style.customTextBold}>RATE</Text>
            </View>
          </View>
          <View
            style={[
              styles.directionRow,
              styles.bgPrimary,
              {
                width: '100%',
                marginTop: 5,
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
              <Text
                style={{color: Colors.White, fontSize: 18, fontWeight: '700'}}>
                COMBO OUT
              </Text>
            </View>
            <View
              style={[
                styles.justifyCenter,
                styles.alignCenter,
                {
                  width: '20%',
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
                <Text
                  style={{
                    color: Colors.White,
                    fontSize: 20,
                    fontWeight: '700',
                  }}>
                  U
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.justifyCenter,
                {
                  width: '40%',
                  height: '100%',
                },
              ]}>
              <Text
                style={{color: Colors.White, fontSize: 20, fontWeight: '700'}}>
                2
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.directionRow,
              {
                marginTop: 5,
                height: 35,
                width: '100%',
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
              <Text style={[style.customTextIncreaseBold, {fontSize: 18}]}>
                COUNT UP
              </Text>
            </View>
            <View
              style={[
                styles.justifyCenter,
                styles.alignCenter,
                {
                  width: '20%',
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
                {
                  width: '40%',
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
                width: '100%',
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
              <Text style={[style.customTextIncreaseBold, {fontSize: 18}]}>
                TIME ATTACK
              </Text>
            </View>
            <View
              style={[
                styles.justifyCenter,
                styles.alignCenter,
                {
                  width: '20%',
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
                {
                  width: '40%',
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
                width: '100%',
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
              <Text style={[style.customTextIncreaseBold, {fontSize: 18}]}>
                CHALLENGE
              </Text>
            </View>
            <View
              style={[
                styles.justifyCenter,
                styles.alignCenter,
                {
                  width: '20%',
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
                {
                  width: '40%',
                  height: '100%',
                },
              ]}>
              <Text style={style.customTextIncreaseBold}>55</Text>
            </View>
          </View>
        </View>
      );

    default:
      return (
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
            <Text style={style.mainHeading}>173</Text>
          </View>
          <View style={style.secondViewDivision}>
            <Text style={style.subHeading}>WIN RATE</Text>
            <Text style={style.mainHeading}>78%</Text>
            <Image
              source={require('../../Assets/ball.png')}
              style={style.ballSecond}
            />
          </View>
          <View style={[styles.alignCenter, styles.justifyCenter, styles.w_25]}>
            <Text style={style.subHeading}>{`GENERAL\nRANK`}</Text>
            <Text style={style.mainHeading}>A</Text>
          </View>
        </View>
      );
  }
};

const MenuItem = ({title, icon, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.alignCenter,
        {
          width: '18%',
        },
      ]}>
      <Image
        source={icon}
        style={{width: 25, height: 25, tintColor: Colors.White}}
      />
      <Text style={[style.customText, styles.textCenter]}>{title}</Text>
    </TouchableOpacity>
  );
};
