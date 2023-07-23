import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: 'https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg' }}
                style={styles.backgroundImage}>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>QUIZ ME</Text>
                </View>
                <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz')}
                    style={styles.buttonContainerView}>
                    <Text style={styles.buttonText}>START QUIZ</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    backgroundImage: {
        height: hp('100'),
        width: wp('100'),
        resizeMode:'contain'
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
    buttonView:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    buttonContainerView: {
        height: hp('6'),
        width: wp('90'),
        backgroundColor: '#525FE1',
        borderRadius: wp('2.5'),
        marginBottom:hp('5')
    },
    buttonText: {
        fontSize: hp('1.89'),
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center',
        marginTop:hp('1.5'),
        letterSpacing:hp('.2')
    },
})