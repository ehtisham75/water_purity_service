import React, { useEffect } from 'react'
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigateScreen()
    }, []);

    const navigateScreen = () => {
        setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: "IntroductionScreen",
                            //   params: {}
                        },
                    ],
                }));

        }, 3000);
    }

    return (
        <View style={styles.container}>
            <CustomStatusBar
                BarStyleColor={"dark"}
            />

            <Image
                resizeMode='contain'
                source={require('../../Assets/Images/logo.png')}
                style={styles.logoImg}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE_BG,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImg: {
        width: hp(20),
        height: hp(20),
    },
    titleBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBoxText: {
        fontSize: hp(4),
        color: Colors.PRIMARY_COLOR,
        textAlign: 'center',
        fontWeight: "600",
    },
})

export default SplashScreen
