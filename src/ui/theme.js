import {Dimensions, Platform} from 'react-native';
import 'styled-components';


const Theme = () => {

  function name() {
    return 'Faraz'
  }
  return (
    null
  );
}

export default Theme;

const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: '#33907C',
  darkGrey50: '#4F4F4F',
  darkGrey80: '#333A42',
  lightGrey: '#D8D8D8',
  background: '#F6F9FF',
};

const sizes = {
  buttonHeight: 48,
  textInputHeight: 44,
  smallButtonHeight: 26,
  borderRadius: 24,
};

const spacesFrom1 = Array.from({length: 64}, (_, i) => i + 1);
const spaces = [0.5, ...spacesFrom1];
const spacesMultiplier = spaces.map(space => space * 4);

const fontWeights = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

const fontSize = {
  buttonText_18: 18,
  largeTitle_32: 32,
  mediumTitle_24: 24,
  xmediumTitle_22: 22,
  smallTitle_20: 20,
  largeText_26: 26,
  xMediumText_23: 23,
  mediumText_20: 20,
  normalText_18: 18,
  xnormalText_17: 17,
  smallText_16: 16,
  xsmallText_12: 12,
  xxsmallText_14: 14,
  xxxsmallText_11: 11,
};

const paddings = {
  top: spacesMultiplier[5],
  horizontal: spacesMultiplier[5],
};

const X_WIDTH = 375;
const X_HEIGHT = 812;
const SE_HEIGHT = 667;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const XII_WIDTH = 390;
const XII_HEIGHT = 844;
const XIII_WIDTH = 428;
const XIII_HEIGHT = 926;

const {height, width} = Dimensions.get('window');

const barHeight = () => {
  if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    if (width === X_WIDTH && height === X_HEIGHT) return 40;
    if (width === X_WIDTH && height === SE_HEIGHT) return 17;
    if (width === XSMAX_WIDTH && height === XSMAX_HEIGHT) return 41;
    if (width === XII_WIDTH && height === XII_HEIGHT) return 44;
    if (width === XIII_WIDTH && height === XIII_HEIGHT) return 44;
    return 20;
  }
  return 0;
};

const StatusBarHeight = Platform.select({
  ios: barHeight(),
  android: 0,
  default: 0,
});

const dimensions = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  statusBar: StatusBarHeight,
  bottomTabs: {
    height: 80,
    paddingBottom: spaces[5],
  },
  headerHeight: Platform.OS === 'ios' ? 64 : 50,
  artworkSummary: 140,
};

const animations = {
  bottomTabBar: {
    duration: 500,
  },
  discoverOverlay: {
    duration: 500,
  },
  discoverSwipe: {
    duration: 500,
  },
};

export const theme = {
  fontFamilies: {
    heading: 'Montserrat-Bold',
    text: 'Montserrat-Regular',
    smallHeading: 'Montserrat-SemiBold',
    largeText: 'Montserrat-Medium',
  },
  colors: {
    text: colors.black,
    buttonBorders: colors.primery100,
    background: colors.white,
    error: colors.red100,
    ...colors,
  },
  space: spacesMultiplier,
  fontWeights,
  paddings,
  dimensions,
  animations,
  fontSize,
  sizes,
};
