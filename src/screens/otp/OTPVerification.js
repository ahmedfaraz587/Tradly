import React, {useState} from 'react';
import styled from 'styled-components';
import {SimpleButton, Spacer} from '../../components';
import {theme} from '../../ui';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { useTranslation } from 'react-i18next';

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

const OTPVerification = ({navigation, route}) => {
  
  const [otp, setOtp] = useState('');
  const {t} = useTranslation()
  // const {confirm} = route.params;

  // async
   function confirmCode() {
    navigation.navigate('BottomNavigation');
    // try {
    //   const con = await confirm.confirm(otp);
    //   if (con) {
    //     navigation.navigate('BottomNavigation');
    //     console.log('OTP Verified');
    //   }
    // } catch (error) {
    //   console.log('Invalid code');
    // }
  }

  return (
    <Container>
      <NormalText>{t('phoneVerification.title')}</NormalText>
      <OTPView>
        <OTPInputView
          pinCount={6}
          codeInputFieldStyle={styles.codeInputFieldStyle}
          onCodeFilled={e => setOtp(e)}
          keyboardType="number-pad"
        />
      </OTPView>
      <Spacer.Column numberOfSpaces={10} />
      <NormalText>{t('phoneVerification.DidntReceiveCode')}</NormalText>
      <TouchableOpacity>
        <NormalText>{t('phoneVerification.Resend')}</NormalText>
      </TouchableOpacity>
      <Spacer.Column numberOfSpaces={10} />
      <SimpleButton
        text={t('phoneVerification.verify')}
        buttonColor={theme.colors.white}
        textColor={theme.colors.primary}
        onPress={confirmCode}
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
