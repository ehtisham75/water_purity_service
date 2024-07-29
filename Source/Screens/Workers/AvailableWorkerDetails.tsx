import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SimpleButton from '../../Components/SimpleButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import SimpleHeader from '../../Components/SimpleHeader';
import Helper from '../../Data/Helper';

const helper = new Helper();

const AvailableWorkerDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [getWorkerInfo, setGetWorkerInfo] = useState(route.params?.WorkerInfo ?? "")
    const [workerName, setWorkerName] = useState("Yaqoob Alam")

    useEffect(() => {
        console.log("====WorkerInfo====>", getWorkerInfo)
    }, [])
    return (
        <View style={styles.container}>
            <CustomStatusBar />

            <View style={{
                width: wp(100),
                height: hp(40),
                backgroundColor: Colors.PRIMARY_COLOR,
                alignItems: 'center',
                borderBottomLeftRadius: hp(3),
                borderBottomRightRadius: hp(3),
                paddingTop: hp(8)
            }}>

                <SimpleHeader
                    IsBackIcon={true}
                    OnBackPress={() => { navigation.goBack() }}
                    BackIconBgColor={{ backgroundColor: Colors.WHITE_HEX_COLOR }}
                    IconColor={Colors.WHITE}
                />

                <ImageBackground
                    source={require('../../Assets/Images/Dashboard/noUser2.png')}
                    style={{
                        width: hp(13),
                        height: hp(13),
                        marginTop: hp(1),
                    }}
                    imageStyle={{ borderRadius: hp(1.5) }}>
                    <Image
                        resizeMode='contain'
                        source={{ uri: getWorkerInfo.WorkerImage }}
                        style={{
                            width: hp(13),
                            height: hp(13),
                            borderRadius: hp(1.5),
                        }}
                    />
                </ImageBackground>

                <Text style={{
                    fontSize: hp(2.5),
                    fontWeight: '600',
                    color: Colors.WHITE_TEXT_COLOR,
                    marginTop: hp(2),
                    textAlign: 'center',
                }}>{getWorkerInfo.WorkerName}</Text>

                <View style={styles.taskBox}>

                    <View style={{
                        flex: 0.7,
                        backgroundColor: 'white',
                        borderRadius: hp(1),
                        paddingHorizontal: wp(5),
                        paddingVertical: hp(1),
                        marginRight: wp(1.5),
                        shadowColor: '#171717',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                        elevation: 6
                    }}>
                        <Text style={{
                            fontSize: hp(1.8),
                            color: Colors.GRAY,
                            textAlign: 'center',
                        }}>Pending Task</Text>

                        <Text style={{
                            fontSize: hp(2.5),
                            fontWeight: '500',
                            color: Colors.PRIMARY_BLUE,
                            textAlign: 'center',
                            width: wp(25)
                        }}>{`${getWorkerInfo.PendingTasks == null || getWorkerInfo.PendingTasks == undefined ? 0 : getWorkerInfo.PendingTasks} Tasks`}</Text>
                    </View>

                    <View style={{
                        flex: 0.7,
                        backgroundColor: 'white',
                        borderRadius: hp(1),
                        paddingHorizontal: wp(5),
                        paddingVertical: hp(1),
                        marginLeft: wp(1.5),
                        shadowColor: '#171717',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                        elevation: 6
                    }}>
                        <Text style={{
                            fontSize: hp(1.8),
                            color: Colors.GRAY,
                            textAlign: 'center',
                        }}>Complete Task</Text>

                        <Text style={{
                            fontSize: hp(2.5),
                            fontWeight: '500',
                            color: Colors.PRIMARY_BLUE,
                            textAlign: 'center',
                            width: wp(25)
                        }}>{`${getWorkerInfo.CompleteTasks == null || getWorkerInfo.CompleteTasks == undefined ? 0 : getWorkerInfo.CompleteTasks} Tasks`}</Text>
                    </View>
                </View>
            </View>


            <View style={styles.wrapper}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: hp(1.5), flex: 1 }}
                    contentContainerStyle={{ paddingBottom: hp(2) }}>

                    <Text style={styles.lastLocation}>Last Location</Text>

                    <View style={styles.cardSection2}>
                        <Image resizeMode='contain' tintColor={'black'} style={styles.locationIcon}
                            source={require('../../Assets/Images/Dashboard/location.png')}
                        />
                        <Text style={styles.cardText1}>{getWorkerInfo.Location}</Text>
                    </View>

                    <View style={{ marginTop: hp(1), }}>
                        <Text style={styles.moreAbout}>{`More About ${getWorkerInfo.WorkerName}`}</Text>
                        <Text style={styles.details}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>


                        <View style={{
                            marginTop: hp(1),
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: hp(2),
                                color: Colors.GRAY,
                                textAlign: 'left',
                                marginRight: wp(1),
                            }}>Member Since: </Text>

                            <Text style={{
                                fontSize: hp(2),
                                color: Colors.GRAY,
                                textAlign: 'left',
                                marginLeft: wp(1),
                            }}>01/09/2023</Text>
                        </View>

                    </View>
                </ScrollView>

                <View style={styles.buttonWrapper}>
                    <SimpleButton
                        OnAction={() => { helper.showTextToast("Not available now.") }}
                        ButtonTitle="Assign Task"
                        ButtonStyle={{
                            width: wp(80), height: hp(6.5),
                            backgroundColor: Colors.PRIMARY_COLOR,
                        }}
                        ButtonTitleStyle={{
                            fontSize: hp(2.5),
                            color: Colors.WHITE_TEXT_COLOR,
                        }}
                    />
                </View>



            </View>
        </View>
    )
}
export default AvailableWorkerDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BG_LIGHT,
    },
    wrapper: {
        flex: 1,
        marginTop: hp(6),
        marginHorizontal: wp(10),
    },
    taskBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp(76),
        marginTop: hp(4),
    },
    lastLocation: {
        fontSize: hp(2.2),
        color: Colors.GRAY
    },
    cardSection2: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: hp(0.4)
    },
    locationIcon: {
        width: hp(2),
        height: hp(2),
        marginRight: wp(2),
    },
    cardText1: {
        fontSize: hp(1.9),
        color: Colors.BLACK_TEXT_COLOR,
        fontWeight: '500',
        textAlign: 'left',
    },
    moreAbout: {
        fontSize: hp(2.4),
        fontWeight: '600',
        color: Colors.BLACK_TEXT_COLOR
    },
    details: {
        fontSize: hp(2),
        color: Colors.GRAY,
        textAlign: 'left',
    },
    buttonWrapper: {
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '5%',
    },
})