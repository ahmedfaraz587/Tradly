import React, {useState} from 'react';
import styled from 'styled-components';
import {HeaderTitleCard, SmallButton, SimpleButton} from '../../components';
import {theme} from '../../ui';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RadioButton, Divider} from 'react-native-paper';
import {ScrollView, TouchableOpacity} from 'react-native';

const Payment = ({navigation, route}) => {
  const [checked, setChecked] = useState('Debit/Credit card');
  return (
    <Container>
      <ScrollView>
        <HeaderTitleCard
          title="Payment Option"
          onPress={() => navigation.goBack()}
        />
        <PaymentContainer>
          <CardContainer>
            <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
              <AntDesign name="plus" size={30} color="rgba(0, 0, 0, 0.2)" />
            </TouchableOpacity>
            <CardText>Add payment method</CardText>
          </CardContainer>
        </PaymentContainer>
        <RadioButtonContainer>
          <RadioButton
            value="Debit/Credit card"
            status={checked === 'Debit/Credit card' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Debit/Credit card')}
          />
          <RadioButtonText>Debit/Credit card</RadioButtonText>
        </RadioButtonContainer>
        <RadioButtonContainer>
          <RadioButton
            value="NetBanking"
            status={checked === 'NetBanking' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('NetBanking')}
          />
          <RadioButtonText>NetBanking</RadioButtonText>
        </RadioButtonContainer>
        <RadioButtonContainer>
          <RadioButton
            value="CashOnDelivery"
            status={checked === 'CashOnDelivery' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('CashOnDelivery')}
          />
          <RadioButtonText>Cash on Delivery</RadioButtonText>
        </RadioButtonContainer>
        <RadioButtonContainer>
          <RadioButton
            value="Wallet"
            status={checked === 'Wallet' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Wallet')}
          />
          <RadioButtonText>Wallet</RadioButtonText>
        </RadioButtonContainer>
        <AddressView>
          <AddressContainer>
            <Address>
              Delivery to {route.params?.storeName} , {route.params?.zipcode}
            </Address>
            <Address>
              {route.params?.city}, {route.params?.state}
            </Address>
          </AddressContainer>
          <SmallButton
            buttonTitle="change"
            backgroundColor={theme.colors.primary}
            textColor={theme.colors.white}
          />
        </AddressView>
        <PriceDetailContainer>
          <PriceDetailTitle>Price Detail</PriceDetailTitle>
          <PriceDetailTableContainer>
            <PriceDetailText>price (1 item)</PriceDetailText>
            <PriceDetailText>$10</PriceDetailText>
          </PriceDetailTableContainer>
          <PriceDetailTableContainer>
            <PriceDetailText>Delivery fee</PriceDetailText>
            <PriceDetailText>info</PriceDetailText>
          </PriceDetailTableContainer>
          <Divider
            style={{
              height: 1,
              backgroundColor: theme.colors.lightGrey,
              marginTop: 15,
              marginBottom: 15,
            }}
          />
          <PriceDetailTableContainer>
            <TotalPriceText>Total amount</TotalPriceText>
            <TotalPriceText>$10</TotalPriceText>
          </PriceDetailTableContainer>
        </PriceDetailContainer>
      </ScrollView>
      <ButtonContainer>
        <SimpleButton
          text="Checkout"
          buttonColor={theme.colors.primary}
          textColor={theme.colors.white}
          onPress={() => navigation.navigate('CheckoutSuccess')}
          // disabled={true}
        />
      </ButtonContainer>
      {/* <ButtonContainer>
        <SimpleButton
          text="Checkout"
          buttonColor={theme.colors.primary}
          textColor={theme.colors.white}
        />
      </ButtonContainer> */}
    </Container>
  );
};

export default Payment;

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const PaymentContainer = styled.View`
  background-color: ${theme.colors.white};
  padding: 20px;
  height: 250;
  width: 100%;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const CardContainer = styled.View`
  width: 80%;
  border-width: 2;
  border: dashed;
  height: 170px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
const CardText = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  color: rgba(0, 0, 0, 0.2);
  font-family: ${theme.fontFamilies.text};
  margin-top: 15px;
`;

const RadioButtonContainer = styled.View`
  flex-direction: row;
  padding: 10px;
  height: 50px;
  align-items: center;
  background-color: ${theme.colors.white};
`;

const RadioButtonText = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  color: ${theme.colors.darkGrey50};
  font-family: ${theme.fontFamilies.smallHeading};
  margin-left: 10px;
`;
const AddressView = styled.View`
  height: 60px;
  background-color: ${theme.colors.white};
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-top: 10px;
`;

const Address = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.largeText};
  color: ${theme.colors.darkGrey50};
  margin-left: 5px;
`;
const AddressContainer = styled.View``;

const PriceDetailContainer = styled.View`
  background-color: ${theme.colors.white};
  height: 180px;
  width: 100%;
  margin-top: 50px;
  padding: 15px;
`;

const PriceDetailTitle = styled.Text`
  font-size: ${theme.fontSize.buttonText_18};
  font-family: ${theme.fontFamilies.smallHeading};
  color: ${theme.colors.black};
`;

const PriceDetailTableContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const PriceDetailText = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.largeText};
  color: ${theme.colors.black};
`;
const TotalPriceText = styled.Text`
  font-size: ${theme.fontSize.buttonText_18};
  font-family: ${theme.fontFamilies.smallHeading};
  color: ${theme.colors.black};
`;
const ButtonContainer = styled.View`
  padding: 10px;
`;
