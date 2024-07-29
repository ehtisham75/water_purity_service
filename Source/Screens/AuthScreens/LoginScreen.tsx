import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SimpleButton from '../../Components/SimpleButton';
import GrayBar from '../../Components/GrayBar';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomTextinput from '../../Components/CustomTextinput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, CommonActions } from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
import Helper from '../../Data/Helper';

const helper = new Helper();

const LoginScreen: React.FC = () => {
    const navigation = useNavigation();

    const [isLoading, setisLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [email, setEmail] = useState('admin@gmail.com');
    const [Password, setPassword] = useState("admin123");

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleLogin = async () => {
        try {
            crashlytics().log(`=== >> Admin logged in:`);

            if (email == "") {
                helper.showTextToast("Email Required.");
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
            if (Password !== "admin123") {
                helper.showTextToast("Wrong Password.");
                return;
            }
            if (email == "admin@gmail.com" && Password == "admin123") {
                helper.showTextToast("Login Successfully");
                navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Dashboard" }],
                }));
                return;
            }

        } catch (error) {
            crashlytics().recordError(error);
            console.error('Login error admin:', error);
        }
    };

    return (
        <View style={styles.container}>
            <CustomStatusBar />

            <View style={styles.wrapper}>
                <ImageBackground
                    resizeMode="stretch"
                    source={require('../../Assets/Images/Dashboard/water2.png')}
                    style={styles.waterImage}>
                    <View style={styles.greetingBox}>
                        <Text style={styles.welcome}>Hey{"\n"}Welcome Back!</Text>
                        <Text style={styles.subject}>Sign in to your account</Text>
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
                            marginTop: hp(2),
                            marginHorizontal: wp(5),
                            flex: 1,
                            justifyContent: 'space-between',
                        }}>
                            <View >
                                <CustomTextinput
                                    KeyBoardType={'email-address'}
                                    PlaceHolder="Enter Email"
                                    PlaceHolderColor={Colors.GRAY}
                                    AutoCapital={'none'}
                                    InputValue={email}
                                    OnChangeText={(text) => { setEmail(text) }}
                                    ReturnType="done"
                                    SecureEntry={true}
                                    IsIconVisible={false}
                                    BoxStyle={{ width: wp(80) }}
                                    InputStyle={{ fontSize: hp(2), color: Colors.GRAY }}
                                />

                                <CustomTextinput
                                    KeyBoardType="default"
                                    PlaceHolder="password"
                                    PlaceHolderColor={Colors.GRAY}
                                    AutoCapital={'none'}
                                    InputValue={Password}
                                    OnChangeText={(text) => { setPassword(text) }}
                                    ReturnType="done"
                                    SecureEntry={isPasswordVisible}
                                    IsIconVisible={true}
                                    IconType={Ionicons}
                                    IconName={isPasswordVisible ? 'eye' : 'eye-off'}
                                    OnIconPress={togglePasswordVisibility}
                                    BoxStyle={{ width: wp(80) }}
                                    InputStyle={{ fontSize: hp(2), color: Colors.GRAY }}
                                />

                                <TouchableOpacity onPress={() => { navigation.navigate("RecoverPassword") }}
                                    style={{ marginVertical: hp(2), marginRight: wp(5) }}>
                                    <Text style={styles.recoverPass}>Recovery Password</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonWrapper}>
                                <SimpleButton
                                    OnAction={() => { handleLogin() }}
                                    ButtonTitle="Sign in"
                                    ButtonStyle={{
                                        width: wp(80),
                                        height: hp(6.5),
                                        backgroundColor: Colors.PRIMARY_COLOR,
                                    }}
                                    ButtonTitleStyle={{
                                        fontSize: hp(2.5),
                                        color: Colors.WHITE_TEXT_COLOR,
                                    }}
                                />

                                <View style={styles.accountTextBox}>
                                    <Text style={styles.staticText}>Not a member? </Text>
                                    <TouchableOpacity onPress={() => { navigation.navigate('RegisterScreen') }}>
                                        <Text style={styles.registerWord}>Register Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                        </View>
                    </KeyboardAwareScrollView>
                </View>

            </View>
        </View >
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_COLOR,
        alignItems: 'center',
    },
    waterImage: {
        width: wp(100),
        height: hp(30),
    },
    greetingBox: {
        marginHorizontal: wp(10),
        marginTop: hp(8),
    },
    welcome: {
        fontSize: hp(3),
        color: Colors.WHITE_TEXT_COLOR,
        fontWeight: '600',
    },
    subject: {
        fontSize: hp(2.2),
        color: Colors.WHITE_TEXT_COLOR,
        marginTop: hp(0.5),
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
        alignItems: 'center',
    },
    buttonWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: hp(4),
    },
    recoverPass: {
        fontSize: hp(2.2),
        color: Colors.BLACK_TEXT_COLOR,
        textAlign: 'right',
    },
    accountTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(3),
    },
    staticText: {
        fontSize: hp(2),
        color: Colors.BLACK_TEXT_COLOR,
        textAlign: 'center',
    },
    registerWord: {
        fontSize: hp(2),
        color: Colors.PRIMARY_COLOR,
        textAlign: 'center',
        fontWeight: '500',
    },
});