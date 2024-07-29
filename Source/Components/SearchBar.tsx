import React, { Dispatch, SetStateAction } from 'react'
import { StyleSheet, Image, View, TextInput, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Colors/Colors';
import Octicons from 'react-native-vector-icons/Octicons'

type InputProps = {
    KeyBoardType: any;
    PlaceHolder: string;
    PlaceHolderColor: string;
    InputValue: any;
    OnChangeText: Dispatch<SetStateAction<string>>;
    AutoCapital: any;
    ReturnType: any;
    OptionImg: any;
    OnOptionPress: () => void;

    BoxStyle: {
        backgroundColor?: string;
        width: number,
    };
    InputStyle: {
        fontSize: number;
        color: string;
    };
}

const SearchBar = ({ InputValue, PlaceHolder, PlaceHolderColor, KeyBoardType, OnChangeText,
    AutoCapital, ReturnType, BoxStyle, InputStyle, OnOptionPress, OptionImg
}: InputProps) => {

    return (
        <View style={{
            ...BoxStyle,
            ...styles.container
        }}>

            <View style={{
                flexDirection: 'row',
                width: wp(64),
                borderRadius: 100,
                backgroundColor: Colors.WHITE,
                shadowColor: '#171717',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 6,
            }}>
                <View style={styles.iconbox}>
                    <Octicons name={'search'} size={20} color={Colors.GRAY} />
                </View>

                <TextInput
                    keyboardType={KeyBoardType}
                    autoCapitalize={AutoCapital}
                    placeholder={PlaceHolder}
                    placeholderTextColor={PlaceHolderColor}
                    value={InputValue}
                    onChangeText={OnChangeText}
                    returnKeyType={ReturnType}
                    style={{
                        ...InputStyle,
                        ...styles.textinput,
                    }}
                />

            </View>

            <TouchableOpacity onPress={OnOptionPress} style={styles.optionBox}>
                <Image
                    resizeMode='contain'
                    source={OptionImg}
                    style={styles.optionImg}
                />
            </TouchableOpacity>

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 100,
        marginTop: hp(3),
    },
    textinput: {
        flex: 1,
        fontSize: hp(2),
        color: Colors.LIGHTBLACK_TEXT_COLOR,
        height: hp(6.5),
        paddingHorizontal: wp(1.5),
        paddingRight: wp(3)
    },
    iconbox: {
        alignItems: "center",
        justifyContent: "center",
        padding: hp(0.5),
        paddingLeft:wp(3.5)
    },
    optionBox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp(50),
        backgroundColor: Colors.WHITE_BG,
        width: hp(6.5),
        height: hp(6.5),

        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 6
    },
    optionImg: {
        width: hp(3.5),
        height: hp(3.5),
    },
})