import React from 'react';
import styled from 'styled-components';
import {HeaderTitleCard, SimpleButton} from '../../components';
import {theme} from '../../ui';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Platform, ScrollView, TouchableOpacity} from 'react-native';
import Tags from 'react-native-tags';
import Entypo from 'react-native-vector-icons/Entypo';

const AddProduct = ({navigation}) => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <HeaderTitleCard
        title="Add Product"
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <ImagePickerContainer>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <AntDesign name="plus" size={30} color="rgba(0, 0, 0, 0.2)" />
            <AddPhotoText>Add photos</AddPhotoText>
            <SizeText>1600 x 1200 for hi res</SizeText>
          </TouchableOpacity>
        </ImagePickerContainer>
        <NoOfPicText>Max. 4 photos per product</NoOfPicText>
        <MainContainer>
          <Label>Product Name</Label>
          <TextInput />
          <Label>Catagory Product</Label>
          <TextInput />
          <RowContainer>
            <View style={{width: 80}}>
              <Label>Price</Label>
              <TextInput maxLength={4} />
            </View>
            <View style={{width: 80}}>
              <Label>Offer Price</Label>
              <TextInput maxLength={4} />
            </View>
          </RowContainer>
          <Label>Location Details</Label>
          <TextInput />
          <Label>Product Description</Label>
          <TextInput multiline />
          <Label>Price type</Label>
          <TextInput />
          <Label>Additional Details</Label>
          <Tags
            onChangeTags={tags => console.log(tags)}
            inputStyle={{backgroundColor: 'white'}}
            onTagPress={(index, tagLabel, event, deleted) =>
              console.log(
                index,
                tagLabel,
                event,
                deleted ? 'deleted' : 'not deleted',
              )
            }
            renderTag={({tag, index, onPress, deleteTagOnPress, readonly}) => (
              <TagTextView>
                <TagText>{tag}</TagText>
                <TouchableOpacity onPress={onPress}>
                  <Entypo
                    name="cross"
                    size={15}
                    color={theme.colors.darkGrey50}
                  />
                </TouchableOpacity>
              </TagTextView>
            )}
          />
        </MainContainer>
      </ScrollView>

      <ButtonContainer>
        <SimpleButton
          text="Add"
          buttonColor={theme.colors.primary}
          textColor={theme.colors.white}
        />
      </ButtonContainer>
    </Container>
  );
};

export default AddProduct;

const Container = styled.KeyboardAvoidingView({
  flex: 1,
  backgroundColor: theme.colors.background,
});

const ImagePickerContainer = styled.View({
  width: 140,
  height: 105,
  borderWidth: 1,
  borderStyle: 'dashed',
  borderColor: theme.colors.darkGrey50,
  borderRadius: 8,
  margin: 21,
  justifyContent: 'center',
  alignItems: 'center',
});

const AddPhotoText = styled.Text({
  fontSize: theme.fontSize.xxsmallText_14,
  fontFamily: theme.fontFamilies.smallHeading,
  color: 'rgba(0, 0, 0, 0.4)',
});

const SizeText = styled.Text({
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: 10,
  fontFamily: theme.fontFamilies.text,
});

const NoOfPicText = styled.Text({
  color: theme.colors.darkGrey50,
  fontSize: theme.fontSize.xxsmallText_14,
  fontFamily: theme.fontFamilies.text,
  marginLeft: 21,
});

const MainContainer = styled.View({
  flex: 1,
  backgroundColor: theme.colors.white,
  padding: 21,
  marginTop: 25,
});

const Label = styled.Text({
  color: theme.colors.darkGrey50,
  fontSize: theme.fontSize.xxsmallText_14,
  fontFamily: theme.fontFamilies.text,
});

const TextInput = styled.TextInput({
  color: theme.colors.darkGrey80,
  fontSize: theme.fontSize.smallText_16,
  fontFamily: theme.fontFamilies.largeText,
  borderBottomWidth: 0.2,
  marginBottom: 15,
  padding: 5,
  width: '90%',
});

const RowContainer = styled.View({
  justifyContent: 'space-between',
  flexDirection: 'row',
});

const DescriptionText = styled.Text({
  fontSize: theme.fontSize.smallText_16,
  fontFamily: theme.fontFamilies.text,
  color: theme.colors.darkGrey50,
  marginTop: 15,
  marginBottom: 15,
});

const ButtonContainer = styled.View({
  padding: 10,
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
