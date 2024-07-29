import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type SliderImgProps = {
    SizeMode: any;
    ImagePath: any;
    ImgStyle: {
        width: number,
        height: number,
    };
}

const SliderImage = ({ ImagePath, ImgStyle, SizeMode }: SliderImgProps) => {
    return (
        <Image
            resizeMode={SizeMode}
            source={ImagePath}
            style={ImgStyle}
        />
    )
}

export default SliderImage

const styles = StyleSheet.create({})