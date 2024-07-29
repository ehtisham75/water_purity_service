import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Colors/Colors';

type ButtonProps = {
    ButtonTitle: string;
    OnAction: () => void;
    ButtonStyle: {
        backgroundColor: string;
        width: number;
        height: number;
        borderColor?: string;
        borderWidth?: number;
    };
    ButtonTitleStyle: {
        fontSize: number;
        color: string;
    };
    ButtonColorActivation?: any;
}

const SimpleButton = ({ ButtonStyle, ButtonTitle, ButtonTitleStyle, OnAction, ButtonColorActivation
}: ButtonProps) => {

    return (
        <TouchableOpacity
            onPress={OnAction}
            activeOpacity={0.5}
            style={[ButtonStyle, ButtonColorActivation, styles.button]}>
            <Text style={{ ...styles.btnText, ...ButtonTitleStyle }}>{ButtonTitle}</Text>
        </TouchableOpacity>
    )
}

export default SimpleButton

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        borderRadius: hp(10)
    },
    btnText: {
        textAlign: 'center',
    },
})