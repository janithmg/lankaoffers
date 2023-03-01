import React, { useState } from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/screen/auth/Login';
import Home from './src/screen/Home';
import { Provider } from 'react-redux';
import Store from './redux/Store'
import SupermarketsScreen from './src/screen/SuperMarketsScreen';
import Offers from './src/components/Layouts/Offers/Offers';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';

const App = () => {


  return (

    <Provider store={Store}>
      {/* <Login/> */}
      {/* <Home /> */}
      {/* <SupermarketsScreen/> */}
      {/* <Offers/> */}
      
        <Tabs />
      
    </Provider>
  )
}

const styles = StyleSheet.create({
  bosy: {
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'column'

  },
  item: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  text: {
    padding: 20
  }
})
export default App;
