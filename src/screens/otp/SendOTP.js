import React, {useState} from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInputOutline, SimpleButton} from '../../components';

const Container = styled.View({
  flex: 1,
  backgroundColor: theme.colors.primary,
  padding: 10,
});
const CenterContainer = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItem: 'center',
});

const SocialLoginButton = styled.TouchableOpacity`
  margin-top: 50;
  margin-bottom: 10;
`;

const Heading = styled.Text({
  fontFamily: theme.fontFamilies.largeText,
  fontSize: theme.fontSize.mediumTitle_24,
  textAlign: 'center',
  color: theme.colors.white,
  marginBottom: 40,
});

const NormalText = styled.Text`
  font-size: ${theme.fontSize.smallText_16};
  color: ${theme.colors.white};
  font-family: ${theme.fontFamilies.text};
  text-align: center;
  margin-bottom: 20;
`;

const LoginSocialNetwork = styled.Text`
  font-size: ${theme.fontSize.normalText_18};
  color: ${theme.colors.white};
  font-family: ${theme.fontFamilies.text};
  text-align: center;
`;

const SendOTP = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
        <Ionicons name="arrow-back" size={30} color={theme.colors.white} />
      </TouchableOpacity>
      <CenterContainer>
        <Heading>Verify your phone number</Heading>
        <NormalText>
          We have sent you an SMS with a code to enter number
        </NormalText>
        <TextInputOutline
          onChangeText={e => setPhoneNumber(e)}
          placeholder="Enter phone number"
          value={phoneNumber}
        />
        <SocialLoginButton>
          <LoginSocialNetwork>Or login with Social network</LoginSocialNetwork>
        </SocialLoginButton>

        <SimpleButton
          text="Next"
          buttonColor={theme.colors.white}
          textColor={theme.colors.primary}
          onPress={() => navigation.navigate('OTPVerification')}
        />
      </CenterContainer>
    </Container>
  );
};

export default SendOTP;
