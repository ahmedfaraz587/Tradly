import React from 'react';
import styled from 'styled-components';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {theme} from '../../ui';

const CardView = styled.View`
  height: 200px;
  width: ${wp('45%')};
  background-color: ${theme.colors.white};
  border-radius: 10px;
`;

const CardImage = styled.Image({
  width: wp(45),
  height: 125,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
});

const BottomView = styled.View`
  flex-direction: row;
  margin-top: 10px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const DetailView = styled.View`
  flex: 1;
  padding: 13px;
`;

const ProductName = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.largeText};
  color: ${theme.colors.black};
`;

const StoreDetailView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StoreAvatar = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 20px;
`;
const StoreName = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.largeText};
  color: ${theme.colors.darkGrey50};
  margin-left: 8px;
`;

const PriceText = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.smallHeading};
  color: ${theme.colors.primary};
`;

const ProductCard = props => {
  return (
    <CardView>
      <CardImage source={props.productImage} />
      <DetailView>
        <ProductName>{props.productName}</ProductName>
        <BottomView>
          <StoreDetailView>
            <StoreAvatar source={props.storeAvatar} />
            <StoreName>{props.storeName}</StoreName>
          </StoreDetailView>
          <PriceText>${props.productPrice}</PriceText>
        </BottomView>
      </DetailView>
    </CardView>
  );
};

export default ProductCard;
