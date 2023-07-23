import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import ConfettiCannon from 'react-native-confetti-cannon';

export default function Result({ navigation, route }) {

    const { score } = route.params
    const resultBanner = score >= 40 ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png" : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"
    const [fire, setFire] = useState(false)
    const result = score >= 40 ? 'Congrats':'Please try again'


    useEffect(() => {
        if (score >= 40) {
            setFire(true)
        } else {
            setFire(false)
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Your Score</Text>
            </View>
            <View style={styles.headerScoreView}>
                <Text style={styles.scoreValue}>{score}</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image
                    source={{ uri: resultBanner }}
                    style={styles.banner}
                    resizeMode="contain" />
            </View>
            <View style={styles.headerResultView}>
                <Text style={styles.resultStatus}>{result}</Text>
            </View>
            <View style={styles.buttonContainerView}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Text style={styles.buttonText}>GO TO HOME</Text>
                </TouchableOpacity>
            </View>
            {fire ?
                <ConfettiCannon
                    count={250}
                    origin={{ x: -10, y: 0 }}
                    fadeOut='false'
                    autoStart='true' />
                : null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE2DE'
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
        marginTop: hp('8.5'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: hp('2'),
        fontFamily: 'Roboto-Bold',
        color: '#213363',
        letterSpacing: hp('.2')
    },
    headerScoreView: {
        marginTop: hp('5'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerResultView:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainerView: {
        justifyContent: 'center',
        flexDirection: 'column',
        height: hp('20'),
        width: wp('90'),
        alignItems: 'flex-end'
    },
    button: {
        backgroundColor: '#5C8984',
        alignItems: 'center',
        height: hp('5'),
        width: wp('90'),
        borderRadius: wp('2')
    },
    buttonText: {
        fontSize: hp('2'),
        fontFamily: 'Roboto-Bold',
        color: 'white',
        marginTop: hp('1')
    },
    scoreValue: {
        fontSize: hp('2'),
        fontFamily: 'Roboto-Bold',
        alignSelf: 'center',
        color: '#213363',
    },
    resultStatus: {
        fontSize: hp('2'),
        fontFamily: 'Roboto-Bold',
        alignSelf: 'center',
        color: '#213363',
    }
});