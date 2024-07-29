import React, { useEffect, useState, SetStateAction } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Colors } from '../Assets/Colors/Colors';

type TabProps = {
    TabTitle: any;
    TabDescription: string;
    TabDate?: any;
    TabAddress?: any;
    OnPress?: () => void;
    CircleProgress: number;
    CircleColor: string;
    CircleDays: any;
}

const Main_FlatlistTab = ({ TabTitle, TabDescription, TabDate, TabAddress,
    CircleProgress, CircleColor, CircleDays, OnPress }: TabProps) => {

    const [progress, setProgress] = useState(50)

    return (
        <TouchableOpacity style={styles.box} onPress={OnPress} activeOpacity={0.4}>
            <View style={styles.tabTextSection}>
                <Text numberOfLines={1} style={styles.tabTitle}>{TabTitle}</Text>
                <Text numberOfLines={2} style={styles.tabDescp}>{TabDescription}</Text>
                <Text numberOfLines={1} style={styles.tabDate}>{TabDate}</Text>

                <View style={styles.addressBox}>
                    <Image resizeMode='contain' style={{ ...styles.locationIcon, tintColor: 'black' }}
                        source={require('../Assets/Images/Dashboard/location.png')} />
                    <Text numberOfLines={2} style={styles.tabAddress}>{TabAddress}</Text>
                </View>
            </View>

            <View style={styles.progressBox}>
                <AnimatedCircularProgress
                    size={80}
                    width={4}
                    fill={CircleProgress}
                    tintColor={CircleColor}
                    rotation={0}
                    // onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor={Colors.LIGHT_GRAY}
                >
                    {(fill) => (
                        <View style={styles.circleTextBox}>
                            <Text style={styles.staticTimeWord}>Time{"\n"}Remaining</Text>
                            <Text numberOfLines={1} style={styles.circleDays}>{CircleDays}</Text>
                        </View>
                    )}
                </AnimatedCircularProgress>

            </View>

        </TouchableOpacity>
    )
}

export default Main_FlatlistTab

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        width: wp(80),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE_BG,
        borderRadius: hp(1.5),
        marginBottom: hp(2),
        paddingVertical: hp(1.5),
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    tabTextSection: {
        flex: 1.5,
        marginRight: wp(2),
        marginLeft: wp(3),
    },
    tabTitle: {
        fontSize: hp(2.1),
        color: Colors.BLACK_TEXT_COLOR,
        textAlign: 'left',
        fontWeight: '500',
    },
    tabDescp: {
        fontSize: hp(1.5),
        color: Colors.GRAY,
        textAlign: 'left',
    },
    tabDate: {
        fontSize: hp(1.7),
        color: Colors.LIGHTBLACK_TEXT_COLOR,
        textAlign: 'left',
        fontWeight: '500',
    },
    addressBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(1),
    },
    tabAddress: {
        fontSize: hp(1.5),
        color: Colors.BLACK_TEXT_COLOR,
        textAlign: 'left',
        flex: 1,
        fontWeight: '500',
    },
    progressBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.8,
    },
    circleTextBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    staticTimeWord: {
        fontSize: hp(1.3),
        textAlign: 'center',
        top:-2,
    },
    circleDays: {
        fontSize: hp(1.9),
        fontWeight: '500',
        color: Colors.PROGRESS_COLOR,
        textAlign: 'center',
        top:-2,
    },
    locationIcon: {
        width: hp(2),
        height: hp(2),
        marginRight: wp(2),
    },
})
