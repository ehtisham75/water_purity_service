import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Colors/Colors';

type plantCardProps = {
    ImageBG: any;
    Title: string;
    SubTitle?: any;
    OnPress: () => void;

    BoxStyle: {
        backgroundColor?: string;
        width: any,
    };
}


const PlantImageCard = ({ ImageBG, Title, SubTitle, BoxStyle, OnPress }: plantCardProps) => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={OnPress} style={{ borderRadius: hp(2) }}>
            <ImageBackground
                source={ImageBG}
                style={{
                    ...BoxStyle,
                    height: hp(19),
                    // width: hp(19),
                }}
                imageStyle={{
                    borderRadius: hp(2)
                }}
            >
                <Text style={{
                    fontSize: hp(2.2),
                    fontWeight: '500',
                    color: Colors.WHITE_TEXT_COLOR,
                    marginTop: hp(2),
                    marginHorizontal: wp(4),
                    // backgroundColor: 'plum',
                }}>{Title}</Text>

                <Text style={{
                    fontSize: hp(2),
                    // fontWeight: '500',
                    color: Colors.WHITE_TEXT_COLOR,
                    marginTop: hp(0.5),
                    marginHorizontal: wp(4),
                    // backgroundColor: 'plum',
                }}>{SubTitle}</Text>

            </ImageBackground>
        </TouchableOpacity>
    )
}

export default PlantImageCard

const styles = StyleSheet.create({})