import { Dimensions, StyleSheet } from 'react-native';
import { scale } from '../../Components/scaling';
import { Colors } from '../../Styles';
import { family } from '../../Utils';

const { width } = Dimensions.get('window');

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
    // backgroundColor: 'red',
    height: width / 2.083,
    marginTop: 20,
  },
  adsImageSecond: {
    width: '100%',
    backgroundColor: 'red',
    // resizeMode: 'cover',
    height: 130,
    marginBottom: -40,
  },
  customText: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontSize: 12,
  },
  customTextBold: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontSize: 12,
  },
  customTextIncreaseBold: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontSize: 20,
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
    top: 45,

    right: -32,
    transform: [{ rotate: '-90deg' }, { scaleX: -1 }],
    zIndex: 99,
  },
  defaultMainView: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 200,
    width: width,
    marginTop: 20,
  },
  mainHeading: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontSize: 48,
    textAlign: 'center',
  },
  subHeading: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontSize: 10,
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
  sortUp: {
    tintColor: 'green',
    height: 15,
    width: 15,
  },
  flightText: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontSize: 20,
  },
});

export default style;
