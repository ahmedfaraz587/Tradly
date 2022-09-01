import React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import styled from 'styled-components';
import {theme} from '../../ui';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {appImages, avatars} from '../../utilities/assets';
import {ProductCard, HeaderTitleCard} from '../../components';

const Wishlist = ({navigation}) => {
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
  ];

  const renderProduct = ({item}) => (
    <PressProduct
      onPress={() =>
        navigation.navigate('ProductDetail', {
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
      <HeaderTitleCard title="Wishlist" onPress={() => navigation.goBack()} />
      <AlignCenter>
        <FlatList
          data={products}
          renderItem={renderProduct}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </AlignCenter>
    </Container>
  );
};

export default Wishlist;

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const AlignCenter = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const PressProduct = styled.TouchableOpacity`
  margin: 7px;
`;
