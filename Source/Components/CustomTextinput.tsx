import React, { Dispatch, SetStateAction } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Colors/Colors';

type InputProps = {
    KeyBoardType: any;
    PlaceHolder: string;
    PlaceHolderColor: string;
    InputValue: any;
    OnChangeText: Dispatch<SetStateAction<string>>;
    AutoCapital: any;
    SecureEntry?: boolean;
    ReturnType: any;
    IsIconVisible?: boolean
    IconType?: any;
    IconName?: any;
    OnIconPress?: () => void;

    BoxStyle: {
        backgroundColor?: string;
        width: number,
    };
    InputStyle: {
        fontSize: number;
        color: string;
    };
}

const CustomTextinput = ({ InputValue, PlaceHolder, PlaceHolderColor, KeyBoardType,
    AutoCapital, SecureEntry, ReturnType, BoxStyle, InputStyle, OnChangeText,
    IsIconVisible, IconType, IconName, OnIconPress
}: InputProps) => {
    return (
        <View style={{
            ...BoxStyle,
            ...styles.container
        }}>
            <TextInput
                keyboardType={KeyBoardType}
                // keyboardType='email-address'
                autoCapitalize={AutoCapital}
                placeholder={PlaceHolder}
                placeholderTextColor={PlaceHolderColor}
                value={InputValue}
                onChangeText={OnChangeText}
                secureTextEntry={SecureEntry}
                returnKeyType={ReturnType}
                style={{
                    ...InputStyle,
                    ...styles.textinput,
                }}
            />

            {IsIconVisible &&
                <TouchableOpacity onPress={OnIconPress}
                    style={styles.iconbox}>
                    <IconType
                        name={IconName}
                        size={20}
                        color={Colors.GRAY}
                    // name={}
                    />
                </TouchableOpacity>
            }

        </View>
    )
}

export default CustomTextinput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 100,
        paddingHorizontal: wp(2),
        backgroundColor: Colors.WHITE,
        marginTop: hp(2),
        alignSelf: 'center',

        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    textinput: {
        flex: 1,
        fontSize: hp(2),
        color: Colors.LIGHTBLACK_TEXT_COLOR,
        height: hp(6.5),
        paddingHorizontal: wp(2),
    },
    iconbox: {
        alignItems: "center",
        justifyContent: "center",
        padding: hp(0.5),
        paddingHorizontal: wp(2),
    }
})