import { Dimensions, StyleSheet } from 'react-native';
import { scale } from '../../Components/scaling';
import { Colors } from '../../Styles';
import { family } from '../../Utils';

const { width } = Dimensions.get('window');

const style = StyleSheet.create({

  boxesContainerC1Text: {
    fontSize: 22, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 0.6,
  },

  titleText: {
    fontSize: 28, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 0.6,
  },
  description: {
    fontSize: 18, color: 'white', fontFamily: family.Agency_Bold, letterSpacing: 0.6,
  },

});

export default style;
