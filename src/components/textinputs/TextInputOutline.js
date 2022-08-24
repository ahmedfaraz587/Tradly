import React from 'react';
import {theme} from '../../ui/theme';
import styled from 'styled-components';

const TextInput = styled.TextInput({
  backgroundColor: theme.colors.primary,
  borderRadius: theme.sizes.borderRadius,
  borderWidth: 2,
  borderColor: theme.colors.white,
  paddingLeft: 15,
  paddingRight: 15,
  color: theme.colors.white,
  fontSize: theme.fontSize.buttonText,
  fontFamily: theme.fontFamilies.text,
});

const TextInputOutline = props => {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={theme.colors.white}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      value={props.value}
    />
  );
};

export default TextInputOutline;
