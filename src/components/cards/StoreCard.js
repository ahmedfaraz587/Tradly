import React from 'react'
import styled from 'styled-components'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { theme } from '../../ui'

const Card = styled.View`
background-color: ${theme.colors.white};
width: ${wp(45)};
height: 200px;
border-radius: 10px;
`
const CoverImage = styled.Image`
width: 100%;
background-color: skyblue;
height: 90px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`

const StoreAvatar = styled.Image`
width: 64px;
height: 64px;
border-radius: 32px;
align-self: center;
margin-top: -33px;
`
const StoreName = styled.Text`
margin-top: 10px;
font-family: ${theme.fontFamilies.largeText};
font-size: ${theme.fontSize.xxsmallText_14};
color: ${theme.colors.darkGrey50};
align-self: center;
`
const Button = styled.TouchableOpacity`
height: 28px;
width: 86px;
background-color: ${theme.colors.primary};
align-self: center;
border-radius: 30;
margin-top: 10px;
justify-content: center;
align-items: center;
`
const ButtonText= styled.Text`
color: ${theme.colors.white};
font-size: ${theme.fontSize.xsmallText_12};
font-family: ${theme.fontFamilies.largeText};
`

const StoreCard = (props) => {
     return (
       <Card>
         <CoverImage source={props.coverImage} />
         <StoreAvatar  source={props.avatar}/>
         <StoreName>{props.storeName}</StoreName>
         <Button onPress={props.onPress}>
          <ButtonText>{props.buttonText}</ButtonText>
         </Button>
       </Card>
     );
}

export default StoreCard;