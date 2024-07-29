import React from 'react';
import { StyleSheet, Image, View, TextInput, TouchableOpacity, ImageSourcePropType, ImageProps } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Colors/Colors';

type CardProps = {
    ImagesList: Array<string | ImageSourcePropType | any>;
    MainImage?: string;
    // OnOptionPress: () => void;

    BoxStyle?: {
        backgroundColor?: string;
        width: number,
    };
}


const ImageCard = ({ MainImage, ImagesList }: CardProps) => {
    return (
        <View style={styles.container2}>
            <View style={styles.mainImageContainer}>
                {ImagesList.slice(0, 1).map((image, index) => (
                    <View key={index}>
                        <Image resizeMode='contain' source={{ uri: image }} style={styles.mainImage} />
                    </View>
                ))}
            </View>
            <View style={styles.smallImagesContainer}>
                {ImagesList.slice(1, 4).map((image, index) => (
                    <View key={index} style={styles.smallImageItem}>
                        <Image source={{ uri: image }} style={styles.smallImage} />
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'row',
        height: hp(32),
        marginVertical: hp(2),
    },
    mainImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE_BG,
        borderRadius: hp(2),
    },
    mainImage: {
        width: wp(58),
        height: hp(32),
        borderRadius: hp(2),
    },
    smallImagesContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: wp(3),
    },
    smallImageItem: {
        alignItems: 'center',
        backgroundColor: Colors.WHITE_BG,
        borderRadius: hp(2)
    },
    smallImage: {
        width: hp(10),
        height: hp(10),
        borderRadius: hp(2),
    },
});

export default ImageCard;
