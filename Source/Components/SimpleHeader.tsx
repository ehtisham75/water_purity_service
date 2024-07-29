import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Colors } from '../Assets/Colors/Colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Entypo from 'react-native-vector-icons/Entypo'

type HeaderProps = {
    HeaderTitle?: string;
    BackImg?: any;
    OptionImg?: any;
    OnBackPress?: () => void;
    OnOptionPress?: () => void;

    IsBackIcon?: boolean;
    IsOptionIcon?: boolean;
    IsTitle?: boolean;
    BackIconBgColor?: { backgroundColor: string; }
    IconColor?: string;
}

const SimpleHeader = ({ HeaderTitle, OnBackPress, OnOptionPress, BackImg, OptionImg,
    IsBackIcon, IsTitle, IsOptionIcon, BackIconBgColor, IconColor }: HeaderProps) => {

    return (
        <View style={styles.mainBox}>

            {IsBackIcon &&
                <TouchableOpacity onPress={OnBackPress} style={{ ...BackIconBgColor, ...styles.iconBox }}>
                    <FontAwesome6 name={'arrow-left-long'} size={18} color={IconColor} />
                </TouchableOpacity>
            }

            {IsTitle && <Text style={{ ...styles.mainText, marginLeft: IsBackIcon ? wp(-4) : 0 }}>{HeaderTitle}</Text>}

            {IsOptionIcon &&
                <TouchableOpacity onPress={OnOptionPress} style={{ ...BackIconBgColor, ...styles.iconBox }}>
                    <Entypo name={'dots-three-vertical'} size={18} color={IconColor} />
                </TouchableOpacity>
            }

        </View>
    )
}

export default SimpleHeader

const styles = StyleSheet.create({
    mainBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp(80),
        marginHorizontal: wp(10),
    },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp(1),
        width: hp(4),
        height: hp(4),
    },
    backImg: {
        width: hp(4),
        height: hp(4),
    },
    mainText: {
        fontSize: hp(2.4),
        color: Colors.PRIMARY_COLOR,
        textAlign: 'center',
        fontWeight: '500',
        flex: 1,
    },
    greetingText: {
        fontSize: hp(1.7),
        color: Colors.GRAY,
        textAlign: 'center',
    },
    optionImg: {
        width: hp(2),
        height: hp(2),
    },
})