import React from 'react'
import { ScrollView } from 'react-native'
import Header from '../components/Layouts/Header'
import HomeSlider from '../components/Layouts/Home/HomeSlider'
import HomeSupermarkets from '../components/Layouts/Home/HomeSupermarkets'


const Home = () => {
    return (
        <ScrollView>
            <Header />
            <HomeSlider />
            <HomeSupermarkets />
        </ScrollView>
    )
}
export default Home