import { StyleSheet } from 'react-native';
import { Colors } from '../Styles/index';
import { WP, HP, size, family } from '../Utils';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexGrow_1: {
    flexGrow: 1,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignSelfStretch: {
    alignSelf: 'stretch',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignBaseline: {
    alignItems: 'baseline',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexNoWrap: {
    flexWrap: 'nowrap',
  },
  w_100: {
    width: WP('100%'),
  },
  w_95: {
    width: WP('95%'),
  },
  w_90: {
    width: WP('90%'),
  },
  w_85: {
    width: WP('85%'),
  },
  w_80: {
    width: WP('80%'),
  },
  w_75: {
    width: WP('80%'),
  },
  w_70: {
    width: WP('70%'),
  },
  w_65: {
    width: WP('65%'),
  },
  w_60: {
    width: WP('60%'),
  },
  w_55: {
    width: WP('55%'),
  },
  w_50: {
    width: WP('50%'),
  },
  w_45: {
    width: WP('45%'),
  },
  w_40: {
    width: WP('40%'),
  },
  w_35: {
    width: WP('35%'),
  },
  w_30: {
    width: WP('30%'),
  },
  w_25: {
    width: WP('25%'),
  },
  w_20: {
    width: WP('20%'),
  },
  w_15: {
    width: WP('15%'),
  },
  w_10: {
    width: WP('10%'),
  },
  w_5: {
    width: WP('5%'),
  },
  directionRow: {
    flexDirection: 'row',
  },
  marginHalfPercent: {
    marginTop: HP('0.5%'),
  },
  margin1Percent: {
    marginTop: HP('1%'),
  },
  marginVerticleHalfPercent: {
    marginVertical: HP('1%'),
  },
  marginVerticle1Percent: {
    marginVertical: HP('1%'),
  },
  marginVerticle1HalfPercent: {
    marginVertical: HP('1.5%'),
  },
  marginVerticle2Percent: {
    marginVertical: HP('2%'),
  },
  marginVerticle3Percent: {
    marginVertical: HP('3%'),
  },
  marginVerticle4Percent: {
    marginVertical: HP('4%'),
  },
  marginVerticle5Percent: {
    marginVertical: HP('5%'),
  },
  marginHorizontalHalfPercent: {
    marginHorizontal: HP('0.5%'),
  },
  marginHorizontal1Percent: {
    marginHorizontal: HP('1%'),
  },
  marginHorizontal2Percent: {
    marginHorizontal: HP('2%'),
  },
  marginHorizontal3Percent: {
    marginHorizontal: HP('3%'),
  },
  marginHorizontal4Percent: {
    marginHorizontal: HP('4%'),
  },
  marginHorizontal5Percent: {
    marginHorizontal: HP('5%'),
  },
  margin2Percent: {
    marginTop: HP('2%'),
  },
  margin3Percent: {
    marginTop: HP('3%'),
  },
  margin4Percent: {
    marginTop: HP('4%'),
  },
  margin5Percent: {
    marginTop: HP('5%'),
  },
  paddingHalfPercent: {
    paddingVertical: HP('0.5%'),
  },
  padding1Percent: {
    paddingVertical: HP('1%'),
  },
  padding2Percent: {
    paddingVertical: HP('2%'),
  },
  padding3Percent: {
    paddingVertical: HP('3%'),
  },
  padding4Percent: {
    paddingVertical: HP('4%'),
  },
  padding5Percent: {
    paddingVertical: HP('5%'),
  },
  paddingHorizontal1Percent: {
    paddingHorizontal: WP('1%'),
  },
  paddingHorizontal2Percent: {
    paddingHorizontal: WP('2%'),
  },
  paddingHorizontal3Percent: {
    paddingHorizontal: WP('3%'),
  },
  paddingHorizontal3HalfPercent: {
    paddingHorizontal: WP('3.5%'),
  },
  paddingHorizontal4Percent: {
    paddingHorizontal: WP('4%'),
  },
  paddingHorizontal5Percent: {
    paddingHorizontal: WP('5%'),
  },
  paddingHorizontal6Percent: {
    paddingHorizontal: WP('6%'),
  },
  paddingHorizontal7Percent: {
    paddingHorizontal: WP('7%'),
  },
  textCenter: {
    textAlign: 'center',
  },
  bgPrimary: {
    backgroundColor: Colors.primary,
  },
  colorPrimary: {
    color: Colors.primary,
  },
  colorBlack: {
    color: Colors.Black,
  },
  colorWhite: {
    color: Colors.White,
  },
  colorGray: {
    color: Colors.Grey,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  seperator: {
    marginVertical: HP('1%'),
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    width: WP('60%'),
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: HP('2%'),
  },
  colorWhite: {
    color: Colors.White,
  },
  colorHardDarkGray: {
    color: Colors.darkGrey,
  },
  bgWhite: {
    backgroundColor: Colors.White,
  },
  font16: {
    fontSize: size.normal,
  },
  positionRelative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  tabBarHeader: { height: 50 },
  indicatorStyle: {
    backgroundColor: Colors.primary,
    height: 2,
  },
  labelStyle: {
    color: Colors.Black,
    textTransform: 'capitalize',
    fontSize: 14,
  },
  tabBarstyle: {
    backgroundColor: Colors.White,
    height: 50,
    marginTop: HP('0.5%'),
  },
  contentcontainerStyle: {
    height: 30,
  },
  indicatorContainerStyle: { marginBottom: 2 },
  tabStyles: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Grey,
  },
  comboOutMainContainer: { position: 'absolute', height: '100%', width: '100%', zIndex: 2, },
  comboOutDetailCOntainer: { position: 'absolute', height: 227, width: 265, bottom: 15, left: 10, backgroundColor: 'rgba(0,0,0,0.9)' },
  comboOutListCOntainer: { flex: 1, height: 21, marginVertical: 0.8, flexDirection: 'row' },
  comboOutNameContainer: { flex: 8, justifyContent: 'center' },
  comboOutRateContainer: { flex: 2, justifyContent: 'center', alignItems: 'center' },
  comboOutName: { color: Colors.White, fontFamily: family.Agency_Bold, textTransform: 'uppercase', marginLeft: 10 }
});

export default styles;
