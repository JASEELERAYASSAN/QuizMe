import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Result({ navigation, route }) {

    const { score } = route.params
    const resultBanner = score >= 40 ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png" : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"
   
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.png')}
                style={styles.backgroundImage}>
                    <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>QUIZ ME</Text>
                </View>
                <Text style={styles.scoreValue}>{score}</Text>
                <View style={styles.bannerContainer}>
                    <Image
                        source={{
                            uri: resultBanner,
                        }}
                        style={styles.banner}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.buttonContainerView}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Text style={styles.buttonText}>GO TO HOME</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    banner: {
        height: hp('40'),
        width: wp('60'),
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    backgroundImage: {
        height: hp('100%'),
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTextView: {
        marginTop:hp('8.5'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: hp('2.5'),
        fontWeight: 'bold',
        color: '#213363',
        letterSpacing:hp('.2')
    },
    buttonContainerView: {
        justifyContent: 'center',
        flexDirection: 'column',
        height: hp('20'),
        width: wp('90'),
        alignItems: 'flex-end'
    },
    button: {
        backgroundColor: '#000',
        alignItems: 'center',
        height: hp('5'),
        width: wp('90'),
        borderRadius: wp('2')
    },
    buttonText: {
        fontSize: hp('2'),
        fontWeight: 'bold',
        color: 'white',
        marginTop: hp('1')
    },
    scoreValue: {
        fontSize: hp('2.5'),
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});