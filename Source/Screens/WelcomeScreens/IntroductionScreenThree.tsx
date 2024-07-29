import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SimpleButton from '../../Components/SimpleButton';
import GrayBar from '../../Components/GrayBar';
import { CommonActions, useNavigation } from '@react-navigation/native';
import SimpleHeader from '../../Components/SimpleHeader';

const IntroductionScreenThree = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <CustomStatusBar />

            <ImageBackground style={styles.backgroundImg}
                source={require('../../Assets/Images/Intro_Slider/slideBg3.png')}>

                <View style={{
                    flex: 1,
                    marginTop: "15%",
                    justifyContent: 'space-between',
                }}>
                    <SimpleHeader
                        IsBackIcon={true}
                        OnBackPress={() => { navigation.goBack() }}
                        IconColor={Colors.WHITE}
                        BackIconBgColor={{ backgroundColor: Colors.WHITE_HEX_COLOR }}
                    />

                    <View style={{ marginTop: "60%", marginHorizontal: wp(10) }}>
                        <Text style={styles.slideTitle}>Control{"\n"}and Automation</Text>
                        <Text style={styles.slideDescp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.</Text>
                    </View>

                    <View style={{ marginBottom: hp(13) }}>
                        <View style={styles.barBox}>
                            <GrayBar BarStyle={styles.inactiveBar} />
                            <GrayBar BarStyle={styles.inactiveBar} />
                            <GrayBar BarStyle={styles.activeBar} />
                        </View>

                        <View style={styles.buttonWrapper}>
                            <SimpleButton
                                OnAction={() => { navigation.navigate("LoginScreen") }}
                                ButtonTitle={"Login"}
                                ButtonStyle={{
                                    width: wp(80),
                                    height: hp(7),
                                    backgroundColor: Colors.WHITE_BG,
                                }}
                                ButtonTitleStyle={{
                                    fontSize: hp(2.5),
                                    color: Colors.PRIMARY_COLOR
                                }}
                            />
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default IntroductionScreenThree

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
        marginTop: "80%",
        marginHorizontal: wp(10),
        justifyContent: 'space-between'
    },
    barBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: wp(20),
        marginBottom: hp(2),
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

    slideTitle: {
        fontSize: hp(2.7),
        fontWeight: '500',
        color: Colors.WHITE_TEXT_COLOR,
        textAlign: 'center',
    },
    slideDescp: {
        fontSize: hp(2.1),
        color: Colors.WHITE_TEXT_COLOR,
        textAlign: 'center',
        marginTop: hp(1),
    },
    buttonWrapper: {
        alignItems: 'center',
    },
})