import React from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';

const Button = styled.TouchableOpacity(({buttonColor,opacity}) => ({
  height: theme.sizes.buttonHeight,
  backgroundColor: buttonColor,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.sizes.borderRadius,
  marginTop: 5,
  marginBottom: 5,
  opacity: opacity,
}));

const ButtonText = styled.Text({
  color: props => props.textColor,
  fontSize: theme.fontSize.mediumText,
  fontFamily: theme.fontFamilies.smallHeading,
});

const SimpleButton = props => {
  return (
    <Button
      buttonColor={props.buttonColor}
      onPress={props.onPress}
      disabled={props.disabled} 
      opacity={props.disabled ? 0.5 : 1}>
      <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
    </Button>
  );
};

export default SimpleButton;
