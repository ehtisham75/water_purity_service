import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, FlatList, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SimpleButton from '../../Components/SimpleButton';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Use, SvgUri, Image as SvgImage } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import SimpleHeader from '../../Components/SimpleHeader';
import ImageSlider from '../../Components/ImageSlider';
import GrayBar from '../../Components/GrayBar';
import Helper from '../../Data/Helper';

const helper = new Helper();

const images = [
    require('../../Assets/Images/sliderImage2.png'),
    require('../../Assets/Images/waterplant3.jpg'),
    require('../../Assets/Images/waterplant2.jpg'),
    require('../../Assets/Images/sliderImage.jpg'),
    require('../../Assets/Images/waterplant4.jpg'),
];
const bullets = [
    { key: 'Tokyo' },
    { key: 'Delhi' },
    { key: 'Shanghai' },
    { key: 'Sao Paolo' },
    { key: 'Mexico City' },
]

const WaterPlantDetails = () => {
    const navigation = useNavigation();
    const [progress, setProgress] = useState(50)
    const [slideImages, setSlideImages] = useState([])

    return (
        <View style={styles.container}>
            <CustomStatusBar />

            <ImageSlider
                Images={images}
                SliderChilds={
                    <LinearGradient colors={[Colors.BLACK, Colors.TRANSPARENT]} style={styles.topShade}>
                        <SimpleHeader
                            IsBackIcon={true}
                            OnBackPress={() => { navigation.goBack() }}
                            IsOptionIcon={true}
                            OnOptionPress={() => { helper.showTextToast("Options not available now") }}
                            IconColor={Colors.WHITE}
                            BackIconBgColor={{ backgroundColor: Colors.WHITE_HEX_COLOR }}
                        />
                    </LinearGradient>
                }
            />

            <View style={styles.contentSheet}>
                <GrayBar BarStyle={{
                    width: wp(15),
                    height: hp(0.8),
                    backgroundColor: Colors.GRAY_BAR,
                }} />

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
                        color: Colors.GRAY
                    }}>Recommanded Maintenance</Text>

                    <Text style={{
                        fontSize: hp(2),
                        fontWeight: '500',
                        color: Colors.BLACK_TEXT_COLOR
                    }}>Jul 09 2023</Text>

                    <View style={styles.cardSection2}>
                        <Image resizeMode='contain' style={styles.locationIcon} tintColor={Colors.BLACK}
                            source={require('../../Assets/Images/Dashboard/location.png')} />
                        <Text style={styles.cardText1}>29-D Fazeelat Town, Rahim Yar Khan</Text>
                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ marginTop: hp(0.5), flex: 1 }}
                        contentContainerStyle={{ paddingBottom: hp(2), paddingTop: hp(1) }}>
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

                            <View style={{ paddingHorizontal: wp(4) }}>
                                {bullets.map((item, index) => (
                                    <View key={index} >
                                        <Text style={{
                                            fontSize: hp(2),
                                            color: Colors.GRAY,
                                            textAlign: 'left',
                                        }}>
                                            {`\u25CF ${item.key}`}
                                        </Text>
                                    </View>
                                ))}
                            </View>

                            <View style={{ marginTop: hp(1) }}>

                                <Text style={{
                                    fontSize: hp(2.4),
                                    fontWeight: '600',
                                    color: Colors.BLACK_TEXT_COLOR
                                }}>Owner Information</Text>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: hp(0.5),
                                }}>
                                    <ImageBackground
                                        resizeMode='cover'
                                        source={require('../../Assets/Images/Plants/nouser.jpg')}
                                        style={{ width: hp(6), height: hp(6) }}
                                        imageStyle={{ borderRadius: hp(50) }}>
                                        <Image resizeMode='cover' source={{ uri: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }}
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
                                            }}>Wade Warren</Text>

                                        <Text numberOfLines={1}
                                            style={{
                                                fontSize: hp(1.9),
                                                color: Colors.GRAY,
                                            }}>+1 786 338-8400</Text>
                                    </View>

                                </View>
                            </View>

                            <View style={styles.buttonWrapper}>
                                <SimpleButton
                                    OnAction={() => {helper.showTextToast("No functionality available now.")}}
                                    ButtonTitle="Assign task to Worker"
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


                        </View>
                    </ScrollView>

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
            </View >
        </View >
    )
}

export default WaterPlantDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topShade: {
        width: wp(100),
        height: "70%",
        paddingTop: hp(7),
        alignItems: 'center'
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
        borderBottomWidth: 0.5,
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