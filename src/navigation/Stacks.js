import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/Home';
import SM from '../screen/SuperMarketsScreen';
import SupermarketOffersScreen from '../screen/OffersScreen';
import AllOffers from '../screen/AllOffersScreen';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  
    switch (routeName) {
      case 'Home':
        return 'News feed';
      case 'SM':
        return 'My SM';
      
    }
  }
function HomeTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='SM' component={SM} />
        </Tab.Navigator>
    );
}


const Tabs = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Home"
                    component={HomeTabs}
                    options={({ route }) => ({
                        headerTitle: getHeaderTitle(route),
                    })}
                />
                <Stack.Screen name='Offers' component={SupermarketOffersScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Tabs;