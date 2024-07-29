import React, { useEffect, useState, SetStateAction } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import SimpleButton from '../../Components/SimpleButton';
import Svg, { Use, SvgUri, Image as SvgImage } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Main_FlatlistTab from '../../Components/Main_FlatlistTab';
import SimpleHeader from '../../Components/SimpleHeader';
import SearchBar from '../../Components/SearchBar';
import PlantImageCard from '../../Components/PlantImageCard';
import Helper from '../../Data/Helper';

const helper = new Helper();

const ClientScreen = () => {
    const navigation = useNavigation();
    const [progress, setProgress] = useState(50)
    const [searchText, setSearchText] = useState("")

    const [allPlantsTab, setAllPlantsTab] = useState(false)
    const [pendingTab, setPendingTab] = useState(false)
    const [fulfilledTab, setFulfilledTab] = useState(false)

    const [activeButton, setActiveButton] = useState(1);
    const [taskList, setTaskList] = useState([
        {}, {}, {}, {}, {}, {},
    ])

    const handleButtonPress = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    useEffect(() => {
        setAllPlantsTab(true)
    }, [])

    const handleAllPlantsButton = () => {
        handleButtonPress(1);
        setAllPlantsTab(true);
    }

    const handlePendingButton = () => {
        handleButtonPress(2);
        setAllPlantsTab(false)
    }

    const handleFulfillButton = () => {
        handleButtonPress(3);
        setAllPlantsTab(false);
    }

    return (
        <View style={styles.container}>
            <CustomStatusBar BarStyleColor='dark' />

            <View style={styles.wrapper}>
                <SimpleHeader IsTitle={true} HeaderTitle='All Clients' />

                <SearchBar
                    KeyBoardType={'default'}
                    PlaceHolder="Search Clients"
                    PlaceHolderColor={Colors.GRAY}
                    AutoCapital={'sentences'}
                    InputValue={searchText}
                    OnChangeText={(text) => { setSearchText(text) }}
                    ReturnType="done"
                    OptionImg={require('../../Assets/Images/Plants/filter.png')}
                    OnOptionPress={() => { helper.showTextToast("Filters not available until API implementation") }}
                    BoxStyle={{ width: wp(80) }}
                    InputStyle={{ fontSize: hp(2), color: Colors.GRAY }}
                />

                <ScrollView
                    style={{ marginTop: hp(2) }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingVertical: hp(1), paddingBottom: hp(3) }}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: wp(10)
                    }}>
                        <PlantImageCard
                            OnPress={() => { }}
                            ImageBG={require('../../Assets/Images/Dashboard/client1.png')}
                            Title={`Create New\nClient`}
                            BoxStyle={{
                                width: wp("38%"),
                            }}
                        />

                        <PlantImageCard
                            OnPress={() => { }}
                            ImageBG={require('../../Assets/Images/Dashboard/client2.png')}
                            Title={`New Plant Requests`}
                            SubTitle={'02 Request'}
                            BoxStyle={{
                                width: wp("38%"),
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => { }}
                        activeOpacity={0.8}
                    >
                        <LinearGradient colors={[Colors.PRIMARY_COLOR, Colors.PRIMARY_BLUE]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 2, y: 1.5 }}
                            style={styles.topCard}>

                            <View style={styles.cardSectionTextBox}>
                                <Text style={styles.cardText1}>Maintenance Requests</Text>
                                <Text style={styles.cardText2}>1 Request</Text>
                            </View>

                            <View style={styles.cardImageBox}>
                                <Image resizeMode='contain' style={styles.bellImg}
                                    source={require('../../Assets/Images/Plants/allplant4.png')}
                                />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>


                    <View style={styles.buttonBox}>
                        <SimpleButton
                            OnAction={() => { handleAllPlantsButton() }}
                            ButtonTitle={"All Clients"}
                            ButtonColorActivation={activeButton === 1 && styles.activeButton}
                            ButtonStyle={{
                                width: wp(25),
                                height: hp(4.5),
                                backgroundColor: Colors.SECONDARY_BLUE,
                            }}
                            ButtonTitleStyle={{
                                fontSize: hp(1.9),
                                color: activeButton === 1 ? Colors.WHITE_TEXT_COLOR : Colors.BLACK_TEXT_COLOR
                            }}
                        />

                        <SimpleButton
                            OnAction={() => { handlePendingButton() }}
                            ButtonTitle={"Pending"}
                            ButtonColorActivation={activeButton === 2 && styles.activeButton}
                            ButtonStyle={{
                                width: wp(25),
                                height: hp(4.5),
                                backgroundColor: Colors.SECONDARY_BLUE,
                            }}
                            ButtonTitleStyle={{
                                fontSize: hp(1.9),
                                color: activeButton === 2 ? Colors.WHITE_TEXT_COLOR : Colors.BLACK_TEXT_COLOR
                            }}
                        />

                        <SimpleButton
                            OnAction={() => { handleFulfillButton() }}
                            ButtonTitle={"Fulfilled"}
                            ButtonColorActivation={activeButton === 3 && styles.activeButton}
                            ButtonStyle={{
                                width: wp(25),
                                height: hp(4.5),
                                backgroundColor: Colors.SECONDARY_BLUE,
                            }}
                            ButtonTitleStyle={{
                                fontSize: hp(1.9),
                                color: activeButton === 3 ? Colors.WHITE_TEXT_COLOR : Colors.BLACK_TEXT_COLOR
                            }}
                        // ButtonColorActivation={activeButton === 3 ? styles.activeButton : styles.inactiveButton}
                        />
                    </View>

                    {allPlantsTab && <View style={styles.flatlistWrapper}>
                        {taskList.map((item, index) => (
                            <View key={index.toString()} >
                                <Main_FlatlistTab
                                    TabTitle={"Purification Plant 1"}
                                    TabDescription={"Last Maintenance"}
                                    TabDate={"Jan 20 2023 -10:00 AM"}
                                    TabAddress={"29-D Fazeelat Town, Rahim Yar Khan"}
                                    OnPress={() => { navigation.navigate("WaterPlantDetails") }}
                                    CircleProgress={progress}
                                    CircleColor={Colors.RED}
                                    CircleDays={`${9} Days`}
                                />
                            </View>
                        ))}
                    </View>}

                </ScrollView>

            </View>
        </View>
    )
}

