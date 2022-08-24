import React, {useEffect} from 'react';
import styled from 'styled-components';
import {theme} from '../../ui'
import { appImages } from '../../utilities/assets';

const Container = styled.View({
     flex:1,
     backgroundColor:theme.colors.primary,
     justifyContent:'center',
     alignItems:'center',
})

const Logo = styled.Image({
     width:180,
     height:180,
})


const SplashScreen = ({navigation}) => {

     useEffect(()=>{
          setTimeout(()=>{
               navigation.navigate('OnBoarding')
          },2000)
     },[])
     return (
          <Container>
               <Logo source={appImages.logo} resizeMode='contain' />
          </Container>
     );
}

export default SplashScreen;