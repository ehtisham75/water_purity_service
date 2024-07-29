import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SimpleButton from '../../Components/SimpleButton';
import { useNavigation } from '@react-navigation/native';
import SimpleHeader from '../../Components/SimpleHeader';

const SeeAllTasksScreen = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState("")

    return (
        <View style={styles.container}>
            <CustomStatusBar BarStyleColor='dark' />

            <View style={styles.wrapper}>
                <SimpleHeader IsTitle={true} HeaderTitle='All Tasks' />

                <Text style={{
                    textAlign: 'center',
                    fontSize: hp(3),
                    color: Colors.PRIMARY_BLUE
                }}>This Screen is missing in Figma Design</Text>
            </View>
        </View>
    )
}

export default SeeAllTasksScreen

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