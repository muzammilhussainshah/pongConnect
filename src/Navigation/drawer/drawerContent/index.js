import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Img from '../../../Components/Img';
import { scale } from '../../../Components/scaling';
import HeaderCustom from '../../../Components/Header';
import { Colors } from '../../../Styles';
import { family, HP } from '../../../Utils';
import styles from '../../../Screens/styles';
import Feather from 'react-native-vector-icons/Feather';

const user = `https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80`;

export default function DrawerContent({ navigation }) {
  const { navigatex, goBack, toggleDrawer } = navigation;
  console.log('drawer Navigation');
  const handleNavigate = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={[style.header]}>
        <HeaderCustom
          toggleDrawer={toggleDrawer}
          setting={true}
          isDrawer={true}
        />
        <View style={[styles.justifyCenter, styles.alignCenter]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Profile')}>
            <Img
              local={false}
              style={style.profilePicture}
              src={user}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <View style={{ marginVertical: 25 }}>
            <Text style={style.customText}>UID: 223232</Text>
            <Text style={[style.customText, { fontSize: 24 }]}>DEMO USER</Text>
          </View>
          <View style={[styles.directionRow,{width:'50%',justifyContent:"space-between",alignItems:'center'}]}>
            <View style={{flexDirection:"row"}}>
            <Img
              local={true}
              style={style.icon}
              src={require('../../../Assets/gem.png')}
              resizeMode={'contain'}
            />

            <Text
              style={[style.customText, { fontSize: 22, marginHorizontal: 10 }]}>
              1,526
            </Text>
            <Feather name="plus" size={10}  style={{ color: 'black', backgroundColor: 'white', position: 'absolute',top:3,right:-5, }}
                onPress={() => { this.setState({ search: [""] }) }}
                />
                </View>
                <View style={{flexDirection:"row"}}> 
            <Img
              local={true}
              style={{width:35,height:35}}
              src={require('../../../Assets/coin.png')}
              resizeMode={'contain'}
            />
              <Text
                style={[style.customText, { fontSize: 22, marginHorizontal: 10 }]}>
                65,473
              </Text>
              <Feather name="plus" size={10} style={{ color: 'black', backgroundColor: 'white', position: 'absolute',top:3,right:-5, }}
                onPress={() => { this.setState({ search: [""] }) }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[style.container, styles.justifyCenter, styles.alignCenter]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.directionRow, {
              marginVertical: HP('1.5%'),
            }]}
            onPress={() => {
              navigation.navigate('LocationDetails');
              navigation.closeDrawer();
            }}>
            <Img
              local={true}
              resizeMode={'contain'}
              style={style.icon}
              src={require('../../../Assets/location.png')}
            />
            <Text style={[style.itemText]}>{'      '}LOCATION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.directionRow, {opacity:0.1,
              marginVertical: HP('1.5%'),
            }]}
            onPress={() => {
              navigation.navigate('Coupon');
              navigation.closeDrawer();
            }}>
            <Img
              local={true}
              resizeMode={'contain'}
              style={style.icon}
              src={require('../../../Assets/coupon.png')}
            />
            <Text style={[style.itemText]}>{'      '}COUPON</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.directionRow, {
              marginVertical: HP('1.5%'),
            }]}
            onPress={() => {
              navigation.navigate('Languages');
              navigation.closeDrawer();
            }}>
            <Img
              local={true}
              resizeMode={'contain'}
              style={style.icon}
              src={require('../../../Assets/language.png')}
            />
            <Text style={[style.itemText]}>{'      '}LANGUAGES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.directionRow, {
              marginVertical: HP('1.5%'),
            }]}
            onPress={() => {
              navigation.navigate('Login');
              navigation.closeDrawer();
            }}>
            <Img
              local={true}
              resizeMode={'contain'}
              style={style.icon}
              src={require('../../../Assets/logout.png')}
            />
            <Text style={[style.itemText]}>{'      '}LOGOUT</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 5.5,
    backgroundColor: Colors.secondary,
  },
  header: {
    flex: 5,
    backgroundColor: Colors.secondary,
  },
  profilePicture: {
    width: scale(110),
    height: scale(110),
    borderRadius: scale(110) / 2,
    borderWidth: scale(1),
    borderColor: Colors.Grey,
  },
  icon: {
    width: 30,
    height: 26,
  },
  customText: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontSize: 12,
  },
  itemText: {
    fontFamily: family.Agency_Bold,
    fontSize: scale(20),
    color: Colors.White,
  },
});
