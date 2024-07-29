import React, { useEffect, useState, SetStateAction } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ImageSourcePropType, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Colors } from '../Assets/Colors/Colors';

type TabProps = {
    TabImage: any;
    TabTitle: string;
    TabDescription: string;
    TabPrice: any;
    OnPress: () => void;
}

const ProductListTab = ({ TabTitle, TabDescription, OnPress, TabImage, TabPrice }: TabProps) => {
    return (
        <TouchableOpacity
            onPress={OnPress}
            activeOpacity={0.4}
            style={styles.box}
        >
            <Image source={TabImage} resizeMode='contain'
                style={{
                    width: hp(8.5),
                    height: hp(8.5),
                    borderRadius: hp(1)
                }}
            />

            <View style={{
                flex: 1,
                marginLeft: wp(2),
            }}>
                <Text numberOfLines={1} style={styles.tabTitle}>{TabTitle}</Text>
                <Text numberOfLines={2} style={styles.tabDescp}>{TabDescription}</Text>

                <Text numberOfLines={1} style={{
                    fontSize: hp(2.1),
                    color: Colors.BLACK_TEXT_COLOR,
                    textAlign: 'right',
                    fontWeight: '500',
                }}>{TabPrice}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default ProductListTab

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        width: wp(80),
        paddingVertical: hp(1),
        paddingHorizontal: wp(3),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE_BG,
        borderRadius: hp(1.5),
        marginBottom: hp(2),
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    tabTextSection: {
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
    tabPrice: {}
})
