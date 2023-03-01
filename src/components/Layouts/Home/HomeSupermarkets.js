import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import React, { useEffect } from 'react';
import SupermarketsCard from './SupermarketsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../../redux/Actions/SupermarketAction';
var { width } = Dimensions.get('window');

const supermarkets = [
  { id: 0, company:'KL001',name: 'Keels Super',type: "populer", image: require('../../../assets/images/home-supermarket-keels.png') },
  { id: 1, company:'CS002',name: 'Cagills Super',type: "populer", image: require('../../../assets/images/home-supermarket-cargills.png') },
  { id: 2, company:'',name: 'Keels Super',type: "No", image: require('../../../assets/images/home-supermarket-keels.png') },
  { id: 3, company:'',name: 'Keels Super',type: "No", image: require('../../../assets/images/home-supermarket-keels.png') },
  { id: 4, company:'',name: 'Keels Super',type: "No", image: require('../../../assets/images/home-supermarket-keels.png') },
  { id: 5, company:'',name: 'Keels Super',type: "populer", image: require('../../../assets/images/home-supermarket-keels.png') },
  { id: 6, company:'',name: 'Keels Super',type: "populer", image: require('../../../assets/images/home-supermarket-keels.png') }
];
export default function HomeSupermarkets() {
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          color: '#303733',
          textAlign: 'left',
        }}>
        Explore Populer Super Markets
      </Text>
      <View style={styles.productCard}
      >
        {supermarkets &&
          supermarkets.map((supermarkets, id) => (
    
            <View>
              {
                supermarkets.type == "populer" ? <SupermarketsCard
                  supermarkets={supermarkets}
                  
                /> : null
              }
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
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }
});