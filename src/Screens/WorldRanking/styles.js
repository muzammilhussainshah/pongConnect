import { Dimensions, StyleSheet } from 'react-native';
import { scale } from '../../Components/scaling';
import { Colors } from '../../Styles';
import { family } from '../../Utils';

const { width } = Dimensions.get('window');

const style = StyleSheet.create({
  adsImage: {
    width: '100%',
    height: width / 2.083,
    // marginTop: 20,
  },
  customText: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontSize: 12,
  },
  container: { fontFamily: family.Agency_Bold, flex: 3, flexDirection: 'row' },
  userProfile: {
    flex: 1.3, justifyContent: 'center', alignItems: 'center', fontFamily: family.Agency_Bold,
  },
  userProfileBackground: {
    width: '100%', height: 180, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontFamily: family.Agency_Bold,
  },
  uidText: {
    fontSize: 16, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 1,
  },
  userName: {
    fontSize: 28, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 1,
  },
  totalGame: {
    fontSize: 17, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 0.6, marginTop: 10
  },
  gameDetails: {
    fontSize: 26, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 2,
  },
  gameDataContainer: {
    flex: 3, width: '90%', marginHorizontal: '5%', marginTop: 10, fontFamily: family.Agency_Bold,
  },
  gameDataText: {
    fontSize: 22, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 1, top: 3
  },
  boxesContainer: {
    flex: 1, flexDirection: 'row', justifyContent: 'space-around', fontFamily: family.Agency_Bold,
  },
  boxesContainerC1: {
    height: 70, width: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 12, backgroundColor: '#0C1D34', fontFamily: family.Agency_Bold,
  },
  boxesContainerC1Text: {
    fontSize: 16, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 0.6,
  },
  boxesContainerC2Text: {
    fontSize: 24, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 1,
  },
  listingContainer: {
    backgroundColor: '#303E50', marginTop: 15, width: '90%', flexDirection: 'row', marginHorizontal: '5%', borderRadius: 7, height: 45, fontFamily: family.Agency_Bold,
  },
  listingContainerC1: {
    flex: 2, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', fontFamily: family.Agency_Bold, left: '-3%'
  },
  listingContainerC2: {
    flex: 1, justifyContent: 'center', alignItems: 'center', fontFamily: family.Agency_Bold,
  },
  itemNameText: {
    fontSize: 20, marginLeft: 5, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 1,
  },
  itemPointText: {
    fontSize: 26, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 1,
  },
  itemTypeText: {
    fontSize: 14, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 1,
  },

  boxesText: {
    fontSize: 14, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 1,
  },

});

export default style;
