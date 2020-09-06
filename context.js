import React from 'react';
import {useColorScheme} from 'react-native';

import {LightTheme, DarkTheme} from './themes';

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  
  return (
    <AppContext.Provider
      value={{
        theme: useColorScheme() == 'light' ? LightTheme : DarkTheme
      }} >

      {children}
    </AppContext.Provider>
  );
};
