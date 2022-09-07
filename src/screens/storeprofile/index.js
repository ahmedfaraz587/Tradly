import React from 'react';
import styled from 'styled-components';
import {HeaderTitleCard, SmallButton, ProductCard} from '../../components';
import {theme} from '../../ui';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View, FlatList} from 'react-native';
import Tags from 'react-native-tags';
import Entypo from 'react-native-vector-icons/Entypo';
import {appImages, avatars} from '../../utilities/assets';
import { useTranslation } from 'react-i18next';

const StoreProfile = ({navigation}) => {
  const {t} = useTranslation() 
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
      <HeaderContainer>
        <HeaderTitleCard
          title="Tradly Store"
          onPress={() => navigation.goBack()}
        />
        <SearchButton>
          <FontAwesome name="search" size={24} color="white" />
        </SearchButton>
      </HeaderContainer>
      <ColorView />
      <TopContainer>
        <UserDetailContainer>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AvatarContainer>
              <Avatar source={{uri: 'https://picsum.photos/100'}} />
            </AvatarContainer>
            <NameContainer>
              <Name>Ahmed</Name>
              <Contact>ahmed.123</Contact>
            </NameContainer>
          </View>
          <SmallButton
            buttonTitle={t('storeProfile.follow')}
            backgroundColor={theme.colors.primary}
            textColor={theme.colors.white}
          />
        </UserDetailContainer>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nunc
          vel rhoncus, sed. Neque hendrerit risus ut metus ultrices ac. Dui
          morbi eu amet id mauris. Eget at ut.
        </Text>
        <Tags
          initialTags={['Groceries', 'Vegetable']}
          readonly
          renderTag={({tag}) => (
            <TagTextView>
              <TagText>{tag}</TagText>
              <Entypo name="cross" size={15} color={theme.colors.darkGrey50} />
            </TagTextView>
          )}
        />
      </TopContainer>
      <FollowerContainer>
        <FollowerView>
          <Name>{t('storeProfile.totalFollowers')}</Name>
          <Name>0</Name>
        </FollowerView>
        <FollowerView>
          <Name>{t('storeProfile.totalProducts')}</Name>
          <Name>0</Name>
        </FollowerView>
      </FollowerContainer>
      <CatagoryView>
        <ButtonView>
          <SmallButton
            buttonTitle="All Product"
            backgroundColor={theme.colors.primary}
            textColor={theme.colors.white}
          />
        </ButtonView>
        <ButtonView>
          <SmallButton
            buttonTitle="Fruits"
            backgroundColor={theme.colors.white}
            textColor={theme.colors.primary}
          />
        </ButtonView>
        <ButtonView>
          <SmallButton
            buttonTitle="Vegetables"
            backgroundColor={theme.colors.white}
            textColor={theme.colors.primary}
          />
        </ButtonView>
      </CatagoryView>
      <ProductContainer>
        <AlignCenter>
          <FlatList
            data={products}
            key={(item, index) => index}
            renderItem={renderProduct}
            numColumns={2}
          />
        </AlignCenter>
      </ProductContainer>
    </Container>
  );
};

export default StoreProfile;

const Container = styled.View({
  flex: 1,
  backgroundColor: theme.colors.background,
});

const HeaderContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
});

const SearchButton = styled.TouchableOpacity({
  marginLeft: '-60%',
  paddingRight: 10,
});

const Name = styled.Text({
  fontSize: theme.fontSize.xxsmallText_14,
  color: theme.colors.darkGrey50,
  fontFamily: theme.fontFamilies.largeText,
  marginTop: 8,
});

const Contact = styled.Text({
  fontSize: theme.fontSize.xsmallText_12,
  color: theme.colors.darkGrey50,
  fontFamily: theme.fontFamilies.largeText,
});

const AvatarContainer = styled.View({
  height: 64,
  width: 64,
  borderRadius: 40,
});

const Avatar = styled.Image({
  height: 64,
  width: 64,
  borderRadius: 32,
  borderWidth: 2,
  borderColor: 'white',
});

const NameContainer = styled.View({
  marginLeft: 10,
});

const UserDetailContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const TopContainer = styled.View({
  padding: 20,
  paddingLeft: 30,
  paddingRight: 30,
  height: 240,
  backgroundColor: theme.colors.white,
  width: '100%',
  borderRadius: 10,
  marginTop: -5,
});
const ColorView = styled.View({
  height: 25,
  backgroundColor: theme.colors.primary,
});

const Text = styled.Text({
  fontSize: theme.fontSize.xsmallText_12,
  fontFamily: theme.fontFamilies.largeText,
  marginTop: 25,
});

const TagText = styled.Text({
  paddingRight: 5,
  paddingLeft: 15,
  color: theme.colors.darkGrey50,
  fontFamily: theme.fontFamilies.text,
});

const TagTextView = styled.View({
  backgroundColor: '#D8D8D8',
  height: 25,
  margin: 5,
  borderRadius: 15,
  marginTop: 20,
  alignItems: 'center',
  flexDirection: 'row',
  paddingRight: 10,
});

const FollowerContainer = styled.View({
  height: 90,
  backgroundColor: theme.colors.white,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: 10,
});

const FollowerView = styled.View({
  marginRight: 15,
  alignItems: 'center',
});

const CatagoryView = styled.View({
  flexDirection: 'row',
  marginTop: 10,
  marginBottom: 10,
});

const ButtonView = styled.View({
  margin: 5,
});

const ProductsView = styled.View`
  padding: 10px;
`;

const PressProduct = styled.TouchableOpacity`
  margin: 7px;
`;

const AlignCenter = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ProductContainer = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
