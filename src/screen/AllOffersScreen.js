import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../components/Layouts/Header'
import AllOffer from '../components/Layouts/Offers/AllOffer'
import SupermarketOffers from '../components/Layouts/Offers/Offers'


const AllOffersScreen = ({ route, }) => {
   // const { supermarketsKey, supermarketName } = route.params;
    // console.log(supermarketsKey)
    return (
        <ScrollView>
            <Header />
            <AllOffer />
        </ScrollView>
    )
}
export default AllOffersScreen 