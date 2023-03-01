import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import React, { useRef } from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";
var { width } = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerFlex}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu-outline" size={40} color="#7D8FAB" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Icon name="search-outline" size={20} style={styles.searchIcon} />
          </TouchableOpacity>
          <TextInput
            placeholder="search users"
            placeholderTextColor="#7D8FAB"
            style={styles.searchBox}
          />

        </View></View>
    </View>
  )
}
export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: '#fff',
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    marginLeft:10,
    fontSize: 15,
    color: "#333",
    paddingHorizontal: 10,
    position: "relative",
    zIndex: -1
  },
  searchIcon: {
    bottom: -12,
    left: 10,
  },
  searchContainer:{
    flexDirection: 'row', 
    width: width - 80,
    height: width / 7 - 15,
    backgroundColor: "#EFF1F3",
    marginHorizontal: 10,
    borderRadius: 10,
  }
});