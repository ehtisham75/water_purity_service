import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import { useNavigation } from '@react-navigation/native';
import SimpleHeader from '../../Components/SimpleHeader';
import SearchBar from '../../Components/SearchBar';
import AvailableWorkerListTab from '../../Components/AvailableWorkerListTab';


const AvailableWorker = () => {
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState("")
    const [taskList, setTaskList] = useState([
        {
            WorkerName: 'Mohammad Ahmad',
            PendingTasks: 2,
            CompleteTasks: 7,
            Location: '48-D Fazeelat Town',
            WorkerImage: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Yaqoob',
            CompleteTasks: 4,
            PendingTasks: 5,
            Location: '48-D Fazeelat Town',
            WorkerImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Mohammad Ali',
            CompleteTasks: 9,
            PendingTasks: 3,
            Location: '48-D Fazeelat Town',
            WorkerImage: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Hamza',
            CompleteTasks: 12,
            PendingTasks: 6,
            Location: '48-D Fazeelat Town',
            WorkerImage: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Bilal Ahmad',
            CompleteTasks: 10,
            PendingTasks: 1,
            Location: '48-D Fazeelat Town',
            WorkerImage: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Mohammad Ahmad',
            CompleteTasks: 17,
            PendingTasks: 2,
            Location: '48-D Fazeelat Town',
            WorkerImage: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Yaqoob',
            CompleteTasks: 27,
            PendingTasks: 5,
            Location: '48-D Fazeelat Town',
            WorkerImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Mohammad Ali',
            CompleteTasks: 20,
            PendingTasks: 3,
            Location: '48-D Fazeelat Town',
            WorkerImage: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Hamza',
            CompleteTasks: 21,
            PendingTasks: 6,
            Location: '48-D Fazeelat Town',
            WorkerImage: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
        },
        {
            WorkerName: 'Bilal Ahmad',
            CompleteTasks: 27,
            PendingTasks: 1,
            Location: '48-D Fazeelat Town',
            WorkerImage: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
    ])

    return (
        <View style={styles.container}>
            <CustomStatusBar BarStyleColor='dark' />

            <View style={styles.wrapper}>
                <SimpleHeader
                    IsBackIcon={true}
                    OnBackPress={() => { navigation.goBack() }}
                    IsTitle={true}
                    HeaderTitle='Available Workers'
                    IconColor={Colors.BLACK}
                    BackIconBgColor={{ backgroundColor: Colors.GRAY_HEX_COLOR }}
                />

                <SearchBar
                    KeyBoardType={'default'}
                    PlaceHolder="Search Workers"
                    PlaceHolderColor={Colors.GRAY}
                    AutoCapital={'sentences'}
                    InputValue={searchText}
                    OnChangeText={(text) => { setSearchText(text) }}
                    ReturnType="done"
                    OptionImg={require('../../Assets/Images/Plants/filter.png')}
                    OnOptionPress={() => { }}
                    BoxStyle={{ width: wp(80) }}
                    InputStyle={{ fontSize: hp(2), color: Colors.GRAY }}
                />

                <View style={{
                    flex: 1,
                    marginTop: hp(2),
                }}>
                    <FlatList
                        data={taskList}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{ paddingTop: hp(1), paddingBottom: hp(3) }}
                        ListHeaderComponent={<View></View>}
                        ListFooterComponent={<View></View>}
                        renderItem={({ item }) => {
                            return (
                                <AvailableWorkerListTab
                                    WorkerImage={item.WorkerImage}
                                    WorkerName={item.WorkerName}
                                    WorkerTasks={item.PendingTasks}
                                    WorkerLocation={item.Location}
                                    OnTabPress={() => { navigation.navigate("AvailableWorkerDetails", { WorkerInfo: item }) }}
                                />
                            );
                        }}
                    />
                </View>

            </View>

        </View>
    )
}

export default AvailableWorker

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