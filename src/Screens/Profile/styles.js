import {Dimensions, StyleSheet} from 'react-native';
import {scale} from '../../Components/scaling';
import {Colors} from '../../Styles';
import {family} from '../../Utils';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  profilePicture: {
    width: scale(110),
    height: scale(110),
    borderRadius: scale(110) / 2,
    borderWidth: scale(1),
    borderColor: Colors.Grey,
  },
  flagImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 30,
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
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontSize: 12,
  },
  customText1: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontSize: 10,
    textAlign: 'center',
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
  newSubHeading: {
    color: Colors.White,
    textAlign: 'right',
    width: '100%',
    marginTop: 10,
    marginBottom: 15,
  },
  mainViewGameData: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playerName: {
    color: Colors.White,
    fontFamily: family.Agency_Bold,
    marginLeft: 10,
  },
  playerRating: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    marginLeft: 10,
    fontSize: 22,
  },
  challengeHeading: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    marginLeft: 10,
    fontSize: 14,
  },
  challengeDate: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    marginLeft: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  searchContainer: {
    width: '45%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textWrap: {
    height: 75,
    width: 75,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  mainHeadingSecond: {
    fontFamily: family.Agency_Bold,
    color: Colors.White,
    fontSize: 36,
    textAlign: 'center',
  },
});

export default style;
