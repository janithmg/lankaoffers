import { StyleSheet, Text, View, Dimensions, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../../redux/Actions/SupermarketAction';
import OfferCard from './OfferCard';
import SVGicon from '../../../assets/icon/share.svg'
import { useNavigation } from '@react-navigation/native';
var { width } = Dimensions.get('window');
var {hight} = Dimensions.get('window');

const supermarketOffers = [
  { id: 0, company:'KL001',offerName: 'apple kl', realValue: 250.00, rate: 4.8, image: require('../../../assets/images/home-supermarket-keels.png') },
  { id: 1, company:'CS002',offerName: 'apple CS002', realValue: 500.00, rate: 4.5, image: require('../../../assets/images/home-supermarket-keels.png') },
  { id: 2, company:'KL001',offerName: 'apple kl', realValue: 400.00, rate: 4.8, image: require('../../../assets/images/home-supermarket-keels.png') },
  { id: 3, company:'KL001',offerName: 'apple kl', realValue: 750.00, rate: 4.3, image: require('../../../assets/images/home-supermarket-keels.png') },
  { id: 4, company:'CS002',offerName: 'apple CS002', realValue: 460.00, rate: 4.8, image: require('../../../assets/images/home-supermarket-keels.png') },
  { id: 5, company:'CS002',offerName: 'apple CS002', realValue: 850.00, rate: 4.7, image: require('../../../assets/images/home-supermarket-keels.png') },
  { id: 6, company:'CS002',offerName: 'apple CS002', realValue: 352.00, rate: 4.4, image: require('../../../assets/images/home-supermarket-keels.png') }
];
export default function AllOffer({supermarketsKey, supermarketName}) {
  const navigation = useNavigation();

console.log('offer -',supermarketsKey, supermarketName)

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          color: '#303733',
          textAlign: 'left',
        }}>
        {supermarketName} 
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SuperMarket')}>
        <Text>
        Go backd
        </Text>
      </TouchableOpacity>
     
      <View style={styles.productCard}
      >
        {supermarketOffers &&
          supermarketOffers.map((supermarketOffers, id) => (
            // <OfferCard
            //   supermarketOffers={supermarketOffers}
            // />
           <View>
           <OfferCard
              supermarketOffers={supermarketOffers}
              />
          </View>
          ))}
      </View>
    </ScrollView>

  )
}


const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    marginVertical: 10,
    marginBottom: width / 6 - 5,
  },
  productCard: {
    width: width - 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }
});