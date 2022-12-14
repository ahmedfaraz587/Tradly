import React from 'react';
import {HeaderCard, TextInputSearch, ProductCard} from '../../components';
import styled from 'styled-components';
import {theme} from '../../ui';
import {FlatList, View} from 'react-native';
import {appImages, avatars} from '../../utilities/assets';
import { useTranslation } from 'react-i18next';

const Browse = props => {

  const {t} = useTranslation()
  const products = [
    {
      productImage: appImages.strawberryPunch,
      productName: 'Strawberry punch',
      productPrice: '25',
      storeAvatar: avatars.avatar2,
      storeName: 'Tradly',
    },
    {
      productImage: appImages.lemonade,
      productName: 'Lemonade',
      productPrice: '25',
      storeAvatar: avatars.avatar2,
      storeName: 'Tradly',
    },
    {
      productImage: appImages.chocolate,
      productName: 'Chocolate',
      productPrice: '25',
      storeAvatar: avatars.avatar2,
      storeName: 'Tradly',
    },
    {
      productImage: appImages.whiskey,
      productName: 'Whiskey',
      productPrice: '25',
      storeAvatar: avatars.avatar2,
      storeName: 'Tradly',
    },
    {
      productImage: appImages.chocolateBakery,
      productName: 'Chocolate Bakery',
      productPrice: '25',
      storeAvatar: avatars.avatar2,
      storeName: 'Tradly',
    },
    {
      productImage: appImages.fruitPunch,
      productName: 'Fruit Punch',
      productPrice: '25',
      storeAvatar: avatars.avatar2,
      storeName: 'Tradly',
    },
  ];

  const renderProduct = ({item}) => (
    <PressProduct
      onPress={() =>
        props.navigation.navigate('ProductDetail', {
          productImage: item.productImage,
          productName: item.productName,
          productPrice: item.productPrice,
          storeName: item.storeName,
          storeAvatar: item.storeAvatar,
        })
      }>
      <ProductCard
        productName={item.productName}
        productImage={item.productImage}
        productPrice={item.productPrice}
        storeAvatar={item.storeAvatar}
        storeName={item.storeName}
      />
    </PressProduct>
  );

  return (
    <Container>
      <HeaderContainer>
        <HeaderCard
          text={t('browse.title')}
          onFavoritePress={() => props.navigation.navigate('Wishlist')}
          onCartPress={() => props.navigation.navigate('CheckoutNavigation')}
        />
        <TextInputSearch placeholder={t('browse.searchProduct')} />
      </HeaderContainer>
      <ProductContainer>
          <FlatList data={products} renderItem={renderProduct} numColumns={2} />
      </ProductContainer>
    </Container>
  );
};

export default Browse;

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;
const HeaderContainer = styled.View`
  background-color: ${theme.colors.primary};
  height: 130px;
  padding: 10px;
  padding-top: 15px;
`;

const PressProduct = styled.TouchableOpacity`
  margin: 7px;
`;

const ProductContainer = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10
});
