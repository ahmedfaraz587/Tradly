import React from 'react';
import styled from 'styled-components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {theme} from '../../ui';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.Text`
  font-family: ${theme.fontFamilies.heading};
  font-size: ${theme.fontSize.mediumTitle_24};
  color: ${theme.colors.white};
`;
const HeaderIconsView = styled.View`
  align-items: center;
  flex-direction: row;
`;

const HeaderCard = props => {
  return (
    <Container>
      <Title>{props.text}</Title>
      <HeaderIconsView>
        <TouchableOpacity onPress={props.onFavoritePress}>
          <AntDesign
            name="heart"
            size={24}
            color="white"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onCardPress}>
          <FontAwesome5 name="shopping-cart" size={24} color="white" />
        </TouchableOpacity>
      </HeaderIconsView>
    </Container>
  );
};

export default HeaderCard;
