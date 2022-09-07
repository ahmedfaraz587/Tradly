import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import {SimpleButton, TextInputOutline, Spacer} from '../../components';
import {TouchableOpacity} from 'react-native';
import {strings} from '../../../localization';
import {useTranslation} from 'react-i18next';

const Container = styled.View({
  flex: 1,
  backgroundColor: theme.colors.primary,
  alignItem: 'center',
  justifyContent: 'center',
  padding: 20,
});

const SignupRow = styled.View({
  flexDirection: 'row',
  alignItem: 'center',
  justifyContent: 'center',
  marginBottom: 20,
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

const ForgotText = styled.Text`
  font-size: ${theme.fontSize.normalText_18};
  color: ${theme.colors.white};
  font-family: ${theme.fontFamilies.text};
  text-align: center;
`;
const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: 20;
  margin-bottom: 30;
`;

const SmallHeading = styled.Text`
  font-size: ${theme.fontSize.normalText_18};
  font-family: ${theme.fontFamilies.smallHeading};
  text-align: center;
  color: ${theme.colors.white};
`;
const Login = ({navigation}) => {
  const [formData, setformData] = useState({
    // email:'',
    // password:''
  });

  const {t} = useTranslation();

  return (
    <Container>
      <Heading>{t('login.welcome')}</Heading>
      <NormalText>{t('login.loginToAccount')}</NormalText>
      <TextInputOutline
        placeholder={t('login.placeholderEmail')}
        onChangeText={email => setformData({...formData, email: email})}
      />
      <Spacer.Column numberOfSpaces={5} />
      <TextInputOutline
        placeholder={t('login.placeholderPassword')}
        onChangeText={pass => setformData({...formData, password: pass})}
        secureTextEntry={true}
      />
      <Spacer.Column numberOfSpaces={7} />
      <SimpleButton
        text={t('login.login')}
        buttonColor={theme.colors.white}
        textColor={theme.colors.primary}
        onPress={() => navigation.navigate('BottomNavigation')}
      />
      <ForgotPasswordButton>
        <ForgotText>{t('login.forgetPassword')}</ForgotText>
      </ForgotPasswordButton>
      <SignupRow>
        <ForgotText>{t('login.dontHaveAccount')}</ForgotText>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <SmallHeading>{t('login.signup')}</SmallHeading>
        </TouchableOpacity>
      </SignupRow>
    </Container>
  );
};

export default Login;
