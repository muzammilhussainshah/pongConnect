import { Platform, PixelRatio, Dimensions } from 'react-native';
import { isTablet } from 'react-native-device-info';
const { width, height } = Dimensions.get("window");
const platform = Platform.OS;  //gives the device platform iOS or Android
const screenSize = { width, height };  //gives the width & height of device
const screenSizeWithPixelRatio = { width: width * PixelRatio.get(), height: height * PixelRatio.get() }; //calculate the width & height based on device pixel ratio
const guidelineBaseWidth = 800; //standard width which will be used as base for calculating the scale.
const guidelineBaseHeight = 680; //standard height which will be used as base for calculating the scale.
export const fontScale = PixelRatio.getFontScale()  //gives font scale based on pixel ratio

export function getPlatform() {
    return platform
}
export function getScreenSize() {
    return screenSize
}
export function getScreenSizeWithPixelRatio() {
    return screenSizeWithPixelRatio
}
export function scale(size, scalingFactor = 10) {
    return isTablet() ? size + scalingFactor : size
}
export function verticalScale(size) {
    return (screenSize.height) / guidelineBaseHeight * size;
}
export function moderateScale(size, factor = 0.5) {
    return size + (scale(size) - size) * factor;
}
