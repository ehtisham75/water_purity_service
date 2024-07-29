import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SliderImage from '../../Components/SliderImage';
import SimpleButton from '../../Components/SimpleButton';
import Svg, { Use, SvgUri } from 'react-native-svg';
import GrayBar from '../../Components/GrayBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomTextinput from '../../Components/CustomTextinput';
import { useNavigation, CommonActions } from '@react-navigation/native';
import SimpleHeader from '../../Components/SimpleHeader';

const RecoverPassword = () => {
    const navigation = useNavigation();
    const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

    const [isLoading, setisLoading] = useState(false);

    return (
        <View style={styles.container}>
            <CustomStatusBar BarStyleColor='dark' />

            <View style={styles.wrapper}>
                <SimpleHeader IsTitle={true} HeaderTitle='Recover Password' />

                <Text style={{
                    textAlign: 'center',
                    fontSize: hp(3),
                    color: Colors.PRIMARY_BLUE
                }}>This Screen is missing in Figma Design, will complete when provided</Text>
            </View>
        </View>
    )
}

export default RecoverPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BG_LIGHT,
    },
    wrapper: {
        flex: 1,
        marginTop: hp(6),
    },
})