export default ClientScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BG_LIGHT,
    },
    wrapper: {
        flex: 1,
        marginTop: hp(6),
    },
    topCard: {
        flexDirection: 'row',
        width: wp(80),
        height: hp(20),
        borderRadius: hp(1.5),
        marginTop: hp(2),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        alignSelf: 'center',
    },
    cardSectionTextBox: {
        flex: 1.5,
        alignItems: 'flex-start',
        marginLeft: wp(1),
    },
    cardImageBox: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardText1: {
        fontSize: hp(2.2),
        color: Colors.WHITE_TEXT_COLOR,
        textAlign: 'left',
        fontWeight: '500',
    },
    cardText2: {
        fontSize: hp(2.1),
        color: Colors.WHITE_TEXT_COLOR,
        textAlign: 'left',
        marginTop: hp(0.5),
    },
    bellImg: {
        width: hp(10.5),
        height: hp(10.5),
    },
    cardSection2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: wp(3),
        marginTop: hp(3),
    },
    locationIcon: {
        width: hp(2),
        height: hp(2),
        marginRight: wp(2),
    },
    listHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp(80),
        marginTop: hp(2),
    },
    listTitle: {
        fontSize: hp(2.2),
        color: Colors.PRIMARY_COLOR,
        fontWeight: '500',
    },
    listNavBox: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: hp(1),
    },
    listNavText: {
        fontSize: hp(1.9),
        color: Colors.GRAY,
    },
    flatlistWrapper: {
        flex: 1,
    },
    buttonBox: {
        flexDirection: 'row',
        width: wp(80),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: hp(2),
        alignSelf: 'center',
    },
    activeButton: {
        backgroundColor: Colors.PRIMARY_BLUE,
    },
    inactiveButton: {
        backgroundColor: 'lightblue',
    },
})

