import { Dimensions, StyleSheet } from 'react-native';
import { scale } from '../../Components/scaling';
import { Colors } from '../../Styles';
import { family } from '../../Utils';

const { width } = Dimensions.get('window');

const style = StyleSheet.create({
  container: { fontFamily: family.Agency_Bold, flex: 3, flexDirection: 'row' },
  userProfile: {
    flex: 1.3, justifyContent: 'center', alignItems: 'center', fontFamily: family.Agency_Bold,
  },
  userProfileBackground: {
    width: 130, height: 130, justifyContent: 'center', alignItems: 'center', fontFamily: family.Agency_Bold,
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
    fontSize: 28, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 2,
  },
  gameDataContainer: {
    flex: 3, width: '90%', marginHorizontal: '5%', marginTop: 10, fontFamily: family.Agency_Bold,
  },
  gameDataText: {
    fontSize: 20, color: 'white', marginLeft: 10, fontFamily: family.Agency_Bold, letterSpacing: 1, top: 3
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
    marginTop: 15, width: '100%', flexDirection: 'row', height: 130, fontFamily: family.Agency_Bold,
  },


});

export default style;
