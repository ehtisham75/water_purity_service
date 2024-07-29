import React, { useEffect, useState, SetStateAction } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ImageSourcePropType, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Colors/Colors';

type WorkerTabProps = {
    WorkerImage: any;
    WorkerName: string;
    WorkerLocation: string;
    WorkerTasks: number;
    OnTabPress: () => void;
}

const AvailableWorkerListTab = ({ WorkerImage, WorkerName, WorkerTasks, WorkerLocation, OnTabPress }: WorkerTabProps) => {
    return (
        <TouchableOpacity
            onPress={OnTabPress}
            activeOpacity={0.4}
            style={styles.box}
        >
            <ImageBackground
                resizeMode='cover'
                source={require('../Assets/Images/Dashboard/noUser.png')}
                style={{ width: hp(8.5), height: hp(8.5) }}
                imageStyle={{ borderRadius: hp(1) }}>
                <Image source={{ uri: WorkerImage }}
                    resizeMode='cover'
                    style={styles.tabWorkerImg}
                />
            </ImageBackground>

            <View style={{ flex: 1, marginLeft: wp(2), paddingHorizontal: wp(1) }}>
                <Text numberOfLines={1} style={styles.tabTitle}>{WorkerName}</Text>

                <View style={styles.detailBox}>
                    <View style={{ flex: 0.6, marginRight: wp(2.5) }}>
                        <Text style={styles.tabDescp}>Pending Tasks</Text>
                        <Text numberOfLines={1} style={styles.tasknumbers}>{WorkerTasks}</Text>
                    </View>

                    <View style={{ flex: 0.8, marginLeft: wp(2.5) }}>
                        <Text style={styles.tabDescp}>Last Location</Text>
                        <Text numberOfLines={1} style={styles.tasknumbers}>{WorkerLocation}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default AvailableWorkerListTab

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        width: wp(80),
        paddingVertical: hp(1.2),
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
    tabWorkerImg: {
        width: hp(8.5),
        height: hp(8.5),
        borderRadius: hp(1)
    },
    tabTitle: {
        fontSize: hp(2.1),
        color: Colors.BLACK_TEXT_COLOR,
        textAlign: 'left',
        fontWeight: '500',
    },
    detailBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: hp(0.5),
        flex: 1,
    },
    tabDescp: {
        fontSize: hp(1.6),
        color: Colors.GRAY,
        textAlign: 'left',
    },
    tasknumbers: {
        fontSize: hp(1.8),
        fontWeight: '500',
        color: Colors.BLACK_TEXT_COLOR,
        textAlign: 'left',
    }
})