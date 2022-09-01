import React from 'react';
import {View, Platform} from 'react-native';
import styled from 'styled-components';
import {HeaderTitleCard, SimpleButton} from '../../components';
import {theme} from '../../ui';
import {appImages} from '../../utilities/assets';

const AddCard = ({navigation, route}) => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <HeaderTitleCard title="Add card" onPress={() => navigation.goBack()} />
      <CardImageView>
        <AtmCard source={appImages.atm} />
      </CardImageView>
      <MainContainer>
        <Label>Card Number</Label>
        <Input onChangeText={() => {}} />
        <Label>Name</Label>
        <Input onChangeText={() => {}} />
        <RowContainer>
          <View>
            <Label>Expiry Dates</Label>
            <Input onChangeText={() => {}} />
          </View>
          <View>
            <Label>CVC</Label>
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
          text="Add Credit Card"
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
