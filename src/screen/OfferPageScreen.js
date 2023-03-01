import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../components/Layouts/Header'
import OfferPage from '../components/Layouts/OfferPage/OfferPage'


const OffersPageScreen = ({ route, }) => {
    // const { supermarketsKey , supermarketName} = route.params;
    // console.log(supermarketsKey)
    const { supermarketOfferPage } = route.params;
console.log(supermarketOfferPage.company+"test")
    return (
        <ScrollView>
            <OfferPage
                supermarketOfferPage={(supermarketOfferPage)}
            />

        </ScrollView>
    )
}
export default OffersPageScreen 