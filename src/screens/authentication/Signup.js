import React, {useState} from 'react';
import styled from 'styled-components';
import {theme} from '../../ui/theme';
import {TouchableOpacity} from 'react-native';
import {SimpleButton, TextInputOutline, Spacer} from '../../components';
import { useTranslation } from 'react-i18next';

const Container = styled.View({
  flex: 1,
  backgroundColor: theme.colors.primary,
  alignItem: 'center',
  justifyContent: 'center',
  padding: 20,
});

const SigninRow = styled.View({
  flexDirection: 'row',
  alignItem: 'center',
  justifyContent: 'center',
  marginTop: 30,
});

const Heading = styled.Text({
  fontFamily: theme.fontFamilies.largeText,
  fontSize: theme.fontSize.mediumTitle_24,
  textAlign: 'center',
  color: theme.colors.white,
  marginBottom: 30,
});

const NormalText = styled.Text`
  font-size: ${theme.fontSize.smallText_16};
  color: ${theme.colors.white};
  font-family: ${theme.fontFamilies.text};
  text-align: center;
  margin-bottom: 20;
`;

const HaveAccountText = styled.Text`
  font-size: ${theme.fontSize.normalText_18};
  color: ${theme.colors.white};
  font-family: ${theme.fontFamilies.text};
  text-align: center;
`;

const SmallHeading = styled.Text`
  font-size: ${theme.fontSize.normalText_18};
  font-family: ${theme.fontFamilies.smallHeading};
  text-align: center;
  color: ${theme.colors.white};
`;

const Signup = ({navigation}) => {
  const [formData, setformData] = useState({});
  const {t} = useTranslation()

  return (
    <Container>
      <Heading>{t('signup.welcome')}</Heading>
      <NormalText>{t('signup.signupToAccount')} </NormalText>
      <TextInputOutline
        placeholder={t('signup.placeholderFirstName')}
        onChangeText={e => setformData({...formData, firstName: e})}
      />
      <Spacer.Column numberOfSpaces={5} />
      <TextInputOutline
        placeholder={t('signup.placeholderLastName')}
        onChangeText={e => setformData({...formData, lastName: e})}
      />
      <Spacer.Column numberOfSpaces={5} />
      <TextInputOutline
        placeholder={t('signup.placeholderEmail')}
        onChangeText={email => setformData({...formData, email: email})}
      />
      <Spacer.Column numberOfSpaces={5} />
      <TextInputOutline
        placeholder={t('signup.placeholderPassword')}
        onChangeText={p => setformData({...formData, password: p})}
        secureTextEntry={true}
      />
      <Spacer.Column numberOfSpaces={5} />
      <TextInputOutline
        placeholder={t('signup.placeholderConfirmPassword')}
        onChangeText={p => setformData({...formData, re_password: p})}
        secureTextEntry={true}
      />
      <Spacer.Column numberOfSpaces={6.5} />
      <SimpleButton
        text={t('signup.signup')}
        buttonColor={theme.colors.white}
        textColor={theme.colors.primary}
        onPress={() => navigation.navigate('OTPNav')}
      />
      <SigninRow>
        <HaveAccountText>{t('signup.alreadyHaveAccount')}</HaveAccountText>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <SmallHeading>{t('signup.signin')}</SmallHeading>
        </TouchableOpacity>
      </SigninRow>
    </Container>
  );
};

export default Signup;
