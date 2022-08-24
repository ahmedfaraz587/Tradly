import React, {useState} from 'react';
import styled from 'styled-components';
import {SimpleButton, Spacer} from '../../components';
import {theme} from '../../ui';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet, TouchableOpacity} from 'react-native';

const Container = styled.View({
  flex: 1,
  backgroundColor: theme.colors.primary,
  justifyContent: 'center',
  padding: 15,
});

const OTPView = styled.View({
  height: 50,
  width: '100%',
  padding: 10,
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
  marginBottom: 20,
});

const NormalText = styled.Text`
  font-size: ${theme.fontSize.smallText_16};
  color: ${theme.colors.white};
  font-family: ${theme.fontFamilies.text};
  text-align: center;
  margin-bottom: 10;
`;

const LoginSocialNetwork = styled.Text`
  font-size: ${theme.fontSize.normalText_18};
  color: ${theme.colors.white};
  font-family: ${theme.fontFamilies.text};
  text-align: center;
`;

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  return (
    <Container>
      <Heading>Phone Verification</Heading>
      <NormalText>Enter your OTP code here</NormalText>
      <OTPView>
        <OTPInputView
          pinCount={6}
          codeInputFieldStyle={styles.codeInputFieldStyle}
          onCodeChanged={e => setOtp(e)}
          keyboardType="number-pad"
        />
      </OTPView>
      <Spacer.Column numberOfSpaces={10} />
      <NormalText>Didn't you received any code?</NormalText>
      <TouchableOpacity>
        <NormalText>Resent new code</NormalText>
      </TouchableOpacity>
      <Spacer.Column numberOfSpaces={10} />
      <SimpleButton
        text="Verify"
        buttonColor={theme.colors.white}
        textColor={theme.colors.primary}
      />
    </Container>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({
  codeInputFieldStyle: {
    borderWidth: 0,
    borderBottomWidth: 1.5,
    width: 35,
    fontWeight: theme.fontWeights.bold,
    height: 50,
    fontSize: theme.fontSize.largeText_26,
  },
});
