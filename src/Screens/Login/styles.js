import {Dimensions, StyleSheet, Platform} from 'react-native';
import {scale} from '../../Components/scaling';
import {Colors} from '../../Styles/index';

const style = StyleSheet.create({
  labelText: {
    color: Colors.White,
    fontWeight: 'bold',
    fontSize: scale(13),
    marginBottom: 5,
    marginHorizontal: 15,
  },
  customImages: {
    height: 40,
    width: 40,
  },
  footerText: {
    fontSize: 10,
    letterSpacing: 1,
    marginBottom: '5%',
    lineHeight: 15,
    textTransform: 'uppercase',
    color: Colors.White,
    textAlign: 'center',
  },
  texts: {
    fontWeight: 'bold',
    fontSize: scale(14),
    paddingHorizontal: 10,
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  texts1: {
    fontSize: 14,
    marginTop: 40,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default style;
