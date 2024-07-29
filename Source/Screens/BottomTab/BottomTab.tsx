import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../../Assets/Colors/Colors";
// -----------------------
import HomeScreen from "../Dashboard/HomeScreen";
import AllTaskScreen from "../Dashboard/AllTaskScreen";
import ProfileScreen from "../Dashboard/ProfileScreen";
import WorkerScreen from "../Dashboard/WorkerScreen";
import ClientScreen from "../Dashboard/ClientScreen";

export default function BottamTab() {
    const Tab = createBottomTabNavigator();

    const homefill = require("../../Assets/Images/BottomTab/HomeFill.png");
    const homeEmpty = require("../../Assets/Images/BottomTab/HomeEmpty.png");
    const workerfill = require("../../Assets/Images/BottomTab/WorkerFill.png");
    const workerEmpty = require("../../Assets/Images/BottomTab/WorkerEmpty.png");
    const clientFill = require("../../Assets/Images/BottomTab/ClientFill.png");
    const clientEmpty = require("../../Assets/Images/BottomTab/ClientEmpty.png");
    const profilefill = require("../../Assets/Images/BottomTab/ProfileFill.png");
    const profileEmpty = require("../../Assets/Images/BottomTab/ProfileEmpty.png");

    return (
        <Tab.Navigator initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    height: hp(8),
                    backgroundColor: Colors.PRIMARY_COLOR,
                    borderRadius: 100,
                    marginBottom: 6,
                    opacity: 0.9,
                    overflow: 'hidden',
                    marginHorizontal: "6%",
                    paddingHorizontal: "3%",
                    paddingBottom: hp(0.8),
                    paddingTop: hp(0.8),
                },
            }}>

            <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (<Text style={styles.lable}>Home</Text>);
                    },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ ...styles.iconCircle, backgroundColor: focused ? Colors.PRIMARY_BLUE : Colors.TRANSPARENT }}>
                                <Image style={styles.icon} source={focused ? homefill : homeEmpty} />
                            </View>
                        );
                    },
                }}
            />

            <Tab.Screen name="WorkerScreen" component={WorkerScreen}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (<Text style={styles.lable}>Workers</Text>);
                    },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ ...styles.iconCircle, backgroundColor: focused ? Colors.PRIMARY_BLUE : Colors.TRANSPARENT }}>
                                <Image style={styles.icon} source={focused ? workerfill : workerEmpty} />
                            </View>
                        );
                    },
                }}
            />

            <Tab.Screen name="ClientScreen" component={ClientScreen}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (<Text style={styles.lable}>Clients</Text>);
                    },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ ...styles.iconCircle, backgroundColor: focused ? Colors.PRIMARY_BLUE : Colors.TRANSPARENT }}>
                                <Image style={styles.icon} source={focused ? clientFill : clientEmpty} />
                            </View>
                        );
                    },
                }}
            />

            <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (<Text style={styles.lable}>Profile</Text>);
                    },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ ...styles.iconCircle, backgroundColor: focused ? Colors.PRIMARY_BLUE : Colors.TRANSPARENT }}>
                                <Image style={styles.icon} source={focused ? profilefill : profileEmpty} />
                            </View>
                        );
                    },
                }}
            />

        </Tab.Navigator >
    );
}

const styles = StyleSheet.create({
    lable: {
        color: Colors.WHITE_TEXT_COLOR,
        fontSize: hp(1.7),
    },
    iconCircle: {
        paddingVertical: "3%",
        paddingHorizontal: "18%",
        borderRadius: hp(5),
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        width: hp(3),
        height: hp(3),
    },
})













