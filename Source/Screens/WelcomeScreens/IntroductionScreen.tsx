import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SimpleButton from '../../Components/SimpleButton';
import Svg, { Use, Image, } from 'react-native-svg';
import GrayBar from '../../Components/GrayBar';

const IntroductionScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CustomStatusBar />

            <ImageBackground style={styles.backgroundImg}
                source={require('../../Assets/Images/Intro_Slider/slideBg1.png')}>

                <View style={styles.wrapper}>
                    <View style={{ flex: 1, marginTop: "18%" }}>
                        <Text style={styles.slideTitle}>Welcome to{"\n"}Water Purification</Text>
                        <Text style={styles.slideDescp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.</Text>
                    </View>

                    <View style={{ marginBottom: hp(5), }}>
                        <View style={styles.barBox}>
                            <GrayBar BarStyle={styles.activeBar} />
                            <GrayBar BarStyle={styles.inactiveBar} />
                            <GrayBar BarStyle={styles.inactiveBar} />
                        </View>

                        <View style={styles.buttonWrapper}>
                            <SimpleButton
                                OnAction={() => { navigation.navigate("IntroductionScreenTwo") }}
                                ButtonTitle={"Next"}
                                ButtonStyle={{
                                    width: wp(80),
                                    height: hp(7),
                                    backgroundColor: Colors.PRIMARY_BLUE,
                                }}
                                ButtonTitleStyle={{
                                    fontSize: hp(2.5),
                                    color: Colors.WHITE_TEXT_COLOR
                                }}
                            />

                            <View style={{ marginTop: hp(2), }}>
                                <SimpleButton
                                    OnAction={() => { navigation.navigate("LoginScreen") }}
                                    ButtonTitle={"Skip"}
                                    ButtonStyle={{
                                        width: wp(80),
                                        height: hp(7),
                                        backgroundColor: Colors.TRANSPARENT,
                                        borderWidth: 1,
                                        borderColor: Colors.PRIMARY_BLUE
                                    }}
                                    ButtonTitleStyle={{
                                        fontSize: hp(2.5),
                                        color: Colors.WHITE_TEXT_COLOR
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                </View>

            </ImageBackground>

        </View>
    )
}

export default IntroductionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    backgroundImg: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        marginTop: "78%",
        marginHorizontal: wp(10),
        justifyContent: 'space-between'
    },
    slideTitle: {
        fontSize: hp(2.7),
        fontWeight: '500',
        color: Colors.WHITE_TEXT_COLOR,
        textAlign: 'center',
        marginTop: hp(5),
    },
    slideDescp: {
        fontSize: hp(2.1),
        color: Colors.WHITE_TEXT_COLOR,
        textAlign: 'center',
        marginTop: hp(1),
    },
    barBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: wp(20),
    },
    activeBar: {
        width: wp(12),
        height: hp(0.5),
        backgroundColor: Colors.PRIMARY_BLUE,
    },
    inactiveBar: {
        width: wp(3),
        height: hp(0.5),
        backgroundColor: Colors.GRAY_BAR,
    },
    buttonWrapper: {
        alignItems: 'center',
        marginTop: "4%",
    },
})