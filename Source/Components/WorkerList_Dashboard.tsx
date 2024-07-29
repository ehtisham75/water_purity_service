import React, { useEffect, useState, SetStateAction } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ImageSourcePropType, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Colors/Colors';

type WorkerTabProps = {
    WorkerImage: any;
    WorkerName: string;
    OnTabPress?: () => void;
}

const WorkerList_Dashboard = ({ WorkerImage, WorkerName, OnTabPress }: WorkerTabProps) => {
    return (
        <View style={styles.box}>
            <ImageBackground
                resizeMode='cover'
                source={require('../Assets/Images/Plants/nouser.jpg')}
                style={{ width: hp(8), height: hp(8) }}
                imageStyle={{ borderRadius: hp(100) }}>
                <Image
                    resizeMode='cover'
                    source={{ uri: WorkerImage }}
                    style={styles.pic} />
            </ImageBackground>

            <Text
                // numberOfLines={1}
                style={styles.name}>{WorkerName}</Text>
        </View>
    )
}

export default WorkerList_Dashboard

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: wp(3),
    },
    pic: {
        width: hp(8),
        height: hp(8),
        borderRadius: hp(100),
    },
    name: {
        fontSize: hp(1.9),
        color: Colors.GRAY,
        textAlign: 'center',
        marginTop: hp(1),
        width: wp(20),
        height: hp(2.7)
    },
})