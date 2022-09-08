import 'react-native-gesture-handler';
import React, {useContext, useEffect, useState} from 'react';
import MainStack from './src/navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import ModeContext from './src/contexts/modeContext';
import {LogBox} from 'react-native';
import {mode} from './src/contexts/mode';
import AuthStack from './src/navigation/AuthStack';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '899796682303-kumpgeck3m1hl93femh4siedarrstn50.apps.googleusercontent.com',
    });
  }, []);


  if (initializing) return null;

  LogBox.ignoreAllLogs();
  return (
    <ModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        mode: isDarkMode ? mode.dark : mode.light,
      }}>
      <NavigationContainer>
        {user ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </ModeContext.Provider>
  );
};

export default App;
