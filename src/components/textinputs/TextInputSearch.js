import React from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TextInputView = styled.View({
  backgroundColor: theme.colors.white,
  borderRadius: theme.sizes.borderRadius,
  paddingLeft: 15,
  paddingRight: 15,
  color: theme.colors.white,
  fontSize: theme.fontSize.buttonText,
  fontFamily: theme.fontFamilies.text,
  height: theme.sizes.textInputHeight,
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 15,
});

const Input = styled.TextInput`
  margin-left: 10px;
  color: ${theme.colors.darkGrey80};
  flex: 1;
  font-family: ${theme.fontFamilies.largeText};
`;

const TextInputSearch = props => {
  return (
    <TextInputView>
      <AntDesign name="search1" size={24} color={theme.colors.primary} />
      <Input
        placeholderTextColor={theme.colors.lightGrey}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
    </TextInputView>
  );
};

export default TextInputSearch;
