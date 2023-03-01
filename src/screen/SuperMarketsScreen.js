import React from 'react'
import { ScrollView } from 'react-native'
import Header from '../components/Layouts/Header'
import Supermarkets from '../components/Layouts/Supermarkets/SuperMarkets'


const SupermarketsScreen = () => {
    return (
        <ScrollView>
            <Header />
            <Supermarkets />
        </ScrollView>
    )
}
export default SupermarketsScreen 