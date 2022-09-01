import React from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';

const IconButton = props => {
  return (
    <ButtonView>
      <Icon source={props.icon} />
      <ButtonTitle>{props.buttonTitle}</ButtonTitle>
    </ButtonView>
  );
};

export default IconButton;

const ButtonView = styled.TouchableOpacity`
  height: 35px;
  border-width: 1px;
  border-color: ${theme.colors.white};
  border-radius: 16px;
  background-color: ${theme.colors.primary};
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
`;

const Icon = styled.Image`
  width: 20;
  height: 20;
  margin-right: 10px;
`;
const ButtonTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.largeText};
`;
