import 'react-native-gesture-handler';
import React from 'react';
import styled from 'styled-components/native';
import MainStack from './src/navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import { LogBox } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: blue;
`;

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Container>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Container>
  );
};

export default App;
