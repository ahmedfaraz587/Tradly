import React from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import {HeaderCard, SmallButton} from '../../components';
import {View} from 'react-native';
import {appImages} from '../../utilities/assets'

const OrderHistory = ({navigation}) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderCard
          text="Order History"
          onFavoritePress={() => navigation.navigate('Wishlist')}
          onCartPress={() => navigation.navigate('CheckoutNavigation')}
        />
      </HeaderContainer>
      <MainContainer>
        <HeadingContainer>
          <Heading>Transactions</Heading>
          <DateView>
            <Date>Jan 2019</Date>
          </DateView>
        </HeadingContainer>
        <CardContainer>
          <CardDetailContainer>
            <CardImage source={appImages.chocolateBakery} />
            <View>
              <ProductName>Choclate</ProductName>
              <ProductPrice>$25</ProductPrice>
            </View>
          </CardDetailContainer>
          <SmallButton
            backgroundColor={theme.colors.primary}
            textColor={theme.colors.white}
            buttonTitle="Delivered"
          />
        </CardContainer>
        <CardContainer>
          <CardDetailContainer>
            <CardImage source={appImages.chocolateBakery} />
            <View>
              <ProductName>Choclate</ProductName>
              <ProductPrice>$25</ProductPrice>
            </View>
          </CardDetailContainer>
          <SmallButton
            backgroundColor={theme.colors.white}
            textColor={theme.colors.primary}
            buttonTitle="Order placed"
          />
        </CardContainer>
        <CardContainer>
          <CardDetailContainer>
            <CardImage source={appImages.chocolateBakery} />
            <View>
              <ProductName>Choclate</ProductName>
              <ProductPrice>$25</ProductPrice>
            </View>
          </CardDetailContainer>
          <SmallButton
            backgroundColor={theme.colors.white}
            textColor={theme.colors.primary}
            buttonTitle="Payment confirmed"
          />
        </CardContainer>
        <CardContainer>
          <CardDetailContainer>
            <CardImage source={appImages.chocolateBakery} />
            <View>
              <ProductName>Choclate</ProductName>
              <ProductPrice>$25</ProductPrice>
            </View>
          </CardDetailContainer>
          <SmallButton
            backgroundColor={theme.colors.white}
            textColor={theme.colors.primary}
            buttonTitle="Processed"
          />
        </CardContainer>
      </MainContainer>
    </Container>
  );
};

export default OrderHistory;

const Container = styled.View({
  flex: 1,
  backgroundColor: theme.colors.background,
});

const HeaderContainer = styled.View({
  backgroundColor: theme.colors.primary,
  height: 70,
  padding: 10,
  paddingTop: 15,
});

const MainContainer = styled.View({
  flex: 1,
});

const HeadingContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  padding: 15,
});

const Heading = styled.Text({
  fontSize: theme.fontSize.mediumText_20,
  color: theme.colors.darkGrey80,
  fontFamily: theme.fontFamilies.heading,
  marginRight: 10,
});

const Date = styled.Text({
  color: theme.colors.primary,
  fontFamily: theme.fontFamilies.heading,
  textAlign: 'center',
});

const DateView = styled.View({
  height: 25,
  alignSelf: 'center',
  width: 120,
  backgroundColor: '#bce2eb',
  justifyContent: 'center',
  borderRadius: 6,
});

const CardContainer = styled.View({
  height: 100,
  backgroundColor: theme.colors.white,
  marginTop: 8,
  borderRadius: 10,
  elevation: 2,
  padding: 10,
  paddingLeft: 10,
  paddingRight:10,
  justifyContent: 'space-between',
  flexDirection: 'row',
  width: '100%',
  alignItems:'center'
});

const CardDetailContainer = styled.View({
  flexDirection:'row',
  alignItems:'center'
})

const CardImage=styled.Image({
  height:70,
  width:70,
  borderRadius:10
})

const ProductName = styled.Text({
  fontSize:theme.fontSize.xxsmallText_14,
  fontFamily:theme.fontFamilies.largeText,
  color:theme.colors.darkGrey80,
  marginLeft: 15,
})

const ProductPrice = styled.Text({
  color:theme.colors.primary,
  fontSize:theme.fontSize.smallText_16,
  fontFamily:theme.fontFamilies.heading,
  marginLeft:15,
  marginTop:5
})