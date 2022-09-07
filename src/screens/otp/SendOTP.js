import React, {useState} from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import {TouchableOpacity,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInputOutline, SimpleButton} from '../../components';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import auth from '@react-native-firebase/auth';
import { useTranslation } from 'react-i18next';

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
  const [confirm, setConfirm] = useState(null);

  const {t} = useTranslation()

  const handleNext = () => {
    let phoneNum = '+92' + phoneNumber;
    if(phoneNum.length === 13){
      navigation.navigate("OTPVerification");
    // auth()
    //   .signInWithPhoneNumber(phoneNum)
    //   .then(response => {
    //       setConfirm(response);
    //       console.log('response: ',response);
    //     console.log('OTP sent to your phone number');
    //   })
    //   .catch(error => console.log('error:',error))
    //   .finally(() => navigation.navigate('OTPVerification', {confirm :confirm}));
  } else {
    alert('Please enter a valid phone number');
  }
};

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
        <Ionicons name="arrow-back" size={30} color={theme.colors.white} />
      </TouchableOpacity>
      <CenterContainer>
        <Heading>{t('sendOtp.title')}</Heading>
        <NormalText>{t('sendOtp.description')}</NormalText>
        <TextInputOutline
          onChangeText={e => setPhoneNumber(e)}
          placeholder={t('sendOtp.placeholder')}
          value={phoneNumber}
        />
        <SocialLoginButton>
          <LoginSocialNetwork>
            {t('sendOtp.loginWithSocial')}
          </LoginSocialNetwork>
        </SocialLoginButton>

        <SimpleButton
          text={t('sendOtp.next')}
          buttonColor={theme.colors.white}
          textColor={theme.colors.primary}
          onPress={handleNext}
        />
      </CenterContainer>
    </Container>
  );
};

export default SendOTP;