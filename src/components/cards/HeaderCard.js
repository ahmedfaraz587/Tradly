import React, {useContext} from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import modeContext from '../../contexts/modeContext';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.Text`
  font-family: ${theme.fontFamilies.heading};
  font-size: ${theme.fontSize.mediumTitle_24};
  color: ${props => props.color};
`;
const HeaderIconsView = styled.View`
  align-items: center;
  flex-direction: row;
`;

const HeaderCard = props => {
  const {mode} = useContext(modeContext);
  return (
    <Container>
      <Title color={mode.color}>{props.text}</Title>
      <HeaderIconsView>
        <TouchableOpacity onPress={props.onFavoritePress}>
          <AntDesign
            name="heart"
            size={24}
            color={mode.color}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onCartPress}>
          <FontAwesome5 name="shopping-cart" size={24} color={mode.color} />
        </TouchableOpacity>
      </HeaderIconsView>
    </Container>
  );
};

export default HeaderCard;
