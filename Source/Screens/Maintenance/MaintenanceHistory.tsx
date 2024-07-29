import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, BackHandler } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { useNavigation, CommonActions } from '@react-navigation/native';
// ---------------Components--------------
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SimpleHeader from '../../Components/SimpleHeader';
import SearchBar from '../../Components/SearchBar';
import HistoryAnimatedTab from '../../Components/HistoryAnimatedTab';
import Helper from '../../Data/Helper';

const helper = new Helper();

const MaintenanceHistory = () => {
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState("")
    const [pickImage, setPickImage] = useState("")
    const [imageArray, setImageArray] = useState([])
    const [taskList, setTaskList] = useState([
        {
            TaskDate: 'Just Now',
            EvidenceImgs: [
                require('../../Assets/Images/sliderImage.jpg'),
                require('../../Assets/Images/waterplant1.jpg'),
                require('../../Assets/Images/waterplant2.jpg'),
            ],
            Commnets: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            // WorkerImg: require('../../Assets/Images/Dashboard/notification.png'),
            WorkerImg: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            WorkerName: 'Zeeshan Ali',
            WorkerPhone: '+92399 7788990'
        },
        {
            TaskDate: 'Jan 20 2023 - 11:00 AM',
            EvidenceImgs: [
                require('../../Assets/Images/sliderImage.jpg'),
                require('../../Assets/Images/waterplant3.jpg'),
                require('../../Assets/Images/waterplant1.jpg'),
                require('../../Assets/Images/waterplant2.jpg'),
                require('../../Assets/Images/waterplant2.jpg'),
            ],
            Commnets: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            // WorkerImg: require('../../Assets/Images/Dashboard/notification.png'),
            WorkerImg: 'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            WorkerName: 'Abubakar Khan',
            WorkerPhone: '+92399 4422446'
        },
        {
            TaskDate: 'Jan 22 2023 - 09:00 AM',
            EvidenceImgs: [
                require('../../Assets/Images/sliderImage.jpg'),
                require('../../Assets/Images/waterplant1.jpg'),
                require('../../Assets/Images/waterplant3.jpg'),
                require('../../Assets/Images/waterplant4.jpg'),
            ],
            Commnets: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            // WorkerImg: require('../../Assets/Images/Dashboard/notification.png'),
            WorkerImg: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            WorkerName: 'Hamza Akbar',
            WorkerPhone: '+92311 5501927'
        },
    ])

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                navigation.navigate("Dashboard");
                return true;
            }
        );

        return () => backHandler.remove();
    }, [navigation]);


    return (
        <View style={styles.container}>
            <CustomStatusBar BarStyleColor='dark' />

            <View style={styles.wrapper}>

                <SimpleHeader
                    IsBackIcon={true}
                    OnBackPress={() => {
                        navigation.dispatch(CommonActions.reset({
                            index: 0,
                            routes: [{ name: "Dashboard" }],
                        }));
                    }}
                    IsTitle={true}
                    HeaderTitle='Maintenance History'
                    IconColor={Colors.BLACK}
                    BackIconBgColor={{ backgroundColor: Colors.GRAY_HEX_COLOR }}
                />

                <SearchBar
                    KeyBoardType={'default'}
                    PlaceHolder="Search By Date"
                    PlaceHolderColor={Colors.GRAY}
                    AutoCapital={'sentences'}
                    InputValue={searchText}
                    OnChangeText={(text) => { setSearchText(text) }}
                    ReturnType="done"
                    OptionImg={require('../../Assets/Images/Plants/filter.png')}
                    OnOptionPress={() => { helper.showTextToast("Filter not working until APIs implemented") }}
                    BoxStyle={{ width: wp(80) }}
                    InputStyle={{ fontSize: hp(2), color: Colors.GRAY }}
                />

                <View style={{
                    marginTop: hp(1),
                    flex: 1,
                }}>
                    <FlatList
                        data={taskList}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{ paddingVertical: hp(2), }}
                        renderItem={({ item, index }) => {
                            return (
                                <HistoryAnimatedTab
                                    Index={index}
                                    TaskDate={item.TaskDate}
                                    EvidenceImages={item.EvidenceImgs}
                                    Comments={item.Commnets}
                                    WorkerImg={item.WorkerImg}
                                    WorkerName={item.WorkerName}
                                    WorkerContact={item.WorkerPhone}
                                />
                            )
                        }}

                    />
                </View>


            </View >
        </View >
    )
}

export default MaintenanceHistory

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
})