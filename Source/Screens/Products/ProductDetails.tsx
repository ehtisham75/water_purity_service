import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import Svg, { Use, SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import SimpleHeader from '../../Components/SimpleHeader';
import ImageCard from '../../Components/ImageCard';
import SimpleButton from '../../Components/SimpleButton';
import Helper from '../../Data/Helper';

const helper = new Helper();

const ProductDetails = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState("")
    const [taskList, setTaskList] = useState([{}, {}, {}, {},])

    const Images = [
        'https://5.imimg.com/data5/SELLER/Default/2020/8/XN/XQ/XV/111157158/raw-water-feed-pump-500x500.jpg',
        'https://savree-storage.s3.amazonaws.com/Articles/optimised/Emergency%20Feedwater%20Pump.jpg',
        'https://5.imimg.com/data5/TI/JF/MY-15376018/multistage-boiler-feed-pump-500x500.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3VVXo2J9S1TigdXY-Z5NvdfY3Cnww0YPbjwUV9dTQ6QVhucDPFEwcCG3haiXLUhrgQw&usqp=CAU',
    ];
    const bullets = [
        { key: 'Tokyo' },
        { key: 'Delhi' },
        { key: 'Shanghai' },
        { key: 'Sao Paolo' },
        { key: 'Mexico City' },
        { key: 'Cairo' },
        { key: 'Shanghai' },
        { key: 'Sao Paolo' },
        { key: 'Mexico City' },
        { key: 'Cairo' },
    ]

    return (
        <View style={styles.container}>
            <CustomStatusBar BarStyleColor='dark' />

            <View style={styles.wrapper}>

                <View style={{ alignItems: 'center', }}>
                    <SimpleHeader
                        IsBackIcon={true}
                        OnBackPress={() => { navigation.goBack() }}
                        BackIconBgColor={{ backgroundColor: Colors.GRAY_HEX_COLOR }}
                        IsTitle={true}
                        HeaderTitle='Product Details'
                    />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: hp(1.5), }}
                    contentContainerStyle={{ paddingBottom: hp(2) }}>

                    <ImageCard ImagesList={Images} />

                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            fontSize: hp(2.6),
                            fontWeight: '600',
                            color: Colors.BLACK_TEXT_COLOR
                        }}>Water Plant 1</Text>

                        <Text style={{
                            fontSize: hp(2.2),
                            color: Colors.GRAY
                        }}>A feed pump is a type of pump that supplies water to a boiler to produce steam. For industrial purposes, a feed pump supplies a liquid for further processing. These pumps are high-pressure pumps and are generally of two types: Positive displacement type feed pumps.</Text>

                        <View style={{
                            paddingHorizontal: wp(2),
                            paddingTop: "1%",
                        }}>
                            {bullets.map((item, index) => (
                                <View key={index} >
                                    <Text style={{
                                        fontSize: hp(2.1),
                                        color: Colors.GRAY,
                                        textAlign: 'left',
                                    }}>
                                        {`\u25CF ${item.key}`}
                                    </Text>
                                </View>
                            ))}

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: hp(2),
                        }}>
                            <Text style={{
                                fontSize: hp(2.6),
                                fontWeight: '600',
                                color: Colors.GRAY
                            }}>Price: </Text>
                            <Text style={{
                                fontSize: hp(2.6),
                                fontWeight: '600',
                                color: Colors.PRIMARY_COLOR
                            }}>$30</Text>
                        </View>

                        <View style={styles.buttonWrapper}>
                            <SimpleButton
                                OnAction={() => {helper.showTextToast("Not Available now")}}
                                ButtonTitle="Edit Product"
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
            </View>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BG_LIGHT,
    },
    waterImage: {
        width: wp(100),
        height: hp(30),
    },
    wrapper: {
        flex: 1,
        marginTop: hp(7),
        marginHorizontal: wp(10),
        // backgroundColor: 'yellow',
    },
    buttonWrapper: {
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '5%',
    },
})