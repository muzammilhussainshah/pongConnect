import {Dimensions, StyleSheet, Platform} from 'react-native';
import {scale} from '../../Components/scaling';
import {Colors} from '../../Styles/index';

const style = StyleSheet.create({
  profilePicture: {
    height: 160,
    width: 160,
    borderRadius: 80,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Colors.Grey,
  },
  labelText: {
    color: Colors.White,
    fontWeight: 'bold',
    fontSize: scale(13),
    marginBottom: 5,
    marginHorizontal: 15,
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
    color: Colors.White,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '50%',
    textAlign: 'center',
    fontSize: 13,
  },
});

export default style;
