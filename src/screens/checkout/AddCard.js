import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Platform} from 'react-native';
import styled from 'styled-components';
import {HeaderTitleCard, SimpleButton} from '../../components';
import {theme} from '../../ui';
import {appImages} from '../../utilities/assets';

const AddCard = ({navigation, route}) => {
  const {t} = useTranslation();
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <HeaderTitleCard
        title={t('addCard.title')}
        onPress={() => navigation.goBack()}
      />
      <CardImageView>
        <AtmCard source={appImages.atm} />
      </CardImageView>
      <MainContainer>
        <Label>{t('addCard.cardNumber')}</Label>
        <Input onChangeText={() => {}} />
        <Label>{t('addCard.name')}</Label>
        <Input onChangeText={() => {}} />
        <RowContainer>
          <View>
            <Label>{t('addCard.expiryDate')}</Label>
            <Input onChangeText={() => {}} />
          </View>
          <View>
            <Label>{t('addCard.cvv')}</Label>
            <Input
              maxLength={3}
              onChangeText={() => {}}
              keyboardType="numeric"
            />
          </View>
        </RowContainer>
      </MainContainer>
      <ButtonView>
        <SimpleButton
          text={t('addCard.addCreditCard')}
          buttonColor={theme.colors.primary}
          textColor={theme.colors.white}
          onPress={() => {
            navigation.goBack();
            //passing props to previous screen
          }}
        />
      </ButtonView>
    </Container>
  );
};

export default AddCard;

const Container = styled.KeyboardAvoidingView({
  flex: 1,
  backgroundColor: theme.colors.background,
});

const CardImageView = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 200,
  paddingLeft: 40,
  paddingRight: 30,
  marginTop: '-10',
});

const AtmCard = styled.Image({
  width: '100%',
  height: 200,
  borderRadius: '10',
});

const Label = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.text};
  color: ${theme.colors.darkGrey50};
  margin-left: 3px;
`;

const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${theme.colors.lightGrey};
  height: 40px;
  font-family: ${theme.fontFamilies.largeText};
  font-size: ${theme.fontSize.smallText_16};
  margin-bottom: 15px;
`;
const MainContainer = styled.View`
  padding: 20px;
  margin-top: 30px;
  flex: 1;
`;
const RowContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});
const ButtonView = styled.View({
  padding: 15,
  backgroundColor: theme.colors.white,
});
