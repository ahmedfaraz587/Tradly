import React, {useState} from 'react';
import {Divider} from 'react-native-paper';
import styled from 'styled-components';
import {theme} from '../../ui';
import {
  HeaderCard,
  ProductCard,
  SimpleButton,
  SmallButton,
  TextInputSearch,
} from '../../components';
import {appImages, avatars} from '../../utilities/assets';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MyStore = ({navigation}) => {
  const [store, setStore] = useState(true);
  const [product, setProduct] = useState(true);
  return (
    <Container>
      <HeaderContainer>
        <HeaderCard
          text="My Store"
          onFavoritePress={() => navigation.navigate('Wishlist')}
          onCartPress={() => navigation.navigate('CheckoutNavigation')}
        />
      </HeaderContainer>
      {store ? (
        <View>
          <StoreContainer>
            <ProfileImage source={avatars.avatar2} />
            <StoreName>Tradly Store</StoreName>
            <RowView>
              <SmallButton
                buttonTitle="Edit Store"
                backgroundColor={theme.colors.white}
                textColor={theme.colors.primary}
              />
              <Margin />
              <SmallButton
                buttonTitle="View Store"
                backgroundColor={theme.colors.primary}
                textColor={theme.colors.white}
                onPress={() => navigation.navigate('StoreProfile')}
              />
            </RowView>
            <Divider />
            <TouchableOpacity onPress={() => alert('remove store')}>
              <RemoveStore>Remove Store</RemoveStore>
            </TouchableOpacity>
          </StoreContainer>
          {product ? (
            <View style={{padding: 15}}>
              <TextInputSearch
                placeholderTextColor={theme.colors.lightGrey}
                placeholder="Search Product"
              />
              <ProductName>Products</ProductName>
              <ProductView>
                {/* <ScrollView horizontal={false}> */}
                <MarginContainer>
                  <View>
                    <ProductCard
                      productName="Brocolli"
                      productImage={appImages.fishBroast}
                      productPrice="25"
                      storeAvatar={avatars.avatar2}
                      storeName="Tradly"
                    />

                    <ProductButtonContainer>
                      <IconContainer
                        onPress={() =>
                          navigation.navigate('Store', {screen: 'EditProduct'})
                        }>
                        <AntDesign
                          name="edit"
                          size={20}
                          color={theme.colors.white}
                        />
                      </IconContainer>
                      <IconContainer>
                        <MaterialIcons
                          name="delete"
                          size={20}
                          color={theme.colors.white}
                        />
                      </IconContainer>
                    </ProductButtonContainer>
                  </View>
                </MarginContainer>
                <MarginContainer>
                  <AddImageContainer>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() =>
                        navigation.navigate('Store', {screen: 'AddProduct'})
                      }>
                      <AntDesign
                        name="plus"
                        size={30}
                        color={theme.colors.darkGrey50}
                      />
                      <AddProductText>Add Product</AddProductText>
                    </TouchableOpacity>
                  </AddImageContainer>
                </MarginContainer>
                {/* </ScrollView> */}
              </ProductView>
            </View>
          ) : (
            <View>
              <SmallTitle>You dont have a product</SmallTitle>
              <ButtonContainer>
                <SimpleButton
                  text="Add product"
                  buttonColor={theme.colors.background}
                  textColor={theme.colors.primary}
                  onPress={() =>
                    navigation.navigate('Store', {screen: 'AddProduct'})
                  }
                />
              </ButtonContainer>
            </View>
          )}
        </View>
      ) : (
        <MainContainer>
          <StoreImage source={appImages.mystore} resizeMode="contain" />
          <DontHaveStoreTitle>You Dont Have a Store</DontHaveStoreTitle>
          <ButtonContainer>
            <SimpleButton
              text="Create Store"
              buttonColor={theme.colors.primary}
              textColor={theme.colors.white}
              onPress={() =>
                navigation.navigate('Store', {screen: 'CreateStore'})
              }
            />
          </ButtonContainer>
        </MainContainer>
      )}
    </Container>
  );
};

export default MyStore;

const Container = styled.View({
  flex: 1,
  backgroundColor: theme.colors.background,
});

const HeaderContainer = styled.View`
  background-color: ${theme.colors.primary};
  height: 70px;
  padding: 10px;
  padding-top: 15px;
`;

const MainContainer = styled.View({
  marginTop: 60,
  justifyContent: 'center',
});

const StoreImage = styled.Image({
  height: 200,
  width: 200,
  marginBottom: 20,
  alignSelf: 'center',
});

const DontHaveStoreTitle = styled.Text({
  fontSize: theme.fontSize.buttonText_18,
  fontFamily: theme.fontFamilies.smallHeading,
  color: theme.colors.black,
  alignSelf: 'center',
  marginTop: 20,
  marginBottom: 30,
});

const ButtonContainer = styled.View({
  marginLeft: '25%',
  marginRight: '25%',
});

const StoreContainer = styled.View({
  height: 220,
  width: '100%',
  backgroundColor: theme.colors.white,
  justifyContent: 'center',
});

const ProfileImage = styled.Image({
  height: 50,
  width: 50,
  alignSelf: 'center',
  borderRadius: 25,
});

const StoreName = styled.Text({
  fontFamily: theme.fontFamilies.heading,
  fontSize: theme.fontSize.mediumTitle_24,
  color: theme.colors.darkGrey50,
  alignSelf: 'center',
  margin: 15,
});

const AddProductText = styled.Text({
  fontSize: theme.fontSize.buttonText_18,
  fontFamily: theme.fontFamilies.largeText,
  color: theme.colors.darkGrey50,
});

const RowView = styled.View({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  justifyContent: 'center',
  marginBottom: 20,
});

const Margin = styled.View({
  margin: 5,
});

const RemoveStore = styled.Text({
  color: theme.colors.darkGrey50,
  fontFamily: theme.fontFamilies.largeText,
  textAlign: 'center',
  marginTop: 15,
});

const SmallTitle = styled.Text({
  fontSize: theme.fontSize.buttonText_18,
  fontFamily: theme.fontFamilies.smallHeading,
  color: theme.colors.black,
  alignSelf: 'center',
  marginTop: 80,
  marginBottom: 80,
});

const ProductName = styled.Text({
  fontFamily: theme.fontFamilies.heading,
  fontSize: theme.fontSize.mediumTitle_24,
  color: theme.colors.darkGrey50,
  marginTop: 15,
  marginBottom: 15,
});

const ProductView = styled.View({
  flexDirection: 'row',
  margin: 7,
});

const ProductButtonContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginTop: '-85%',
});

const IconContainer = styled.TouchableOpacity({
  width: 32,
  height: 32,
  borderRadius: 16,
  backgroundColor: 'rgba(255,255,255,0.4)',
  justifyContent: 'center',
  alignItems: 'center',
});

const AddImageContainer = styled.View({
  width: 160,
  height: 200,
  borderStyle: 'dashed',
  borderWidth: 1,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
});

const MarginContainer = styled.View({
  margin: 8,
});
