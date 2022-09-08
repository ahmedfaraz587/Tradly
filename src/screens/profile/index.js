import React, {useContext} from 'react';
import styled from 'styled-components';
import {theme} from '../../ui';
import {HeaderCard} from '../../components';
import {Divider} from 'react-native-paper';
import {Switch, TouchableOpacity, View} from 'react-native';
import modeContext from '../../contexts/modeContext';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {
  const {t} = useTranslation();
  const {isDarkMode, setIsDarkMode, mode} = useContext(modeContext);
  return (
    <Container color={mode.backgroundColor}>
      <HeaderContainer backgroundColor={mode.primary}>
        <HeaderCard
          text={t('profile.title')}
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
      <MainContainer color={mode.foregroundColor}>
        <TouchableOpacity>
          <Text textColor={mode.textColor}>{t('profile.editProfile')}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Text textColor={mode.textColor}>
            {t('profile.language&Currency')}
          </Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Text textColor={mode.textColor}>{t('profile.feedback')}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Text textColor={mode.textColor}>{t('profile.referAFriend')}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Text textColor={mode.textColor}>
            {t('profile.terms&Conditions')}
          </Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          onPress={() =>
            auth()
              .signOut()
              .then(() => console.log('User signed out!'))
          }>
          <Logout>{t('profile.logout')}</Logout>
        </TouchableOpacity>
      </MainContainer>
      <Switch
        value={isDarkMode}
        onValueChange={value => setIsDarkMode(value)}
      />
    </Container>
  );
};

export default Profile;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.color};
`;

const HeaderContainer = styled.View({
  height: '45%',
  backgroundColor: props => props.backgroundColor,
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
  backgroundColor: props => props.color,
  height: 266,
  marginTop: '-30%',
  borderRadius: 10,
  width: '90%',
  alignSelf: 'center',
  elevation: 2,
});

const Text = styled.Text({
  fontSize: theme.fontSize.xxsmallText_14,
  color: props => props.textColor,
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
