import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
// ---------------Components--------------
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SimpleHeader from '../../Components/SimpleHeader';
import Helper from '../../Data/Helper';
import SimpleButton from '../../Components/SimpleButton';

const helper = new Helper();

const EvidenceDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [getImageList, setGetImagesList] = useState(route.params?.ImagesList ?? "")
    const [comment, setComment] = useState("")
    const [imageArray, setImageArray] = useState([])

    useEffect(() => {
        console.log("\x1b[34m==== Get Images List ====>>", getImageList)
        // cameraImageController()
    }, [])

    const removeImage = (index) => {
        const newImages = [...imageArray];
        newImages.splice(index, 1);
        setImageArray(newImages)
    };

    return (
        <View style={styles.container}>
            <CustomStatusBar BarStyleColor='dark' />

            <View style={styles.wrapper}>

                <SimpleHeader
                    IsBackIcon={true}
                    OnBackPress={() => { navigation.goBack(), setGetImagesList("") }}
                    IsTitle={true}
                    HeaderTitle='Task Evidence'
                    IconColor={Colors.BLACK}
                    BackIconBgColor={{ backgroundColor: Colors.GRAY_HEX_COLOR }}
                />

                <View style={{
                    marginTop: hp(6),
                    paddingHorizontal: wp(10),
                }}>
                    <Text style={{
                        fontSize: hp(2),
                        color: Colors.BLACK_TEXT_COLOR,
                        marginBottom: hp(0.5),
                        fontWeight: '500'
                    }}>Task Evidence</Text>

                    <View style={{ justifyContent: 'center' }}>
                        <FlatList
                            data={getImageList}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (<Image resizeMode='cover'
                                    source={{ uri: item.path }}
                                    style={styles.imagesList}
                                />);
                            }}
                        />
                    </View>

                    <View style={{ marginBottom: hp(8) }}>
                        <Text style={{
                            fontSize: hp(2),
                            color: Colors.BLACK_TEXT_COLOR,
                            marginBottom: hp(0.5),
                            marginTop: hp(1),
                            fontWeight: '500'
                        }}>Comments</Text>

                        <TextInput
                            keyboardType='email-address'
                            autoCapitalize='none'
                            placeholder='Type Here...'
                            placeholderTextColor={Colors.LIGHTGRAY_TEXT_COLOR}
                            value={comment}
                            onChangeText={(text) => { setComment(text) }}
                            multiline={true}
                            style={styles.textinput}
                        />
                    </View>

                </View>

                <View style={styles.buttonWrapper}>
                    <SimpleButton
                        OnAction={() => { navigation.navigate("MaintenanceHistory") }}
                        ButtonTitle="Submit Evidence"
                        ButtonStyle={{
                            width: wp(80), height: hp(6.5),
                            backgroundColor: Colors.PRIMARY_COLOR,
                        }}
                        ButtonTitleStyle={{ fontSize: hp(2), color: Colors.WHITE_TEXT_COLOR }}
                    />
                </View>
            </View>
        </View>
    )
}

export default EvidenceDetailScreen

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
    },
    imagesList: {
        width: hp(9),
        height: hp(9),
        borderRadius: hp(1.5),
        marginRight: wp(2),
    },
    textinput: {
        height: hp(13),
        width: wp(80),
        fontSize: hp(2),
        color: Colors.LIGHTBLACK_TEXT_COLOR,
        alignSelf: 'center',
        paddingHorizontal: wp(3),
        textAlignVertical: 'top',
        textAlign: 'left',
        borderRadius: hp(1),
        backgroundColor: Colors.WHITE,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        paddingBottom: hp(7),
        marginTop: hp(5),
    },
})