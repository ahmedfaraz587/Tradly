import React from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SimpleButton, SmallButton} from '../../components';
import {ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

const ProductDetail = ({route, navigation}) => {
  const {t} = useTranslation();
  return (
    <Container>
      <ScrollView>
        <Image source={route.params.productImage} resizeMode="cover">
          <HeaderView>
            <IconsAlignmentView>
              <IconView onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </IconView>
              <RightIconsView>
                <IconView>
                  <Ionicons name="share-social-sharp" size={24} color="white" />
                </IconView>
                <IconView>
                  <Ionicons name="heart-outline" size={24} color="white" />
                </IconView>
                <IconView>
                  <Entypo name="dots-three-vertical" size={24} color="white" />
                </IconView>
              </RightIconsView>
            </IconsAlignmentView>
          </HeaderView>
        </Image>
        <TitleView>
          <ProductTitle>{route.params.productName}</ProductTitle>
          <ProductPrice>${route.params.productPrice}</ProductPrice>
        </TitleView>
        <StoreDetailView>
          <StoreDetail>
            <StoreAvatar source={route.params.storeAvatar} />
            <StoreName>{route.params.storeName}</StoreName>
          </StoreDetail>
          <SmallButton
            buttonTitle="follow"
            textColor={theme.colors.white}
            backgroundColor={theme.colors.primary}
            onPress={() => alert('follow pressed')}
          />
        </StoreDetailView>
        <ProductExplanation>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis cras
          placerat diam ipsum ut. Nisi vel adipiscing massa bibendum diam.
          Suspendisse mattis dui maecenas duis mattis. Mattis aliquam at arcu,
          semper nunc, venenatis et pellentesque eu. Id tristique maecenas
          tristique habitasse eu elementum sed. Aliquam eget lacus, arcu,
          adipiscing eget feugiat in dolor sagittis. Non commodo, a justo massa
          porttitor sed placerat in. Orci tristique etiam tempus sed. Mi varius
          morbi egestas dictum tempor nisl. In
        </ProductExplanation>
        <TableView>
          <TableRow>
            <PropertyName>{t('productDetail.condition')}</PropertyName>
            <PropertyDetail>{t('productDetail.organic')}</PropertyDetail>
          </TableRow>
          <TableRow>
            <PropertyName>{t('productDetail.priceType')}</PropertyName>
            <PropertyDetail>{t('productDetail.fixed')}</PropertyDetail>
          </TableRow>
          <TableRow>
            <PropertyName>{t('productDetail.catagories')}</PropertyName>
            <PropertyDetail>Beverages</PropertyDetail>
          </TableRow>
          <TableRow>
            <PropertyName>{t('productDetail.location')}</PropertyName>
            <PropertyDetail>Lahore</PropertyDetail>
          </TableRow>
        </TableView>
        <AdditionalDetailsText>
          {t('productDetail.additionalDetails')}
        </AdditionalDetailsText>
        <TableRow>
          <PropertyName>{t('productDetail.deliveryDetails')}</PropertyName>
          <PropertyDetail>
            {t('productDetail.homeDelivery')},{' '}
            {t('productDetail.cashOnDelivery')}
          </PropertyDetail>
        </TableRow>
      </ScrollView>

      <CartButtonView>
        <SimpleButton
          buttonColor={theme.colors.primary}
          textColor={theme.colors.white}
          text={t('productDetail.addToCart')}
        />
      </CartButtonView>
    </Container>
  );
};

export default ProductDetail;

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;
const Image = styled.ImageBackground`
  width: 100%;
  height: 220px;
`;
const HeaderView = styled.View`
  padding: 10px;
`;

const IconView = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const RightIconsView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconsAlignmentView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleView = styled.View`
  background-color: ${theme.colors.white};
  height: 90px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 15px;
`;

const ProductTitle = styled.Text`
  font-family: ${theme.fontFamilies.heading};
  font-size: ${theme.fontSize.buttonText_18};
  color: ${theme.colors.darkGrey50};
`;
const ProductPrice = styled.Text`
  font-family: ${theme.fontFamilies.heading};
  font-size: ${theme.fontSize.buttonText_18};
  color: ${theme.colors.primary};
  margin-top: 10px;
`;

const StoreDetailView = styled.View`
  height: 70px;
  width: 100%;
  background-color: ${theme.colors.white};
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StoreDetail = styled.View`
  flex-direction: row;
  align-items: center;
`;
const StoreAvatar = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const StoreName = styled.Text`
  color: ${theme.colors.darkGrey50};
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.largeText};
`;

const ProductExplanation = styled.Text`
  background-color: ${theme.colors.white};
  width: 100%;
  padding: 20px;
  color: ${theme.colors.darkGrey50};
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.text};
  padding-top: 30px;
  padding-bottom: 30px;
`;
const CartButtonView = styled.View`
  padding: 10px;
  bottom: 0px;
  left: 0px;
  width: 100%;
`;

const TableView = styled.View`
  margin-top: 10px;
  background-color: ${theme.colors.white};
  padding: 20px;
`;
const TableRow = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const PropertyName = styled.Text`
  font-family: ${theme.fontFamilies.text};
  color: ${theme.colors.darkGrey80};
  margin-left: 25px;
  width: 130px;
`;
const PropertyDetail = styled.Text`
  font-family: ${theme.fontFamilies.text};
  color: ${theme.colors.darkGrey80};
  width: 50%;
`;

const AdditionalDetailsText = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.buttonText_18};
  font-family: ${theme.fontFamilies.smallHeading};
  padding: 15px;
`;
