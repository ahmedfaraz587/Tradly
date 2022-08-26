import React from 'react';
import {theme} from '../../ui';
import {HeaderTitleCard,SimpleButton} from '../../components';
import styled from 'styled-components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AddAddress = ({navigation}) => {
  return (
    <Container>
      <HeaderTitleCard
        title="Add a new address"
        onPress={() => navigation.goBack()}
      />
      <AddNewAddressContainer>
        <MaterialIcons
          name="my-location"
          size={20}
          color={theme.colors.primary}
        />
        <CurrentLocationText>Use current location</CurrentLocationText>
      </AddNewAddressContainer>
      <MainContainer>
        <Label>Name</Label>
        <Input />
        <Label>Phone</Label>
        <Input />
        <Label>Street address</Label>
        <Input />
        <Label>City</Label>
        <Input />
        <Label>State</Label>
        <Input />
        <Label>Zipcode</Label>
        <Input />
      </MainContainer>
      <ButtonContainer>
        <SimpleButton
          textColor={theme.colors.white}
          buttonColor={theme.colors.primary}
          text="Save"
          onPress={()=>alert('save')}
        />
      </ButtonContainer>
    </Container>
  );
};

export default AddAddress;

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;
const AddNewAddressContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  background-color: ${theme.colors.white};
`;

const CurrentLocationText = styled.Text`
  font-size: ${theme.fontSize.smallText_16};
  font-family: ${theme.fontFamilies.largeText};
  color: ${theme.colors.primary};
  margin-left: 10px;
`;

const Label = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.text};
  color: ${theme.colors.darkGrey50};
  margin-left: 3px;
`;

const MainContainer = styled.View`
  padding: 20px;
`;

const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${theme.colors.lightGrey};
  height: 40px;
  font-family: ${theme.fontFamilies.largeText};
  font-size: ${theme.fontSize.smallText_16};
  margin-bottom: 15px;
`;

const ButtonContainer = styled.View`
  justify-content: center;
  padding: 15px;
  background-color: ${theme.colors.white};
  height: 80px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;