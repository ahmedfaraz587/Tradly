import React from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';

const Button = styled.TouchableOpacity(
  props => `
  height: ${theme.sizes.smallButtonHeight};
  background-color: ${props.backgroundColor};
  border-radius: 10px;
  justify-content: center;
`,
);

const ButtonTitle = styled.Text((props)=>`
  color: ${props.textColor};
  font-family: ${theme.fontFamilies.largeText};
  font-size: ${theme.fontSize.xsmallText_12};
  padding-right: 20px;
  padding-left: 20px;
`);
const SmallButton = props => {
  return (
    <Button onPress={props.onPress} backgroundColor={props.backgroundColor}>
      <ButtonTitle textColor={props.textColor}>{props.buttonTitle}</ButtonTitle>
    </Button>
  );
};

export default SmallButton;
