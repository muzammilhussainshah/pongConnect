import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import Img from '../../components/Img';
import {Colors} from '../../../Styles';
import {WP, HP, size} from '../../../Utils';
// import {appImages, appIcons} from '../../assets';
import styles from '../../../Screens/styles';

export default function DrawerContent({navigation}) {
  console.log('drawer Navigation');
  const handleNavigate = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={[style.header, styles.justifyCenter, styles.alignCenter]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleNavigate}
          style={[
            styles.margin1Percent,
            styles.justifyCenter,
            styles.alignCenter,
          ]}>
          {/* <Img
            local={true}
            resizeMode={'cover'}
            style={style.profileImage}
            src={
              user_profile_data?.user_image !== null
                ? {uri: image_url + user_profile_data?.user_image}
                : appImages?.profileImageRound
            }
          /> */}
          <Text style={[style.name, styles.margin1Percent]}>HH </Text>
          <Text style={style.email}>HH </Text>
        </TouchableOpacity>
      </View>
      <View style={style.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={style.itemContainer}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}>
            {/* <Img
              local={true}
              resizeMode={'contain'}
              style={{
                width: WP('5%'),
                height: HP('5%'),
              }}
              src={appIcons?.home}
            /> */}
            <Text style={[style.itemText, styles.margin1Percent]}>
              {'\b \b \b'}Home
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 6.5,
    backgroundColor: Colors.primary,
  },
  header: {
    flex: 3.5,
    backgroundColor: Colors.White,
  },
  profileImage: {
    alignSelf: 'center',
    height: 170,
    width: 170,
    borderRadius: 1000,
    borderWidth: 5,
    borderColor: Colors.primary,
  },
  name: {
    fontSize: size.medium,
    fontWeight: '400',
  },
  email: {
    fontSize: size.tiny,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: HP('1.3%'),
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  itemText: {
    fontSize: size.medium,
    color: Colors.White,
    width: WP('60%'),
  },
  icon: {
    width: 22,
    height: 22,
  },
});
