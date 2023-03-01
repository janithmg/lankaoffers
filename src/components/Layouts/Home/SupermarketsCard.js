import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';


var { width } = Dimensions.get('window');

const SupermarketsCard = ({ supermarkets  }) => {
  const [click, setClick] = useState(false);
  const navigation = useNavigation();
  let supermarketsKey = supermarkets.company;
  let supermarketName = supermarkets.name;
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('Offers',{supermarketsKey:supermarketsKey, supermarketName:supermarketName});}}>
      <View style={styles.ProductCard} key={supermarkets.id} >
        <Image source={supermarkets.image} resizeMode={'contain'} style={styles.image} />
      </View>
    </TouchableOpacity>


  );
}
export default SupermarketsCard
const styles = StyleSheet.create({
  ProductCard: {
    width: width / 2 - 30,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: '#F2F2F2',
    flexWrap: 'wrap',
    margin: 10,
    padding: 10
  },
  image: {
    width: '100%',
    height: width / 2 - 100,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  outOfStock: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    top: -10,
    left: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});