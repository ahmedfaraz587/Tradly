import React, {useState} from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {appImages} from '../../utilities/assets';
import StepIndicator from 'react-native-step-indicator';

const CheckoutSuccess = ({navigation}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const labels = [
    {
      title: 'Order Placed',
      description: 'Order#123455 from Fashion Point',
      date: '12/12/2020',
      time: '12:00 PM',
    },
    {
      title: 'Payment Confirmed',
      description: 'Payment Confirmed Status',
      date: '12/12/2020',
      time: '12:00 PM',
    },
    {
      title: 'Processed',
      description: 'Order Processed Status',
      date: '12/12/2020',
      time: '12:00 PM',
    },
    {
      title: 'Delivered',
      description: 'Order Delivered Status',
      date: '12/12/2020',
      time: '12:00 PM',
    },
  ];
  const customStyles = {
    stepIndicatorSize: 13,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 4,
    stepStrokeCurrentColor: 'rgba(51, 144, 124,0.4)',
    separatorFinishedColor: theme.colors.primary,
    separatorUnFinishedColor: '#606A7B',
    stepIndicatorFinishedColor: theme.colors.primary,
    stepIndicatorUnFinishedColor: '#606A7B',
    stepIndicatorCurrentColor: theme.colors.primary,
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    labelColor: '#666666',
    labelSize: 13,
    labelAlign: 'flex-start',
  };

  return (
    <Container>
      <ScrollView>
        <HeaderContainer>
          <HeaderTitle>Order Details</HeaderTitle>
          <TouchableOpacity>
            <Entypo name="cross" size={35} color={theme.colors.white} />
          </TouchableOpacity>
        </HeaderContainer>
        <MainContainer>
          <DoneImage source={appImages.done} />
          <ThanksText>Thanks for order</ThanksText>
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
          </CartItemView>
          <TrackOrderContainer>
            <TrackOrderHeading>Track Order</TrackOrderHeading>
            <OrderId>ORDER ID - 12345 </OrderId>
            <View style={{padding: 10, flex: 1}}>
              <View style={styles.stepIndicator}>
                <StepIndicator
                  customStyles={customStyles}
                  stepCount={4}
                  direction="vertical"
                  currentPosition={currentPage}
                  labels={labels}
                  renderLabel={({
                    position,
                    stepStatus,
                    label,
                    currentPosition,
                  }) => {
                    return (
                      <View style={styles.labelContainer}>
                        <View>
                          <Text style={styles.labelTitle}>{label.title}</Text>
                          <Text style={styles.labelDescription}>
                            {label.description}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.labelDescription}>
                            {label.date}
                          </Text>
                          <Text style={styles.labelDescription}>
                            {label.time}
                          </Text>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </TrackOrderContainer>
        </MainContainer>
      </ScrollView>

      <BackToHomeButton onPress={() => navigation.navigate('BottomNavigation')}>
        <BackToHome>Back to home</BackToHome>
      </BackToHomeButton>
    </Container>
  );
};

export default CheckoutSuccess;

const styles = StyleSheet.create({
  stepIndicator: {
    marginVertical: 10,
    // paddingHorizontal: 25,
  },
  labelContainer: {
    // flex:1,
    width: '80%',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    justifyContent: 'space-between',
    alignItems:'center'
  },
  labelTitle: {
    fontSize: theme.fontSize.xxsmallText_14,
    fontFamily: theme.fontFamilies.largeText,
    color: theme.colors.black,
    marginBottom: 10,
  },
  labelDescription: {
    fontSize: 10,
    color: '#606A7B',
    fontFamily: theme.fontFamilies.largeText,
    marginBottom: 10,
  },
});

const Container = styled.View({
  flex: 1,
  backgroundColor: theme.colors.background,
});

const HeaderContainer = styled.View({
  height: 80,
  backgroundColor: theme.colors.primary,
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
  marginBottom: 50,
});

const HeaderTitle = styled.Text({
  fontSize: theme.fontSize.mediumTitle_24,
  fontFamily: theme.fontFamilies.heading,
  color: theme.colors.white,
});

const DoneImage = styled.Image({
  height: 200,
  width: 200,
  alignSelf: 'center',
});

const ThanksText = styled.Text({
  fontSize: theme.fontSize.mediumTitle_24,
  fontFamily: theme.fontFamilies.heading,
  color: theme.colors.darkGrey50,
  alignSelf: 'center',
  marginTop: 10,
});

const BackToHome = styled.Text({
  color: theme.colors.darkGrey80,
  fontFamily: theme.fontFamilies.smallHeading,
  fontSize: theme.fontSize.xxsmallText_14,
  textAlign: 'center',
});

const MainContainer = styled.View({
  flex: 1,
});

const BackToHomeButton = styled.TouchableOpacity({
  width: '100%',
  height: 60,
  backgroundColor: theme.colors.white,
  alignItems: 'center',
  justifyContent: 'center',
});

const CartItemView = styled.View`
  justify-content: center;
  width: 100%;
  height: 140px;
  background-color: ${theme.colors.white};
  margin-top: 30px;
`;

const ImageContainer = styled.Image`
  height: 105px;
  width: 105px;
  border-radius: 10px;
  margin-right: 15px;
  margin-left: 10%;
`;
const CartDetailView = styled.View`
  justify-content: center;
`;

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

const TrackOrderContainer = styled.View({
  marginTop: 15,
  backgroundColor: theme.colors.white,
  padding: 20,
});

const TrackOrderHeading = styled.Text({
  color: theme.colors.black,
  fontFamily: theme.fontFamilies.smallHeading,
  fontSize: theme.fontSize.smallText_16,
});

const OrderId = styled.Text({
  color: '#606A7B',
  fontSize: theme.fontSize.xxsmallText_14,
  marginTop: 8,
  marginBottom: 8,
});
