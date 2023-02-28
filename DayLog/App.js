import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './context/LogContext';
import {SearchConextProvider} from './context/SearchContext';

function App() {
  return (
    <NavigationContainer>
      <SearchConextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchConextProvider>
    </NavigationContainer>
  );
}

export default App;
