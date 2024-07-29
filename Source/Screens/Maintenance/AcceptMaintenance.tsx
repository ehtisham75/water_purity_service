import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SimpleButton from '../../Components/SimpleButton';
import Svg, { Use, SvgUri, Image as SvgImage } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import SimpleHeader from '../../Components/SimpleHeader';
import ImageSlider from '../../Components/ImageSlider';
import GrayBar from '../../Components/GrayBar';

const images = [
    require('../../Assets/Images/sliderImage.jpg'),
    require('../../Assets/Images/waterplant2.jpg'),
    require('../../Assets/Images/waterplant3.jpg'),
    require('../../Assets/Images/waterplant1.jpg'),
];
const bullets = [
    { key: 'Tokyo' },
    { key: 'Delhi' },
    { key: 'Shanghai' },
    { key: 'Sao Paolo' },
    { key: 'Mexico City' },
    { key: 'Cairo' },
    { key: 'Dhaka' },
    { key: 'Mumbai' },
    { key: 'Beijing' },
    { key: 'Osaka' },
    { key: '11122' },
    { key: '66865' },
    { key: '99755' },
    { key: 'Sao 899' },
    { key: '766 City' },
    { key: '976544' },
    { key: 'uju88' },
    { key: '7755vv' },
    { key: '87986' },
    { key: '335006' },
]

const AcceptMaintenance = () => {
    const navigation = useNavigation();
    const [progress, setProgress] = useState(50)
    const [slideImages, setSlideImages] = useState([])

    return (
        <View style={styles.container}>
            <CustomStatusBar />

            <ImageSlider
                Images={images}
                SliderChilds={
                    <View style={styles.wrapper}>
                        <SimpleHeader
                            IsBackIcon={true}
                            OnBackPress={() => { navigation.goBack() }}
                            IsOptionIcon={true}
                            IconColor={Colors.WHITE}
                            BackIconBgColor={{ backgroundColor: Colors.WHITE_HEX_COLOR }}
                        />
                    </View>
                }
            />

            <View style={styles.contentSheet}>
                <GrayBar
                    BarStyle={{
                        width: wp(15),
                        height: hp(0.8),
                        backgroundColor: Colors.GRAY_BAR,
                    }}
                />

                <View style={{
                    marginHorizontal: wp(10),
                    marginTop: hp(2),
                    flex: 1
                }}>
                    <Text style={{
                        fontSize: hp(2.4),
                        fontWeight: '600',
                        color: Colors.BLACK_TEXT_COLOR
                    }}>Water Plant 1</Text>

                    <Text style={{
                        fontSize: hp(2),
                        // fontWeight: '500',
                        color: Colors.GRAY
                    }}>Recommanded Maintenance</Text>

                    <Text style={{
                        fontSize: hp(2),
                        fontWeight: '500',
                        color: Colors.BLACK_TEXT_COLOR
                    }}>Jul 09 2023</Text>

                    <View style={styles.cardSection2}>
                        <Image resizeMode='contain' style={styles.locationIcon} tintColor={Colors.BLACK}
                            source={require('../../Assets/Images/Dashboard/location.png')}
                        />
                        <Text style={styles.cardText1}>29-D Fazeelat Town, Rahim Yar Khan</Text>
                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ marginTop: hp(1.5), flex: 1 }}
                        contentContainerStyle={{ paddingBottom: hp(2) }}>
                        <View>
                            <Text style={{
                                fontSize: hp(2.4),
                                fontWeight: '600',
                                color: Colors.BLACK_TEXT_COLOR
                            }}>About the Plant</Text>

                            <Text
                                numberOfLines={6}
                                style={{
                                    fontSize: hp(2),
                                    // fontWeight: '500',
                                    color: Colors.GRAY,
                                    textAlign: 'left',
                                }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Text>

                            <View style={{
                                paddingHorizontal: wp(4),
                                // flex: 1,
                                // backgroundColor: 'yellow',
                            }}>
                                <FlatList
                                    data={bullets}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                    ListHeaderComponent={<View></View>}
                                    ListFooterComponent={<View></View>}
                                    renderItem={({ item }) => {
                                        return (
                                            <Text style={{
                                                fontSize: hp(2),
                                                color: Colors.GRAY,
                                                textAlign: 'left',
                                            }}>
                                                {`\u25CF ${item.key}`}
                                            </Text>
                                        );
                                    }}
                                />
                            </View>

                        </View>
                    </ScrollView>

                    <View style={styles.buttonWrapper}>
                        <SimpleButton
                            OnAction={() => { }}
                            ButtonTitle="Accept Maintenance"
                            ButtonStyle={{
                                width: wp(80),
                                height: hp(6.5),
                                backgroundColor: Colors.PRIMARY_COLOR,
                            }}
                            ButtonTitleStyle={{
                                fontSize: hp(2.5),
                                color: Colors.WHITE_TEXT_COLOR,
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('MaintenanceHistory') }}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            top: 1,
                            right: 1,
                        }}>
                        <Image
                            source={require('../../Assets/Images/Plants/timer.png')}
                            style={{
                                width: hp(5),
                                height: hp(5),
                            }}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default AcceptMaintenance

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        alignItems: 'center',
        marginTop: hp(7),
    },
    contentSheet: {
        flex: 1,
        borderTopLeftRadius: hp(2),
        borderTopRightRadius: hp(2),
        marginTop: hp(-2),
        backgroundColor: Colors.WHITE_BG,
    },
    cardSection2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(1),
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY,
        paddingBottom: hp(0.4)
    },
    locationIcon: {
        width: hp(2),
        height: hp(2),
        marginRight: wp(2),
    },
    cardText1: {
        fontSize: hp(1.9),
        color: Colors.GRAY,
        textAlign: 'left',
    },
    buttonWrapper: {
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '5%',
    },
})