import React,{useContext} from 'react';
import {
  HeaderCard,
  TextInputSearch,
  CatagoryCard,
  SmallButton,
  ProductCard,
} from '../../components';
import styled from 'styled-components';
import {theme} from '../../ui';
import {appImages, avatars} from '../../utilities/assets';
import {FlatList} from 'react-native';
import {Spacer} from '../../components/spacer';
import {TouchableOpacity} from 'react-native';
import StoreCard from '../../components/cards/StoreCard';
import modeContext from '../../contexts/modeContext';
import { useTranslation } from 'react-i18next';

const HomeDashboard = ({navigation}) => {
  const {t} = useTranslation()
  const {isDarkMode , mode} = useContext(modeContext);
  
  const catagories = [
    {
      title: 'Beverages',
      image: appImages.beverages,
    },
    {
      title: 'Bread & Bakery',
      image: appImages.bakery,
    },
    {
      title: 'Vegatables',
      image: appImages.vegetable,
    },
    {
      title: 'Fruit',
      image: appImages.fruit,
    },
    {
      title: 'Egg',
      image: appImages.egg,
    },
    {
      title: 'Frozen Veg',
      image: appImages.frozenVegatable,
    },
    {
      title: 'Home Care',
      image: appImages.homeCare,
    },
    {
      title: 'Pet Care',
      image: appImages.petCare,
    },
  ];

  const products = [
    {
      productImage: appImages.chickenBroast,
      productName: 'Chicken broast',
      productPrice: '50',
      storeAvatar: avatars.avatar1,
      storeName: 'Tradly',
    },
    {
      productImage: appImages.fishBroast,
      productName: 'Fish broast',
      productPrice: '40',
      storeAvatar: avatars.avatar2,
      storeName: 'KFC',
    },
    {
      productImage: appImages.legPiece,
      productName: 'Leg piece',
      productPrice: '30',
      storeAvatar: avatars.avatar2,
      storeName: 'KFC',
    },
  ];

  const stores = [
    {
      coverImage: appImages.chickenBroast,
      avatar: avatars.avatar2,
      storeName: 'Tradly',
      buttonText: 'Follow',
    },
    {
      coverImage: appImages.vegetable,
      avatar: avatars.avatar1,
      storeName: 'Groceries',
      buttonText: 'Follow',
    },
    {
      coverImage: appImages.fishBroast,
      avatar: avatars.avatar2,
      storeName: 'Food Factory',
      buttonText: 'Follow',
    },
  ];

  const PressProduct = styled.TouchableOpacity`
    margin-left: 7px;
  `;

  const renderCatagories = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Catalogue', {title: item.title})}>
      <CatagoryCard title={item.title} image={item.image} />
    </TouchableOpacity>
  );

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

  function renderStores({item}) {
    return (
      <StoreMargin>
        <StoreCard
          coverImage={item.coverImage}
          avatar={item.avatar}
          storeName={item.storeName}
          buttonText={item.buttonText}
          onPress={() => alert('pressed')}
        />
      </StoreMargin>
    );
  }

  return (
    <Container
      // color={mode.backgroundColor}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      <HeaderContainer>
        <HeaderCard
          text={t('home.title')}
          onFavoritePress={() => navigation.navigate('Wishlist')}
          onCartPress={() => navigation.navigate('CheckoutNavigation')}
        />
        <TextInputSearch placeholder={t('home.search')} />
      </HeaderContainer>
      <CatagoryView>
        <FlatList
          data={catagories}
          key={(item, index) => index}
          renderItem={renderCatagories}
          numColumns={4}
        />
      </CatagoryView>
      <Spacer.Column numberOfSpaces={3} />
      <ProductNameView>
        <ProductCatagoryName>{t('home.newProduct')}</ProductCatagoryName>
        <SmallButton
          buttonTitle={t('home.seeAll')}
          onPress={() => alert('see all pressed')}
          backgroundColor={theme.colors.primary}
          textColor={theme.colors.white}
        />
      </ProductNameView>
      <ProductsView>
        <FlatList
          data={products}
          key={(item, index) => index}
          horizontal
          renderItem={renderProduct}
        />
      </ProductsView>
      <Spacer.Column numberOfSpaces={3} />
      <ProductNameView>
        <ProductCatagoryName>{t('home.popularProduct')}</ProductCatagoryName>
        <SmallButton
          buttonTitle={t('home.seeAll')}
          onPress={() => alert('see all pressed')}
          backgroundColor={theme.colors.primary}
          textColor={theme.colors.white}
        />
      </ProductNameView>
      <ProductsView>
        <FlatList
          data={products}
          key={(item, index) => index}
          horizontal
          renderItem={renderProduct}
        />
      </ProductsView>
      <FollowStoreBackground>
        <ProductNameView>
          <StoreToFollowText>{t('home.storeToFollow')}</StoreToFollowText>
          <SmallButton
            buttonTitle={t('home.viewAll')}
            onPress={() => alert('see all pressed')}
            backgroundColor={theme.colors.white}
            textColor={theme.colors.black}
          />
        </ProductNameView>
      </FollowStoreBackground>
      <StoreView>
        <FlatList
          data={stores}
          key={(item, index) => index}
          renderItem={renderStores}
          horizontal
        />
      </StoreView>
      <Spacer.Column numberOfSpaces={50} />
    </Container>
  );
};

export default HomeDashboard;

const Container = styled.ScrollView({
  flex: 1,
  backgroundColor: theme.colors.background,
})

const HeaderContainer = styled.View`
  background-color: ${theme.colors.primary};
  height: 130px;
  padding: 10px;
  padding-top: 15px;
`;

const CatagoryView = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const ProductsView = styled.View`
  padding: 10px;
`;

const ProductNameView = styled.View`
  flex-direction: row;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
`;

const ProductCatagoryName = styled.Text`
  color: ${theme.colors.darkGrey50};
  font-size: ${theme.fontSize.normalText_18};
  font-family: ${theme.fontFamilies.heading};
`;

const FollowStoreBackground = styled.View`
  height: 180px;
  background-color: ${theme.colors.primary};
  padding: 5px;
  margin-top: 10px;
`;
const StoreToFollowText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.normalText_18};
  font-family: ${theme.fontFamilies.heading};
`;
const StoreView = styled.View`
  /* margin: 10px; */
  margin-top: -130px;
  flex: 1px;
`;

const StoreMargin = styled.View`
  margin: 10px;
`;
