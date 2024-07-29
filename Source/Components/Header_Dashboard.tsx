import React, { useEffect, useState, SetStateAction } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Colors } from '../Assets/Colors/Colors';

type HeaderProps = {
    OnMenuPress: () => void;
    MenuImg: any;
    HeaderTitle: string;
    HeaderGreetings: string;
    OnBellPress: () => void;
    BellImg: any;
}

const Header_Dashboard = ({ OnMenuPress, MenuImg, HeaderTitle, HeaderGreetings, OnBellPress, BellImg }: HeaderProps) => {
    return (
        <View style={styles.mainBox}>
            <TouchableOpacity onPress={OnMenuPress}>
                <Image
                    resizeMode='contain'
                    source={MenuImg}
                    style={styles.menuImg}
                />
            </TouchableOpacity>

            <View>
                <Text style={styles.mainText}>{HeaderTitle}</Text>
                <Text style={styles.greetingText}>{HeaderGreetings}</Text>
            </View>

            <TouchableOpacity onPress={OnBellPress} style={styles.notification}>
                <Image
                    resizeMode='cover'
                    source={BellImg}
                    style={styles.notifImg}
                />
            </TouchableOpacity>

        </View>
    )
}

export default Header_Dashboard

const styles = StyleSheet.create({
    mainBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: wp(10),
        width: wp(80),
    },
    menuImg: {
        width: hp(3),
        height: hp(3),
    },
    mainText: {
        fontSize: hp(2.2),
        color: Colors.PRIMARY_COLOR,
        textAlign: 'center',
        fontWeight: '500',
    },
    greetingText: {
        fontSize: hp(1.7),
        color: Colors.GRAY,
        textAlign: 'center',
    },
    notification: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.WHITE,
        borderRadius: hp(50),
        padding: hp(1),
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    notifImg: {
        width: hp(3.1),
        height: hp(3.1),
    },
})