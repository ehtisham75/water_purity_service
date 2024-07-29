import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Colors/Colors';

type BarProps = {
    BarStyle: {
        backgroundColor: string;
        width: number,
        height: number,
    };
}

const GrayBar = ({ BarStyle }: BarProps) => {
    return (
        <View style={{
            ...styles.bar,
            ...BarStyle,
        }}></View>
    )
}

export default GrayBar

const styles = StyleSheet.create({
    bar: {
        marginTop: hp(1.5),
        borderRadius: hp(10),
        alignSelf: 'center',
        // width: wp(15),
        // height: hp(0.8),
        // backgroundColor: Colors.GRAY_BAR,
    }
})