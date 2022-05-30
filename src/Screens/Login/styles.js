import {StyleSheet} from 'react-native';
import {scale} from '../../Components/scaling';
import {Colors} from '../../Styles';
import {family} from '../../Utils';

const style = StyleSheet.create({
  labelText: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontWeight: 'bold',
    fontSize: scale(13),
    marginBottom: 5,
    marginHorizontal: 15,
  },
  customImages: {
    height: 50,
    width: 50,
  },
  footerText: {
    fontFamily: family.Agency_Bold,
    fontSize: 10,
    letterSpacing: 1,
    marginBottom: '5%',
    lineHeight: 15,
    textTransform: 'uppercase',
    color: Colors.White,
    textAlign: 'center',
  },
  texts: {
    fontFamily: family.Agency_Bold,
    fontWeight: 'bold',
    fontSize: scale(14),
    paddingHorizontal: 10,
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  texts1: {
    fontFamily: family.Agency_Bold,
    fontSize: 14,
    marginTop: 40,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default style;
