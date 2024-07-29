import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Colors } from '../Assets/Colors/Colors'

type StatusBarProps = {
    BGColor?: string;
    BarStyleColor?: string;
    IsTranslucent?: boolean;
}

const CustomStatusBar = ({ BGColor, BarStyleColor, IsTranslucent }: StatusBarProps) => {
    return (
        <StatusBar
            backgroundColor={BGColor ? BGColor : Colors.TRANSPARENT}
            barStyle={BarStyleColor == "dark" ? "dark-content" : "light-content"}
            translucent={IsTranslucent ? IsTranslucent : true}
        />
    )
}

export default CustomStatusBar

const styles = StyleSheet.create({})