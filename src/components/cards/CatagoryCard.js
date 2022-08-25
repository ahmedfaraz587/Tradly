import React from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CardBackgroundImage = styled.ImageBackground`
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: ${wp('24.9%')};
  background-color: ${theme.colors.white};
  margin-right: 0.4px;
  margin-bottom: 0.4px;
`;
const Text = styled.Text`
  font-size: ${theme.fontSize.xxxsmallText_11};
  color: ${theme.colors.white};
  font-family: ${theme.fontFamilies.smallHeading};
`;

const CatagoryCard = props => (
  <CardBackgroundImage source={props.image}>
    <Text>{props.title}</Text>
  </CardBackgroundImage>
);

export default CatagoryCard;
