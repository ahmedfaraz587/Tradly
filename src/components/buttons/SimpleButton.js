import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const SimpleButton = props => {
  return (
    <Button
      mode="contained"
      onPress={props.onPress}
      buttonColor={props.buttonColor}
      textColor={props.textColor}
      style={styles.button}>
      {props.text}
    </Button>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  button: {height: 50, alignItems: 'center', justifyContent: 'center'},
});
