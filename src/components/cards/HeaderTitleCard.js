import React from 'react'
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../ui';
const HeaderTitleCard = (props) => {
     return (
       <HeaderContainer>
         <HeaderTitleView>
           <TouchableOpacity onPress={props.onPress}>
             <Ionicons name="arrow-back" size={24} color="white" />
           </TouchableOpacity>
           <HeaderTitle>{props.title}</HeaderTitle>
         </HeaderTitleView>
       </HeaderContainer>
     );
}

export default HeaderTitleCard;

const HeaderTitleView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  font-size: ${theme.fontSize.mediumTitle_24};
  font-family: ${theme.fontFamilies.heading};
  color: ${theme.colors.white};
  align-self: center;
  width: 100%;
  text-align: center;
  padding-right : 12%
`;

const HeaderContainer = styled.View`
  background-color: ${theme.colors.primary};
  height: 70px;
  padding: 10px;
  padding-top: 20px;
  width: 100%;
`;