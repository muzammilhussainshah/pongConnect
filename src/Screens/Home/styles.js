import {Dimensions, StyleSheet, Platform} from 'react-native';
import {scale} from '../../Components/scaling';
import {Colors} from '../../Styles/index';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  profilePicture: {
    width: scale(110),
    height: scale(110),
    borderRadius: scale(110) / 2,
    borderWidth: scale(1),
    borderColor: Colors.Grey,
  },
  adsImage: {
    width: width,
    resizeMode: 'contain',
    backgroundColor: 'red',
    height: width / 2.083,
    marginTop: 20,
  },
  adsImageSecond: {
    width: width,
    resizeMode: 'contain',
    height: width / 4.444,
    marginBottom: 20,
  },
  customText: {
    color: Colors.White,
    fontSize: 12,
    fontWeight: '600',
  },
  customTextBold: {
    color: Colors.White,
    fontSize: 12,
    fontWeight: '700',
  },
  customTextIncreaseBold: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '700',
  },
  menuContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.Blue,
    width: width,
    marginLeft: -20,
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 210,
    padding: 20,
  },
  ball: {
    width: 200 / 1.2,
    height: 130,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 22,
    right: -32,
    transform: [{rotate: '-90deg'}, {scaleX: -1}],
    zIndex: 99,
  },
  defaultMainView: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 200,
    width: width,
    marginLeft: -20,
    marginTop: 20,
  },
  mainHeading: {
    color: Colors.White,
    fontSize: 48,
    fontWeight: '700',
    textAlign: 'center',
  },
  subHeading: {
    color: Colors.White,
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  secondViewDivision: {
    width: '50%',
    height: '100%',
    marginTop: 15,
  },
  ballSecond: {
    width: width / 2,
    height: width / 2 / 1.53,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 8,
  },
});

export default style;
