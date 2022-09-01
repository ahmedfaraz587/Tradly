import React from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import {HeaderCard} from '../../components';
import {Divider} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderCard
          text="Profile"
          onFavoritePress={() => navigation.navigate('Wishlist')}
          onCartPress={() => navigation.navigate('CheckoutNavigation')}
        />
        <UserDetailContainer>
          <AvatarContainer>
            <Avatar source={{uri: 'https://picsum.photos/100'}} />
            <OnlineStatus />
          </AvatarContainer>
          <NameContainer>
            <Name>Ahmed</Name>
            <Contact>302739498263</Contact>
            <Contact>ahmed21@gmail.com</Contact>
          </NameContainer>
        </UserDetailContainer>
      </HeaderContainer>
      <MainContainer>
        <TouchableOpacity>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Text>Language & Currency</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Text>Feedback</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Text>Refer a Friend</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Text>Terms & Conditions</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Logout>Logout</Logout>
        </TouchableOpacity>
      </MainContainer>
    </Container>
  );
};

export default Profile;

const Container = styled.View({
  flex: 1,
  backgroundColor: theme.colors.background,
});

const HeaderContainer = styled.View({
  height: '45%',
  backgroundColor: theme.colors.primary,
  padding: 15,
});

const UserDetailContainer = styled.View({
  marginTop: 30,
  padding: 20,
  flexDirection: 'row',
  alignItems: 'center',
});

const AvatarContainer = styled.View({
  height: 64,
  width: 64,
  borderRadius: 40,
});

const OnlineStatus = styled.View({
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: theme.colors.white,
  alignSelf: 'flex-end',
  marginTop: '-40%',
  marginRight: 5,
});

const Avatar = styled.Image({
  height: 64,
  width: 64,
  borderRadius: 32,
  borderWidth: 2,
  borderColor: 'white',
});

const Name = styled.Text({
  fontSize: theme.fontSize.xxsmallText_14,
  color: theme.colors.white,
  fontFamily: theme.fontFamilies.heading,
});

const Contact = styled.Text({
  fontSize: theme.fontSize.xxsmallText_14,
  color: theme.colors.white,
  fontFamily: theme.fontFamilies.largeText,
});

const NameContainer = styled.View({
  marginLeft: 15,
});

const MainContainer = styled.View({
  backgroundColor: theme.colors.white,
  height: 266,
  marginTop: '-30%',
  borderRadius: 10,
  width: '90%',
  alignSelf: 'center',
});

const Text = styled.Text({
  fontSize: theme.fontSize.xxsmallText_14,
  color: theme.colors.darkGrey50,
  fontFamily: theme.fontFamilies.largeText,
  padding: 13,
  marginLeft: 5,
});

const Logout = styled.Text({
  fontSize: theme.fontSize.xxsmallText_14,
  color: theme.colors.primary,
  fontFamily: theme.fontFamilies.largeText,
  padding: 13,
  marginLeft: 5,
});
