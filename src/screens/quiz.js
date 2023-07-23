import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { SkypeIndicator } from 'react-native-indicators'
import api, { baseURL } from '../api/axios'


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

export default function Quiz({ navigation }) {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const getQuiz = async (amount = 10, category = 18) => {
        setIsLoading(true)
        try {
            const response = await api.get(baseURL, {
                params: {
                    amount,
                    category,
                    type: 'multiple',
                    encode: 'url3986',
                }
            })
            setQuestions(response.data.results)
            setOptions(generateOptionsAndShuffle(response.data.results[0]))
            setIsLoading(false);
        } catch (error) {
            console.error('Error questions:', error);
        }
    }

    useEffect(() => {
        getQuiz();
    }, []);

    const handleNextPress = () => {
        setQues(ques + 1);
        setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    };

    const generateOptionsAndShuffle = (question) => {
        const options = [...question.incorrect_answers];
        options.push(question.correct_answer);
        shuffleArray(options);
        return options;
    };

    const handlSelectedOption = (option) => {
        if (option === questions[ques].correct_answer) {
            setScore(score + 10);
        }
        if (ques !== 9) {
            setQues(ques + 1);
            setOptions(generateOptionsAndShuffle(questions[ques + 1]));
        }
        if (ques === 9) {
            handleShowResult();
        }
    };

    const handleShowResult = () => {
        navigation.navigate('Result', {
            score: score,
        });
    };

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.spinningView}>
                    <SkypeIndicator color='#5C8984' size={50} />
                </View>
            ) : questions && (
                <View style={styles.quizContainerView}>
                    <View style={styles.quizView}>
                        <Text style={styles.question}>
                            Q - {decodeURIComponent(questions[ques].question)}
                        </Text>
                    </View>
                    <View style={styles.optContainerView}>
                        <TouchableOpacity
                            style={styles.optionButtom}
                            onPress={() => handlSelectedOption(options[0])}>
                            <Text style={styles.option}>
                                {decodeURIComponent(options[0])}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionButtom}
                            onPress={() => handlSelectedOption(options[1])}
                        >
                            <Text style={styles.option}>
                                {decodeURIComponent(options[1])}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionButtom}
                            onPress={() => handlSelectedOption(options[2])}
                        >
                            <Text style={styles.option}>
                                {decodeURIComponent(options[2])}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionButtom}
                            onPress={() => handlSelectedOption(options[3])}
                        >
                            <Text style={styles.option}>
                                {decodeURIComponent(options[3])}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainerView}>
                        {ques !== 9 && (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleNextPress}>
                                <Text style={styles.buttonText}>SKIP</Text>
                            </TouchableOpacity>
                        )}
                        {ques === 9 && (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleShowResult}>
                                <Text style={styles.buttonText}>SHOW RESULTS</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#EEE2DE'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinningView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    quizContainerView: {
        height: hp('70%'),
        width: wp('90'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    quizView: {
        minHeight: hp('10'),
        width: wp('90'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#5C8984',
        borderRadius:wp('2'),
        marginTop: hp('10'),
    },
    optContainerView: {
        marginTop: hp('10'),
        height: hp('25'),
        width: wp('90'),
    },
    buttonContainerView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: hp('30'),
        width: wp('90'),
        alignItems: 'flex-end'
    },
    button: {
        backgroundColor: '#5C8984',
        alignItems: 'center',
        height: hp('5'),
        width: wp('40'),
        borderRadius: wp('2')
    },
    buttonText: {
        fontSize: hp('2'),
        fontFamily: 'Roboto-Bold',        
        color: '#fff',
        marginTop: hp('1')
    },
    question: {
        fontSize: hp('2'),
        fontFamily: 'Roboto-Bold',
        color: '#fff',
        margin:hp('2')
    },
    option: {
        fontSize: hp('2'),
        fontFamily: 'Roboto-Bold',
        color: '#27374D',
        textAlign: 'center',
        marginTop: hp('1.25')
    },
    optionButtom: {
        minHeight: hp('5'),
        width: wp('90'),
        borderRadius: wp('2'),
        backgroundColor: '#9DB2BF',
        marginTop: hp('1')
    },
})