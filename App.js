import 'react-native-gesture-handler';
import React from 'react';
import styled from 'styled-components/native';
import StoryBook from './src/screens/StoryBook';
import MainStack from './src/navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  background-color: blue;
`;

const App = () => {
  return (
    <Container>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Container>
  );
};

export default App;
