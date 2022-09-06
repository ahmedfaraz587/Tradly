import 'react-native-gesture-handler';
import React, {useContext, useEffect, useState} from 'react';
import MainStack from './src/navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import ModeContext from './src/contexts/modeContext';
import {LogBox} from 'react-native';
import {mode} from './src/contexts/mode';
import languageContext from './src/contexts/languageContext';
import { strings } from './localization';
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lan, setLan] = useState('');

  useEffect(()=>{
    strings.setLanguage(lan);
    console.log('[lang ---->>>]', lan);
  },[lan])

  LogBox.ignoreAllLogs();
  return (
    <languageContext.Provider value={{lan,setLan}}>
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
    </languageContext.Provider>
  );
};

export default App;
