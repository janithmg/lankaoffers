import React, { Component } from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const Login = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                {/* <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../assets/images/loginbg.jpg')} />
                </View> */}
                <View style={{ padding: 10 }}>
                    <View style={styles.formInput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/lo-logo-dark.png')} resizeMode={'contain'} style={{ with: 200, height: 200 }} />
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Your email address" />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} />
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity>
                            <Text style={{ color: '#db2218', textAlign: 'right', fontWeight: 'bold' }}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButtons}>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <Text style={{ textAlign: 'center' }}>or</Text>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity >
                                <ImageBackground style={{ width: 40, height: 40, borderRadius: 1000 }} source={require('../../assets/images/google-logo.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <ImageBackground style={{ width: 40, height: 40, borderRadius: 1000 }} source={require('../../assets/images/facebook-logo.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{ height: 1, backgroundColor: '#ddd', width: '100%' }}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity>
                            <Text style={{ color: '#14b53f', textAlign: 'left', fontWeight: 'bold' }}>Need Account ? Registor Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, defaultBg: {
        width: "100%",
        height: 120
    }, formInput: {
        marginTop: 10,
        padding: 10
    }, textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        borderRadius: 10
    }, defaultButtons: {
        padding: 15,
        backgroundColor: '#4283f5',
        borderRadius: 1,

    }
});
export default Login;
