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


var { width } = Dimensions.get('window');
var { height } = Dimensions.get('window');


// function OfferPage({ supermarketOffers, navigation }) {

function OfferPage({ supermarketOfferPage }) {
    const [click, setClick] = useState(false);

    console.log(supermarketOfferPage.company + "223");
    return (
        <View style={styles.OfferPage}>
            <View >
                <Text style={styles.OfferCardTitle}>{supermarketOfferPage.offerName}</Text>
            </View>
            <View style={{ width: "100%", borderRadius: 10, elevation: 8, backgroundColor: '#F2F2F2' }}>
                <TouchableOpacity onPress={() => { console.log("ok") }}>
                    <Image source={supermarketOfferPage.image} resizeMode={'contain'} style={styles.image} />
                </TouchableOpacity>
                <View style={styles.OfferCardContainer}>
                    <Text>{supermarketOfferPage.offerName}</Text>
                </View>
                <View style={{ position: 'relative', height: 40 }}>
                    <View style={styles.iconleft}>
                        <Text>Rs {supermarketOfferPage.realValue}</Text>
                    </View>
                    <View style={styles.iconright}>
                        <Star height={30} width={30} />
                        <Text>{supermarketOfferPage.rate}</Text>
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
export default OfferPage

const styles = StyleSheet.create({
    OfferPage: {
        width: width - 20,
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
        fontSize: 50,
        padding: 10,
        position:'relative'
    },
    OfferCardTitle:{
        fontSize:30,
        paddingBottom: 10,
        
    },
    image: {
        width: '100%',
        height: height * .65,
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