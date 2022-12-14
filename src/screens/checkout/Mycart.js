import React from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import {HeaderTitleCard, SimpleButton, SmallButton} from '../../components';
import {TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-paper';
import {appImages} from '../../utilities/assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';

const Mycart = ({navigation, route}) => {
  const {t} = useTranslation();
  return (
    <Container>
      <HeaderTitleCard
        title={t('myCart.title')}
        onPress={() => navigation.goBack()}
      />
      {route.params ? (
        <AddressView>
          <AddressContainer>
            <Address>
              {t('myCart.deliveryTo')} {route.params.storeName} ,{' '}
              {route.params.zipcode}
            </Address>
            <Address>
              {route.params.city}, {route.params.state}
            </Address>
          </AddressContainer>
          <SmallButton
            buttonTitle={t('myCart.change')}
            backgroundColor={theme.colors.primary}
            textColor={theme.colors.white}
          />
        </AddressView>
      ) : (
        <AddNewAddressView>
          <TouchableOpacity onPress={() => navigation.navigate('AddAddress')}>
            <AddNewAddressText>{t('myCart.+addNewAddress')} </AddNewAddressText>
          </TouchableOpacity>
        </AddNewAddressView>
      )}
      <CartItemView>
        <CartTopContainer>
          <ImageContainer source={appImages.egg} />
          <CartDetailView>
            <CartItemName>Egg</CartItemName>
            <CartItemPrice>$10</CartItemPrice>
            <CartItemQtyView>
              <CartItemQty>Qty: 1</CartItemQty>
              <TouchableOpacity>
                <AntDesign name="caretdown" size={12} color="black" />
              </TouchableOpacity>
            </CartItemQtyView>
          </CartDetailView>
        </CartTopContainer>
        <Divider
          style={{
            height: 1,
            backgroundColor: theme.colors.lightGrey,
            margin: 10,
          }}
        />
        <TouchableOpacity onPress={() => alert('remove')}>
          <RemoveText>{t('myCart.remove')} </RemoveText>
        </TouchableOpacity>
      </CartItemView>
      <PriceDetailContainer>
        <PriceDetailTitle>{t('myCart.priceDetail')}</PriceDetailTitle>
        <PriceDetailTableContainer>
          <PriceDetailText>{t('myCart.price')} (1 item)</PriceDetailText>
          <PriceDetailText>$10</PriceDetailText>
        </PriceDetailTableContainer>
        <PriceDetailTableContainer>
          <PriceDetailText>{t('myCart.deliveryFee')} </PriceDetailText>
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
          <TotalPriceText>{t('myCart.totalAmount')} </TotalPriceText>
          <TotalPriceText>$10</TotalPriceText>
        </PriceDetailTableContainer>
      </PriceDetailContainer>
      <ButtonContainer>
        {route.params ? (
          <SimpleButton
            textColor={theme.colors.white}
            buttonColor={theme.colors.primary}
            text={t('myCart.continueToPayment')}
            onPress={() =>
              navigation.navigate('Payment', {
                storeName: route.params.storeName,
                zipcode: route.params.zipcode,
                city: route.params.city,
                state: route.params.state,
              })
            }
          />
        ) : (
          <SimpleButton
            textColor={theme.colors.white}
            buttonColor={theme.colors.primary}
            text={t('myCart.continueToPayment')}
            disabled={true}
          />
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Mycart;

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const AddNewAddressView = styled.View`
  background-color: ${theme.colors.white};
  height: 60px;
  width: 100%;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;
const AddNewAddressText = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.largeText};
  color: ${theme.colors.darkGrey50};
`;

const CartItemView = styled.View`
  justify-content: center;
  width: 100%;
  height: 180px;
  background-color: ${theme.colors.white};
`;

const ImageContainer = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin-right: 15px;
  margin-left: 10%;
`;
const CartDetailView = styled.View``;

const CartItemName = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.largeText};
  color: ${theme.colors.darkGrey50};
  margin-bottom: 10px;
`;
const CartItemPrice = styled.Text`
  font-size: ${theme.fontSize.buttonText_18};
  font-family: ${theme.fontFamilies.heading};
  color: ${theme.colors.primary};
  margin-bottom: 10px;
`;

const CartItemQtyView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CartItemQty = styled.Text`
  font-size: ${theme.fontSize.xsmallText_12};
  font-family: ${theme.fontFamilies.largeText};
  color: ${theme.colors.darkGrey50};
  margin-right: 5px;
`;

const CartTopContainer = styled.View`
  flex-direction: row;
`;

const RemoveText = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.largeText};
  color: ${theme.colors.darkGrey50};
  align-self: center;
  margin-top: 5px;
`;

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
  justify-content: center;
  padding: 15px;
  background-color: ${theme.colors.white};
  height: 80px;
  position: absolute;
  bottom: 0;
  width: 100%;
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
`;

const Address = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.largeText};
  color: ${theme.colors.darkGrey50};
  margin-left: 5px;
`;
const AddressContainer = styled.View``;
