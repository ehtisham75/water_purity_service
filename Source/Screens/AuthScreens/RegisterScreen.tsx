import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SliderImage from '../../Components/SliderImage';
import SimpleButton from '../../Components/SimpleButton';
import Svg, { Use, SvgUri } from 'react-native-svg';
import GrayBar from '../../Components/GrayBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomTextinput from '../../Components/CustomTextinput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, CommonActions } from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
import Helper from '../../Data/Helper';

const helper = new Helper();

const RegisterScreen = () => {
    const navigation = useNavigation();

    const [isLoading, setisLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);

    useEffect(() => {
        console.log("===== agree terms ===>> ", agreeTerms)
    }, [agreeTerms])


    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleRegister = async () => {
        try {
            crashlytics().log(`=== >> User Registered in`);

            if (email == "") {
                helper.showTextToast("Please fill email.");
                return;
            }
            if (!helper.isValidEmail(email)) {
                helper.showTextToast("Wrong email.");
                return;
            }
            if (Password == "") {
                helper.showTextToast("Password Required.");
                return;
            }
            if (confirmPassword == "") {
                helper.showTextToast("Please confirm password.");
                return;
            }
            if (name == "") {
                helper.showTextToast("Please fill the name");
                return;
            }
            if (Password !== confirmPassword) {
                helper.showTextToast("Password is not matching.");
                return;
            }
            if (!agreeTerms) {
                helper.showTextToast("Agree our terms and policies");
                return;
            }
            if (email !== "" && Password !== "" && Password == confirmPassword && name !== "" && agreeTerms) {
                helper.showTextToast("Registered Successfully");
                navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [{ name: "LoginScreen" }],
                }));
                return;
            }

        } catch (error) {
            crashlytics().recordError(error);
            console.error('Registration error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <CustomStatusBar />

            <View style={styles.wrapper}>
                <ImageBackground
                    resizeMode='stretch'
                    source={require('../../Assets/Images/Dashboard/water2.png')}
                    style={styles.waterImage}>

                    <View style={{
                        marginHorizontal: wp(10),
                        marginTop: hp(8),
                    }}>
                        <Text style={{
                            fontSize: hp(3),
                            color: Colors.WHITE_TEXT_COLOR,
                            fontWeight: '600',
                        }}>Set up{"\n"}Your Account!</Text>

                        <Text style={{
                            fontSize: hp(2.2),
                            color: Colors.WHITE_TEXT_COLOR,
                            marginTop: hp(0.5),
                        }}>Create your new account</Text>
                    </View>
                </ImageBackground>


                <View style={styles.bottomSheet}>
                    <GrayBar BarStyle={{
                        width: wp(15),
                        height: hp(0.8),
                        backgroundColor: Colors.GRAY_BAR,
                    }} />

                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: hp(2), flexGrow: 1 }}
                        style={{ width: wp(100), marginTop: hp(1.5) }}>

                        <View style={{
                            // marginTop: hp(2),
                            marginHorizontal: wp(5),
                            flex: 1,
                            justifyContent: 'space-between',
                        }}>
                            <View>
                                <CustomTextinput
                                    KeyBoardType={'email-address'}
                                    PlaceHolder="Email Address"
                                    PlaceHolderColor={Colors.GRAY}
                                    AutoCapital={'none'}
                                    InputValue={email}
                                    OnChangeText={(text) => { setEmail(text) }}
                                    ReturnType="done"
                                    BoxStyle={{ width: wp(80) }}
                                    InputStyle={{ fontSize: hp(2), color: Colors.GRAY }}
                                />

                                <CustomTextinput
                                    KeyBoardType={'default'}
                                    PlaceHolder='New Password'
                                    PlaceHolderColor={Colors.GRAY}
                                    AutoCapital={'none'}
                                    InputValue={Password}
                                    OnChangeText={(text) => { setPassword(text) }}
                                    ReturnType={'done'}
                                    SecureEntry={isPasswordVisible}
                                    IsIconVisible={true}
                                    IconType={Ionicons}
                                    IconName={isPasswordVisible ? "eye" : "eye-off"}
                                    OnIconPress={togglePasswordVisibility}
                                    BoxStyle={{ width: wp(80) }}
                                    InputStyle={{ fontSize: hp(2), color: Colors.GRAY }}
                                />

                                <CustomTextinput
                                    KeyBoardType={'default'}
                                    PlaceHolder='Confirm New Password'
                                    PlaceHolderColor={Colors.GRAY}
                                    AutoCapital={'none'}
                                    InputValue={confirmPassword}
                                    OnChangeText={(text) => { setConfirmPassword(text) }}
                                    ReturnType={'done'}
                                    SecureEntry={isPasswordVisible}
                                    BoxStyle={{ width: wp(80) }}
                                    InputStyle={{ fontSize: hp(2), color: Colors.GRAY }}
                                />

                                <CustomTextinput
                                    KeyBoardType={'default'}
                                    PlaceHolder='Name'
                                    PlaceHolderColor={Colors.GRAY}
                                    AutoCapital={'sentences'}
                                    InputValue={name}
                                    OnChangeText={(text) => { setName(text) }}
                                    ReturnType={'done'}
                                    BoxStyle={{ width: wp(80) }}
                                    InputStyle={{ fontSize: hp(2), color: Colors.GRAY }}
                                />

                                <View style={{ ...styles.conditionBox }}>
                                    <TouchableOpacity onPress={() => { setAgreeTerms(!agreeTerms) }}
                                        style={styles.conditionCircle}>
                                        {agreeTerms && (<View style={styles.circleFilled}></View>)}
                                    </TouchableOpacity>
                                    <Text style={styles.staticText}>  I agree with </Text>
                                    <TouchableOpacity onPress={() => { helper.showTextToast('Terms') }}>
                                        <Text style={styles.term_policies}>Terms</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.staticText}> and </Text>
                                    <TouchableOpacity onPress={() => { helper.showTextToast('Policies') }}>
                                        <Text style={styles.term_policies}>Policies</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.buttonWrapper}>
                                <SimpleButton
                                    OnAction={() => { handleRegister() }}
                                    ButtonTitle="Sign up"
                                    ButtonStyle={{
                                        width: wp(80),
                                        height: hp(6.5),
                                        backgroundColor: Colors.PRIMARY_COLOR,
                                    }}
                                    ButtonTitleStyle={{ fontSize: hp(2.5), color: Colors.WHITE_TEXT_COLOR }}
                                />

                                <View style={styles.accountTextBox}>
                                    <Text style={styles.staticText}>Already have an account? </Text>
                                    <TouchableOpacity onPress={() => { navigation.navigate("LoginScreen") }}>
                                        <Text style={styles.loginWord}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </KeyboardAwareScrollView>

                </View>

            </View>
        </View >
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_COLOR,
        alignItems: 'center',
    },
    waterImage: {
        width: wp(100),
        height: hp(26),
    },
    wrapper: {
        marginTop: hp(5),
        flex: 1,
    },
    bottomSheet: {
        flex: 1,
        width: wp(100),
        backgroundColor: Colors.BG_LIGHT,
        borderTopLeftRadius: hp(3),
        borderTopRightRadius: hp(3),
    },
    dropdownBox: {
        width: wp(80),
        height: hp(6.5),
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 100,
        paddingHorizontal: wp(2),
        marginTop: hp(2),
        backgroundColor: Colors.WHITE_BG,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    dropdownText: {
        flex: 1,
        fontSize: hp(2),
        color: Colors.GRAY,
        paddingHorizontal: wp(2),
    },
    dropArrow: {
        alignItems: "center",
        justifyContent: "center",
        padding: hp(0.5),
        paddingHorizontal: wp(2),
    },
    conditionBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(2),
        marginBottom: hp(1),
        marginLeft: wp(10),
    },
    conditionCircle: {
        width: hp(3),
        height: hp(3),
        borderWidth: 2,
        borderColor: Colors.LIGHT_BLACK,
        borderRadius: hp(100),
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleFilled: {
        width: hp(1.5),
        height: hp(1.5),
        backgroundColor: Colors.PRIMARY_BLUE,
        borderRadius: hp(100),
    },
    staticText: {
        fontSize: hp(2),
        color: Colors.BLACK_TEXT_COLOR,
        textAlign: 'center',
    },
    term_policies: {
        fontSize: hp(2),
        color: Colors.BLACK_TEXT_COLOR,
        textAlign: 'center',
        fontWeight: "500",
    },
    buttonWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: hp(2),
    },
    accountTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "3%",
    },
    loginWord: {
        fontSize: hp(2),
        color: Colors.PRIMARY_COLOR,
        textAlign: 'center',
        fontWeight: '500',
    }
})