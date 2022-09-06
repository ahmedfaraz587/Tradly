import React, {useState,useContext, useEffect} from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import {SimpleButton, TextInputOutline, Spacer} from '../../components';
import {Button, TouchableOpacity} from 'react-native';
import {strings} from '../../../localization'
import languageContext  from '../../contexts/languageContext'


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
  marginBottom:20
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

  const {setLan,lan} = useContext(languageContext);

  useEffect(() => {
    console.log('====================================');
    console.log(lan);
    console.log('====================================');
  }, [lan])

  return (
    <Container>
      <Heading>{strings.welcome}</Heading>
      <NormalText>{strings.loginToAccount}</NormalText>
      <TextInputOutline
        placeholder={strings.placeholderEmail}
        onChangeText={email => setformData({...formData, email: email})}
      />
      <Spacer.Column numberOfSpaces={5} />
      <TextInputOutline
        placeholder={strings.placeholderPassword}
        onChangeText={pass => setformData({...formData, password: pass})}
        secureTextEntry={true}
      />
      <Spacer.Column numberOfSpaces={7} />
      <SimpleButton
        text={strings.login}
        buttonColor={theme.colors.white}
        textColor={theme.colors.primary}
        onPress={() => navigation.navigate('BottomNavigation')}
      />
      <ForgotPasswordButton>
        <ForgotText>{strings.forgetPassword}</ForgotText>
      </ForgotPasswordButton>
      <SignupRow>
        <ForgotText>{strings.dontHaveAccount}</ForgotText>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <SmallHeading>{strings.signup}</SmallHeading>
        </TouchableOpacity>
      </SignupRow>
      {lan != 'en-US' ? (
        <Button
          title="change language to english"
          style={{paddingTop: 30}}
          onPress={() => setLan('en-US')}
        />
      ) : (
        <Button
          title="change language to Spanish"
          style={{paddingTop: 30}}
          onPress={() => setLan('es')}
        />
      )}
    </Container>
  );
};

export default Login;
