import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import { useNavigation } from '@react-navigation/native';
import SimpleHeader from '../../Components/SimpleHeader';
import Helper from '../../Data/Helper';

const helper = new Helper();

const FAQScreen = () => {
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState("")

    return (
        <View style={styles.container}>
            <CustomStatusBar BarStyleColor='dark' />

            <View style={styles.wrapper}>
                <SimpleHeader IsTitle={true} HeaderTitle='FAQ' />
                <Text style={{
                    textAlign: 'center',
                    fontSize: hp(3),
                    color: Colors.PRIMARY_BLUE
                }}>This Screen is missing in Figma Design, will complete when provided</Text>
            </View>
        </View>
    )
}

export default FAQScreen

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