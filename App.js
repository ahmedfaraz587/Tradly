import 'react-native-gesture-handler';
import React, {useContext, useEffect, useState} from 'react';
import MainStack from './src/navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import ModeContext from './src/contexts/modeContext';
import {LogBox} from 'react-native';
import {mode} from './src/contexts/mode';
import i18n from './src/languages/i18n';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  LogBox.ignoreAllLogs();
  return (
    <ModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        mode: isDarkMode ? mode.dark : mode.light,
      }}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ModeContext.Provider>
  );
};

export default App;
