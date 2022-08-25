import React from 'react';
import {ScrollView} from 'react-native';
import SimpleButton from '../components/buttons/SimpleButton';
import TextInputOutline from '../components/textinputs/TextInputOutline';
import styled from 'styled-components';
import {theme} from '../ui';

const Container = styled.View({
  flex: 1,
});
const Margin = styled.View({
  height: 20,
});
const StoryBook = () => {
  return (
    <ScrollView>
      <Container>
        <Margin />
        <SimpleButton
          textColor={theme.colors.black}
          buttonColor={theme.colors.white}
          onPress={() => alert('pressed')}
          text="click me"
        />
        <Margin />
        <TextInputOutline placeholder="Enter email" onTextChange={() => {}} />
        <Margin />
      </Container>
    </ScrollView>
  );
};

export default StoryBook;
