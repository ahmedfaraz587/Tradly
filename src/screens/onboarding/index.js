import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import styled from 'styled-components';
import {theme} from '../../ui';
import {appImages} from '../../utilities/assets';

const Image = styled.Image({
  width: 250,
  height: 250,
});

const OnBoarding = ({navigation}) => {
  const [buttonTitle, setButtonTitle] = React.useState('Next');

  return (
    <Onboarding
      titleStyles={{
        fontFamily: theme.fontFamilies.largeText,
        color: theme.colors.primary,
        fontSize: theme.fontSize.mediumText,
        paddingLeft: 10,
        paddingRight: 10,
      }}
      showSkip={false}
      onDone={() => navigation.navigate('Auth')}
      // NextButtonComponent={() => (
      //   <SimpleButton text={buttonTitle} buttonColor={theme.colors.primary} />
      // )}

      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={appImages.ob1} resizeMode="contain" />,
          title: 'Donate, Invest & Support infrastructure projects',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={appImages.ob2} resizeMode="contain" />,
          title: 'Connecting NGOs, Social Enterprises with Communities',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={appImages.ob3} resizeMode="contain" />,
          title: 'Empowering Artisans, Farmers & Micro Business',
        },
      ]}
    />
  );
};

export default OnBoarding;
