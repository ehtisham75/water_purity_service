import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Platform, ImageBackground, LayoutAnimation, UIManager, ImageSourcePropType } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'

type AnimatedTabProps = {
    TaskDate: string;
    EvidenceImages: Array<ImageSourcePropType>
    Comments: string;
    WorkerImg: any;
    WorkerName: string;
    WorkerContact: any;
    Index: number;
    OnMenuPress?: () => void;
}

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const HistoryAnimatedTab = ({ Index, TaskDate, EvidenceImages, Comments, WorkerImg,
    WorkerName, WorkerContact }: AnimatedTabProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleTab = () => {
        const customLayout = LayoutAnimation.create(
            isExpanded
                ? 300 // Collapse duration
                : 300, // Expand duration
            LayoutAnimation.Types.linear,
            LayoutAnimation.Properties.scaleY,
        );

        LayoutAnimation.configureNext(customLayout);
        setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={toggleTab} style={styles.header}>
                <View>
                    <Text style={{
                        fontSize: hp(1.8),
                        color: Colors.GRAY
                    }}>Maintenance Date</Text>

                    <Text style={{
                        fontSize: hp(2.2),
                        color: Colors.BLACK_TEXT_COLOR,
                        fontWeight: '600'
                    }}>{TaskDate}</Text>
                </View>


                {isExpanded ? (
                    <Ionicons name={'chevron-up'} size={20} color={Colors.GRAY} />
                ) : (
                    <Ionicons name={'chevron-down'} size={20} color={Colors.GRAY} />
                )}

            </TouchableOpacity>

            {isExpanded && (
                <View style={styles.content}>
                    <Text style={{
                        fontSize: hp(2),
                        color: Colors.GRAY,
                        marginBottom: hp(0.5),
                        fontWeight: '500'
                    }}>Task Evidence</Text>

                    <View style={{ justifyContent: 'center' }}>
                        <FlatList
                            data={EvidenceImages}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            ListHeaderComponent={<View></View>}
                            ListFooterComponent={<View></View>}
                            renderItem={({ item }) => {
                                return (
                                    <Image
                                        resizeMode='cover'
                                        source={item}
                                        // source={{ uri: item }}
                                        style={{
                                            width: hp(9),
                                            height: hp(9),
                                            borderRadius: hp(1),
                                            marginRight: wp(2),
                                        }} />
                                );
                            }}
                        />
                    </View>

                    <Text style={{
                        fontSize: hp(2),
                        color: Colors.GRAY,
                        marginTop: hp(1),
                        fontWeight: '500'
                    }}>Comments</Text>

                    <View style={{
                        padding: hp(1),
                        borderRadius: hp(0.7),
                        backgroundColor: Colors.BG_LIGHT,
                    }}>
                        <Text
                            numberOfLines={6}
                            style={{
                                fontSize: hp(1.8),
                                color: Colors.GRAY,
                            }}>{Comments}</Text>
                    </View>

                    <View style={{ marginTop: hp(1) }}>
                        <Text style={{
                            fontSize: hp(2),
                            color: Colors.GRAY,
                            fontWeight: '500'
                        }}>Worker Details</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // backgroundColor: 'plum',
                            marginTop: hp(0.5),
                        }}>
                            <ImageBackground
                                resizeMode='cover'
                                source={require('../Assets/Images/Plants/nouser.jpg')}
                                style={{ width: hp(6), height: hp(6) }}
                                imageStyle={{ borderRadius: hp(50) }}>
                                <Image resizeMode='cover' source={{ uri: WorkerImg }}
                                    style={{
                                        width: hp(6),
                                        height: hp(6),
                                        borderRadius: hp(50),
                                    }} />
                            </ImageBackground>

                            <View style={{ marginLeft: wp(2), }}>
                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: hp(1.9),
                                        color: Colors.GRAY,
                                        fontWeight: '500'
                                    }}>{WorkerName}</Text>

                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: hp(1.9),
                                        color: Colors.GRAY,
                                    }}>{WorkerContact}</Text>
                            </View>

                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(80),
        alignSelf: 'center',
        borderRadius: hp(1.5),
        marginBottom: hp(2),
        backgroundColor: Colors.WHITE_BG,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        paddingVertical: hp(1),
        borderRadius: hp(1.5),
    },
    arrowIcon: {
        transform: [{ rotate: '0deg' }],
    },
    content: {
        marginTop: hp(0.5),
        paddingHorizontal: wp(5),
        paddingVertical: hp(1),
        borderRadius: hp(1.5),
    },
});

export default HistoryAnimatedTab;
