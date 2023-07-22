import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.png')}
                style={styles.backgroundImage}>
                <View style={styles.container}>
                    <Text style={styles.title}>Computer Quiz</Text>
                </View>
                <View style={styles.bannerContainer}>
                    <Image
                        source={{
                            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/online-test-5727897-4788138.png',
                        }}
                        style={styles.banner}
                        resizeMode="contain"
                    />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('QuizScreen')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    banner: {
        height: 400,
        width: 400,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#1e8a2e',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    button: {
        width: '90%',
        backgroundColor: '#a820e3',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '500',
        color: 'white',
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
})