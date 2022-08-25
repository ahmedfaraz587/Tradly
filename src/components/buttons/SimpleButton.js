import React from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';

const Button = styled.TouchableOpacity(({buttonColor}) => ({
  height: theme.sizes.buttonHeight,
  backgroundColor: buttonColor,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.sizes.borderRadius,
  marginTop: 5,
  marginBottom: 5,
}));

const ButtonText = styled.Text({
  color: props => props.textColor,
  fontSize: theme.fontSize.mediumText,
  fontFamily: theme.fontFamilies.smallHeading,
});

const SimpleButton = props => {
  return (
    <Button buttonColor={props.buttonColor} onPress={props.onPress}>
      <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
    </Button>
  );
};

export default SimpleButton;
