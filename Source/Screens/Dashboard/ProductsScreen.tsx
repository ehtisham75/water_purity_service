import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import { useNavigation } from '@react-navigation/native';
import SimpleHeader from '../../Components/SimpleHeader';
import ProductListTab from '../../Components/ProductListTab';
import Octicons from 'react-native-vector-icons/Octicons'
import Helper from '../../Data/Helper';

const helper = new Helper();

const ProductsScreen = () => {
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState("")
    const [taskList, setTaskList] = useState([
        {
            ProductName: 'Feed Pump',
            Description: 'Lorem ipsum dy bugio sala pariota kanjta therku bara Lorem ips',
            Price: 20,
            Image: require('../../Assets/Images/Plants/allplant4.png')
        },
        {
            ProductName: 'Softner',
            Description: 'Lorem ipsum dy bugio sala pariota kanjta therku bara Lorem ips',
            Price: 30,
            Image: require('../../Assets/Images/Plants/allplant1.png')
        },
        {
            ProductName: 'Sand Filter',
            Description: 'Lorem ipsum dy bugio sala pariota kanjta therku bara Lorem ips',
            Price: 50,
            Image: require('../../Assets/Images/Plants/allplant3.png')
        },
        {
            ProductName: 'Alto',
            Description: 'Lorem ipsum dy bugio sala pariota kanjta therku bara Lorem ips',
            Price: 100,
            Image: require('../../Assets/Images/Plants/allplant2.png')
        },
        {
            ProductName: 'Feed Pump',
            Description: 'Lorem ipsum dy bugio sala pariota kanjta therku bara Lorem ips',
            Price: 20,
            Image: require('../../Assets/Images/Plants/allplant4.png')
        },
        {
            ProductName: 'Softner',
            Description: 'Lorem ipsum dy bugio sala pariota kanjta therku bara Lorem ips',
            Price: 30,
            Image: require('../../Assets/Images/Plants/allplant1.png')
        },
        {
            ProductName: 'Sand Filter',
            Description: 'Lorem ipsum dy bugio sala pariota kanjta therku bara Lorem ips',
            Price: 50,
            Image: require('../../Assets/Images/Plants/allplant3.png')
        },
        {
            ProductName: 'Alto',
            Description: 'Lorem ipsum dy bugio sala pariota kanjta therku bara Lorem ips',
            Price: 100,
            Image: require('../../Assets/Images/Plants/allplant2.png')
        },
    ])

    return (
        <View style={styles.container}>
            <CustomStatusBar BarStyleColor='dark' />

            <View style={styles.wrapper}>
                <SimpleHeader IsTitle={true} HeaderTitle='Products' />

                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 100,
                    marginTop: hp(3),
                    width: wp(80),
                }}>

                    <View style={{
                        flexDirection: 'row',
                        width: wp(50),
                        borderRadius: 100,
                        backgroundColor: Colors.WHITE,
                        shadowColor: '#171717',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                        elevation: 6,
                        // backgroundColor: 'cyan',
                    }}>
                        <View style={{
                            alignItems: "center",
                            justifyContent: "center",
                            padding: hp(0.5),
                            paddingLeft: wp(3.5)
                        }}>
                            <Octicons name={'search'} size={20} color={Colors.GRAY} />
                        </View>

                        <TextInput
                            keyboardType='default'
                            autoCapitalize='sentences'
                            placeholder='Search Products'
                            placeholderTextColor={Colors.GRAY}
                            value={searchText}
                            onChangeText={(text) => { setSearchText(text) }}
                            returnKeyType={'done'}
                            style={{
                                flex: 1,
                                fontSize: hp(2),
                                color: Colors.LIGHTBLACK_TEXT_COLOR,
                                height: hp(6.5),
                                paddingHorizontal: wp(1.5),
                                paddingRight: wp(3),
                            }}
                        />

                    </View>

                    <TouchableOpacity
                        onPress={() => {navigation.navigate("AddNewProducts")}}
                        style={{
                            width: wp(28),
                            borderRadius: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Colors.PRIMARY_BLUE,
                            shadowColor: '#171717',
                            shadowOffset: { width: 2, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
                            elevation: 6,
                        }}>
                        <Text style={{
                            fontSize: hp(1.8),
                            color: Colors.WHITE_TEXT_COLOR,
                            fontWeight: '500',
                            textAlign: 'center',
                        }}>+ New{"\n"}Products</Text>

                    </TouchableOpacity>
                </View>

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
                                <ProductListTab
                                    TabTitle={item.ProductName}
                                    TabDescription={item.Description}
                                    TabPrice={`$ ${item.Price}`}
                                    TabImage={item.Image}
                                    OnPress={() => { navigation.navigate("ProductDetails") }}
                                />
                            );
                        }}
                    />
                </View>

            </View>

        </View>
    )
}

export default ProductsScreen

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