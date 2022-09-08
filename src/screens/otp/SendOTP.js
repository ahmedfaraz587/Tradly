// import com.facebook.FacebookSdk;
// import com.facebook.appevents.AppEventsLogger;
import React, {useState} from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInputOutline, SimpleButton} from '../../components';
import {useTranslation} from 'react-i18next';
import {Spacer} from '../../components';
import FacebookLogo from '../../assets/icons/svgs/Facebook';
import GoogleLogo from '../../assets/icons/svgs/Google';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

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
  margin-bottom: 30;
`;

const LoginSocialNetwork = styled.Text`
  font-size: ${theme.fontSize.normalText_18};
  color: ${theme.colors.white};
  font-family: ${theme.fontFamilies.text};
  text-align: center;
  margin-bottom: 20;
  margin-top: 20;
`;

const LogoContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const SendOTP = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  const {t} = useTranslation();

  const handleNext = () => {
    let phoneNum = '+92' + phoneNumber;
    if (phoneNum.length === 13) {
      navigation.navigate('OTPVerification');
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

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

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
        <Spacer.Column numberOfSpaces={5} />
        <SimpleButton
          text={t('sendOtp.next')}
          buttonColor={theme.colors.white}
          textColor={theme.colors.primary}
          onPress={handleNext}
        />
        <LoginSocialNetwork>{t('sendOtp.loginWithSocial')}</LoginSocialNetwork>
        <LogoContainer>
          <TouchableOpacity
            onPress={() =>
              onFacebookButtonPress().then(res =>
                console.log('facebook response: ', res),
              )
            }>
            <FacebookLogo />
          </TouchableOpacity>
          <Spacer.Row numberOfSpaces={5} />
          <TouchableOpacity
            onPress={() =>
              onGoogleButtonPress()
                .then(response =>
                  console.log('responce is:', response.additionalUserInfo),
                )
            }>
            <GoogleLogo />
          </TouchableOpacity>
        </LogoContainer>
      </CenterContainer>
    </Container>
  );
};

export default SendOTP;
