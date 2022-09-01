import React from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';
import {HeaderTitleCard, SimpleButton} from '../../components';
import {theme} from '../../ui';
import {appImages} from '../../utilities/assets';
import Tags from 'react-native-tags';

const CreateStore = ({navigation}) => {
  return (
    <Container>
      <HeaderTitleCard title="My Store" onPress={() => navigation.goBack()} />
      <ScrollView>
        <StoreImage source={appImages.mystore} resizeMode="contain" />
        <Textt>This information is used to set up your shop</Textt>
        <FormContainer>
          <Label>StoreName</Label>
          <Input />
          <Label>Store Web Address</Label>
          <Input />
          <Label>Store Description</Label>
          <Input />
          <Label>Store Type</Label>
          <Input />
          <Label>Address</Label>
          <Input />
          <Label>City</Label>
          <Input />
          <Label>Country</Label>
          <Input />
          <Label>Courier Name</Label>
          <Input />
          <Label>Tagline</Label>
          <Tags
            textInputProps={{
              placeholder: 'Any type of animal',
            }}
            onChangeTags={tags => console.log(tags)}
            onTagPress={(index, tagLabel, event, deleted) =>
              console.log(
                index,
                tagLabel,
                event,
                deleted ? 'deleted' : 'not deleted',
              )
            }
            containerStyle={{justifyContent: 'center'}}
            inputStyle={{backgroundColor: 'white'}}
            renderTag={({tag, index, onPress, d, readonly}) => (
              <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
                <Text
                  style={{
                    height: 30,
                    borderRadius: 15,
                    padding: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginLeft: 5,
                    backgroundColor: '#D8D8D8',
                  }}>
                  {tag}
                </Text>
              </TouchableOpacity>
            )}
          />
        </FormContainer>
      </ScrollView>

      <ButtonContainer>
        <SimpleButton
          text="Create"
          buttonColor={theme.colors.primary}
          textColor={theme.colors.white}
          onPress={() => navigation.navigate('MyStore')}
        />
      </ButtonContainer>
    </Container>
  );
};

export default CreateStore;

const Container = styled.View({
  flex: 1,
  backgroundColor: theme.colors.background,
});

const StoreImage = styled.Image({
  height: 200,
  width: 200,
  marginBottom: 20,
  alignSelf: 'center',
});

const Textt = styled.Text({
  fontSize: theme.fontSize.xxsmallText_14,
  fontFamily: theme.fontFamilies.largeText,
  textAlign: 'center',
  alignSelf: 'center',
  width: 250,
});

const FormContainer = styled.View({
  backgroundColor: theme.colors.white,
  marginTop: 15,
  marginBottom: 10,
  width: '100%',
  flex: 1,
  padding: 20,
});
const ButtonContainer = styled.View({
  padding: 15,
});

const Label = styled.Text`
  font-size: ${theme.fontSize.xxsmallText_14};
  font-family: ${theme.fontFamilies.text};
  color: ${theme.colors.darkGrey50};
  margin-left: 3px;
`;

const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${theme.colors.lightGrey};
  height: 40px;
  font-family: ${theme.fontFamilies.largeText};
  font-size: ${theme.fontSize.smallText_16};
  margin-bottom: 15px;
`;
