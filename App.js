import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {theme} from './src/ui';
import SimpleButton from './src/components/buttons/SimpleButton';

const Container = styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <Container>
      <SimpleButton onPress={() => alert('ok')} text="click" 
      textColor='red' buttonColor='pink'
      />
    </Container>
  );
};

export default App;
