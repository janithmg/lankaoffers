import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ShareIcon from '../../../assets/icon/share.svg';
import Star from '../../../assets/icon/star.svg';
import HeartIcon from '../../../assets/icon/heart7.svg';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';


var { width } = Dimensions.get('window');

function OfferCard({ supermarketOffers }) {
    const [click, setClick] = useState(false);
    const navigation = useNavigation();
const supermarketOfferPage = supermarketOffers;
console.log(supermarketOfferPage)
    return (

        <View style={styles.OfferCard} key={supermarketOffers.id}>
            <View style={{ width: "100%", borderRadius: 10, elevation: 8, backgroundColor: '#F2F2F2' }}>
                <TouchableOpacity onPress={() => { navigation.navigate('OfferPageScreen',{supermarketOfferPage:supermarketOfferPage});}}>
                    <Image source={supermarketOffers.image} resizeMode={'contain'} style={styles.image} />
                </TouchableOpacity>
                <View style={styles.OfferCardContainer}>
                    <Text>{supermarketOffers.offerName}</Text>
                </View>
                <View style={{ position: 'relative', height: 40 }}>
                    <View style={styles.iconleft}>
                        <Text>Rs {supermarketOffers.realValue}</Text>
                    </View>
                    <View style={styles.iconright}>
                        <Star height={30} width={30} />
                        <Text>{supermarketOffers.rate}</Text>
                    </View>
                </View>
                <View style={{ position: 'relative', height: 40 }}>
                    <View style={styles.iconleft}>
                        <HeartIcon height={30} width={30} />
                    </View>
                    <View style={styles.iconright}>
                        <ShareIcon height={30} width={30} />
                    </View>
                </View>
            </View>
        </View>
    );
}
export default OfferCard
const styles = StyleSheet.create({
    OfferCard: {
        width: width - 40,
        borderRadius: 10,
        elevation: 8,
        backgroundColor: '#F2F2F2',
        flexWrap: 'wrap',
        margin: 10,
        padding: 10
    },
    OfferCardContainer: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        flexWrap: 'wrap',
        padding: 10
    },
    image: {
        width: '100%',
        height: width / 2 - 50,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    iconleft: {
        left: 10,
    },
    iconright: {
        bottom: 10,
        right: 10,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    }
});