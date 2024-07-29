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
import AvailableWorkerListTab from '../../Components/AvailableWorkerListTab';
import WorkerListTaskTab from '../../Components/WorkerListTaskTab';

const helper = new Helper();

const WorkerScreen = () => {
    const navigation = useNavigation();
    const [progress, setProgress] = useState(50)
    const [searchText, setSearchText] = useState("")

    const [allWorkersTab, setAllWorkersTab] = useState(false)
    const [avialableTab, setAvailableTab] = useState(false)
    const [busyTab, setBusyTab] = useState(false)

    const [activeButton, setActiveButton] = useState(1);
    const [taskList, setTaskList] = useState([
        {
            WorkerName: 'Mohammad Ahmad',
            CompleteTasks: 20,
            PendingTasks: 2,
            WorkerImage: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            Location: '48-D Fazeelat Town, Rahim Yar khans',
        },
        {
            WorkerName: 'Ismail Khan',
            CompleteTasks: 27,
            PendingTasks: 0,
            Location: '48-D Fazeelat Town, Rahim Yar khans',
            WorkerImage: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            Location: '48-D Fazeelat Town, Rahim Yar khans',
            WorkerName: 'Feroz khan Chachran Shreef',
            CompleteTasks: 19,
            PendingTasks: 3,
            WorkerImage: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Tariq Abrar',
            CompleteTasks: 9,
            PendingTasks: 4,
            Location: '48-D Fazeelat Town, Rahim Yar khans',
            WorkerImage: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Zaid Hassan',
            CompleteTasks: 12,
            PendingTasks: 1,
            Location: '48-D Fazeelat Town, Rahim Yar khans',
            WorkerImage: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
    ])

    const [availableList, setAvailableList] = useState([
        {
            WorkerName: 'Mohammad Ahmad',
            CompleteTasks: 20,
            PendingTasks: 2,
            WorkerImage: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Ismail Khan',
            CompleteTasks: 27,
            PendingTasks: 0,
            WorkerImage: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
    ])

    const handleButtonPress = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    useEffect(() => {
        setAllWorkersTab(true)
    }, [])

    const handleAllWorkersButton = () => {
        handleButtonPress(1);
        setAvailableTab(false);
        setBusyTab(false);
        setAllWorkersTab(true);
    }

    const handleAvailableButton = () => {
        handleButtonPress(2);
        setAllWorkersTab(false);
        setBusyTab(false);
        setAvailableTab(true);
    }

    const handleBusyButton = () => {
        handleButtonPress(3);
        setAllWorkersTab(false);
        setAvailableTab(false);
        setBusyTab(true)
    }

    return (
        <View style={styles.container}>
            <CustomStatusBar BarStyleColor='dark' />

            <View style={styles.wrapper}>
                <SimpleHeader IsTitle={true} HeaderTitle='All Workers' />

                <SearchBar
                    KeyBoardType={'default'}
                    PlaceHolder="Search Worker"
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
                    contentContainerStyle={{ paddingVertical: hp(1), paddingBottom: hp(3) }}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: wp(10)
                    }}>
                        <PlantImageCard
                            OnPress={() => { }}
                            ImageBG={require('../../Assets/Images/Dashboard/worker1.png')}
                            Title={`Worker\nRequests`}
                            SubTitle={'10 Request'}
                            BoxStyle={{
                                width: wp("38%"),
                            }}
                        />
                        <PlantImageCard
                            OnPress={() => { }}
                            ImageBG={require('../../Assets/Images/Dashboard/worker2.png')}
                            Title={`Create New Worker`}
                            BoxStyle={{
                                width: wp("38%"),
                            }}
                        />
                    </View>


                    <View style={styles.buttonBox}>
                        <SimpleButton
                            OnAction={() => { handleAllWorkersButton() }}
                            ButtonTitle={"All Workers"}
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
                            OnAction={() => { handleAvailableButton() }}
                            ButtonTitle={"Available"}
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
                            OnAction={() => { handleBusyButton() }}
                            ButtonTitle={"Busy"}
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
                        />
                    </View>

                    {allWorkersTab && <View style={styles.flatlistWrapper}>
                        {taskList.map((item, index) => (
                            <View key={index.toString()} >
                                <WorkerListTaskTab
                                    WorkerImage={item.WorkerImage}
                                    WorkerName={item.WorkerName}
                                    WorkerCompleteTask={item.CompleteTasks}
                                    WorkerPendingTasks={item.PendingTasks}
                                    OnTabPress={() => { navigation.navigate("AvailableWorkerDetails", { WorkerInfo: item }) }}
                                />
                            </View>
                        ))}
                    </View>
                    }

                    {avialableTab && <View style={styles.flatlistWrapper}>
                        {availableList.map((item, index) => (
                            <View key={index.toString()} >
                                <WorkerListTaskTab
                                    WorkerImage={item.WorkerImage}
                                    WorkerName={item.WorkerName}
                                    WorkerCompleteTask={item.CompleteTasks}
                                    WorkerPendingTasks={item.PendingTasks}
                                    OnTabPress={() => { navigation.navigate("AvailableWorkerDetails", { WorkerInfo: item }) }}
                                />
                            </View>
                        ))}
                    </View>
                    }

                </ScrollView>

            </View>
        </View>
    )
}

export default WorkerScreen

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




{/* <Svg width={wp(80)} height={hp(20)} >
                        <ImageBackground
                            source={require('../../Assets/Images/Dashboard/requestPlant.svg')}
                            style={{
                                width: hp(20),
                                height: hp(20),
                            }}
                        />

                        <SvgUri
                            width={wp(80)} height={hp(20)}
                            uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
                        />

                        <SvgImage href={require('../../Assets/Images/Dashboard/requestPlant.svg')} />
                    </Svg> */}
