import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/Home';
import SM from '../screen/SuperMarketsScreen';
import SupermarketOffersScreen from '../screen/OffersScreen';
import OfferPageScreen from '../screen/OfferPageScreen';
import AllOffersScreen from '../screen/AllOffersScreen';
import AllOffers from '../screen/AllOffersScreen';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function getHeaderTitle(route) {
//     const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
//     switch (routeName) {
//         case 'Home':
//             return 'News feed';
//         case 'SM':
//             return 'My SM';

//     }
// }


function HomeStackScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name='Offers' component={SupermarketOffersScreen} />
            <Stack.Screen name='OfferPageScreen' component={OfferPageScreen}/>
        </Stack.Navigator>
    );
}
const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name='Home' component={HomeStackScreen} />
                <Tab.Screen name='SuperMarket' component={SM} />
                <Tab.Screen name='All Offers' component={AllOffersScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )

}

export default Tabs;