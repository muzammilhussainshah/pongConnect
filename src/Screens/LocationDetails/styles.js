import { Dimensions, StyleSheet } from 'react-native';
import { scale } from '../../Components/scaling';
import { Colors } from '../../Styles';
import { family } from '../../Utils';

const { width } = Dimensions.get('window');

const style = StyleSheet.create({

  boxesContainerC1Text: {
    fontSize: 22, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 0.6, textAlign: 'left', marginTop: 10,
  },
  titleText: {
    fontSize: 34, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 0.6,
  },
  smallText: {
    fontSize: 16, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 0.6,
  },
  gameDataText: {
    fontSize: 16, color: 'white', marginLeft: 10, fontFamily: family.Agency_Bold, letterSpacing: 1, top: 3
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
  textLower: {
    fontSize: 16, color: 'white',  fontFamily: family.Agency_Bold, letterSpacing: 1,
  },

});

export default style;
