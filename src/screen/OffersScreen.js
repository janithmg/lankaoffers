import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../components/Layouts/Header'
import SupermarketOffers from '../components/Layouts/Offers/Offers'


const OffersScreen = ({ route,  }) => {
    const { supermarketsKey , supermarketName} = route.params;
    // console.log(supermarketsKey)
    return (
        <ScrollView>
            <Header />
            <SupermarketOffers 
                    supermarketsKey={(supermarketsKey)}
                    supermarketName={(supermarketName)}
                    />
                    {/* {console.log("test -",supermarketsKey)} */}
            {/* <View>
                {
                    supermarketsKey ? <AllOffers 
                   
                    />:
                }
            </View> */}
        </ScrollView>
    )
}
export default OffersScreen 