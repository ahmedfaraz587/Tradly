import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {theme} from '../../ui';
import {IconButton, ProductCard} from '../../components';
import {appImages, icons, avatars} from '../../utilities/assets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';

const Catalogue = props => {
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
          storeAvatar:item.storeAvatar,
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
        <HeaderTitleView>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <HeaderTitle>{props.route.params.title}</HeaderTitle>
        </HeaderTitleView>
        <HeaderButtonView>
          <IconButton icon={icons.sort} buttonTitle="Sort by" />
          <IconButton icon={icons.map} buttonTitle="Location" />
          <IconButton icon={icons.category} buttonTitle="Category" />
        </HeaderButtonView>
      </HeaderContainer>
      <FlatList data={products} renderItem={renderProduct} numColumns={2} />
    </Container>
  );
};

export default Catalogue;

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;
const HeaderContainer = styled.View`
  background-color: ${theme.colors.primary};
  height: 130px;
  padding: 10px;
  padding-top: 15px;
  width: 100%;
`;

const HeaderTitleView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  font-size: ${theme.fontSize.mediumTitle_24};
  font-family: ${theme.fontFamilies.heading};
  color: ${theme.colors.white};
  align-self: center;
  width: 100%;
  text-align: center;
  padding-right: 23px;
`;

const HeaderButtonView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 35px;
`;

const PressProduct = styled.TouchableOpacity`
  margin: 10px;
`;
