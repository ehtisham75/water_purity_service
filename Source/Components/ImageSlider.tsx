import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Colors/Colors';

type SliderProps = {
    Images: Array<string>;
    SliderChilds?: any;
    // OnOptionPress: () => void;

    BoxStyle?: {
        backgroundColor?: string;
        width: number,
    };
}


const { width } = Dimensions.get('window');

const ImageSlider = ({ Images, SliderChilds }: SliderProps) => {
    return (
        <View style={styles.container}>
            <SwiperFlatList
                data={Images}
                index={0}
                showPagination
                paginationActiveColor="#fff"
                paginationDefaultColor="rgba(255,255,255,.3)"
                renderItem={({ item }) => {
                    return (
                        <ImageBackground
                            source={item}
                            style={styles.image}
                            resizeMode="cover"
                        >
                            {SliderChilds}
                        </ImageBackground>
                    )
                }}
                paginationStyle={{
                    padding: hp(0.5),
                    backgroundColor: Colors.GRAY_HEX_COLOR,
                    borderRadius: hp(10),
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: wp(-3),
                    marginBottom: hp(4),
                }}
                paginationStyleItem={{
                    width: hp(0.8),
                    height: hp(0.8),
                }}
                paginationStyleItemActive={{ width: wp(5), }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp(40)
    },
    image: {
        width,
        flex: 1,
    },
});

export default ImageSlider;
