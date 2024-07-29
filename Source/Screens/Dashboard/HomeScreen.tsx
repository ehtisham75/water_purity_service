import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Modal, Image, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
//------Redux-----
import { connect } from 'react-redux';
import ReducerAction from '../../Data/Redux/ReducerAction';
import ReducerProps from '../../Data/Redux/ReducerProps';
//----------------
import { Colors } from '../../Assets/Colors/Colors';
import CustomStatusBar from '../../Components/CustomStatusBar';
import Svg, { Use, SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Main_FlatlistTab from '../../Components/Main_FlatlistTab';
import Header_Dashboard from '../../Components/Header_Dashboard';
import crashlytics from '@react-native-firebase/crashlytics';
import Helper from '../../Data/Helper';
import WorkerList_Dashboard from '../../Components/WorkerList_Dashboard';
import SimpleButton from '../../Components/SimpleButton';

const helper = new Helper();

const HomeScreen = () => {
    const navigation = useNavigation();
    const [progress, setProgress] = useState(10)
    const [drawerVisible, setDrawerVisible] = useState(false)
    const [workerList, setWorkerList] = useState([
        {
            workerPic: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8PDw8PDw4QDw4QDxAQEA8PEBAPFRUWFhUSFxYYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGy4dHh0tKy0tNS0rLS0tLS0tLS0vLS0tLSstLSstLS0tKy0tLS0tLSstLS0tLS0tLS0tLSswLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAQIDBgcFBAj/xABEEAACAQICBwUDCAkCBwEAAAAAAQIDEQQhBQYSMUFRYQcTInGBkaGxFCMyUoLB0fAkQlNicnSSouGysyU0NUNkwvEV/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAIREBAQEBAQEBAQABBQAAAAAAAAECEQMSIVEEEzJBUmH/2gAMAwEAAhEDEQA/AOqMVimJoKmwx2GkBNh2HYdgJsOw7DsETYCrBYCQsVYAJsFihASeFp/W3BYK8a9Zd7+yp+Op6pZR9WjQ9eu0uW1UwuAezFNwniU/FJrJqnyX73s5nL5TlJ3mr3ebbvd9WTrqR12t2swveng5unf6UqsU/ZFOx9eB7VcLKSVWhVpXazTjOKXF8G7dEcip0VHxZqL4KzufNiKkL+G8embV/uJ1fmP0xo7TGGxF+4r06rVm1CSbSavu3n3n5Zw2LlGcakZuFSLvGpB7Movg7ne9StdqGPjGk33eLjHx03um1vlB8VxtvLK5sbXYLFBYqJsFihWAkVi7CsBNgsUKwENCsZLE2AxtCaMjRLQGOxSCw0FNIB2ADOxFMQCGCGgCwwSHYIQFWCwEhYoAJAdgsBNjx9cNIrDaPxde6i40ZqDf7Sfgh/dJHtWNN7XE/wD8fE2+vhX6d/TA/PtS17LhlvPswiS3uSfSzPZ1L0FDFVJOo8luS+J1nRGq2DppbNCDlzktpv2nn36yXj048uztcep6NxNfw0aE5J8l/ix7ujezPETzryVLovEztmHw8IJKMIRXJJJGHGLPIz16a5+NM4z1xDSWoFWk3syUo8Gt680eFoydXB4ylPOM6NWE0770nn6NXO3aUj4ZPoci1paVW7Vns26t/m5fL1tvKevlJnsfoyErpNbmk15DPI1NqOejcDKV7vC0L3zbtBK/uPYset4kgVYLAKwrFBYCbBYdgAlokuwmgMbE0ZGiWgMdhpDsCQBYCrDAzMRQrAIaQWKQUhodh2CFYLDsMCbCLFYCQKsKwCsa52iUtrROPVr2w85+sGpr4GyGua4SnanBeKjOFeGIpu1p05RS477K+T5nO9fM7XeM/WuRyvUCn3VOpXk7R2s75JJcbm2w16wsfoqrUiuMI3T5s17V/RqeHlQzcJVakbpXvBSfD0R9lTD4qltQpVaOGUbKHeRtdW9OnM8Vsur17s5szJG4aH1vw+JygpxtvUlssz6W1iw+HTdR5c7XNY0TomUpKrKptOLi1JQa2pK11fit5l1z0N8oxEIxkoJU09zd273y9CddfD49I674SomqcK01xtCxoGsk41Uq9N3jtSjmrNXTeaNlr6IrQc4U8RNx/wC3RVGd73/We5+4+HSmiO6pSjNO72JzWV008/cd5+Zr8Z7mrn9ds1fw/dYPCU2rOGGoRfmoRv7z0DVez2vUdCrCrJycZqcbtvZjNfRz8vezaz1519Trxbz865SCw7AdOU2CxVgsBNgsVYVgJaJsW0JgQSzIyWgICxVgsAhgAGcGMLAIYJDQDQDsACGOwWAQigAkBgBLPN05Bd3Gb3Ql4v4ZJx+Nj0yK9JTjKD3STTtv8znWfqWOsa+dSuZaHjGGJr0krKNTagv3ZpNP2tm5x7tQvLZUUrtu2Xqadrdo+WFxdKopp99SlFNR2c4Pc1d/WR5ml9M1o91O3zKhGpf9Vtr6UnwivieG5svK+jnU1Ot8qTjOS2d3hXLfnu8j49PwUasZuSWSWbtuVzQcSq+KcasMZRg0k4/Oyit/7vmefpfB4uvP9JxlFwgkoqE5zT62S/Ny/M/q22X8jquDx9KaVnm4pq+V105mla5VYudt+1sr2tI8PA6RxE33FGfed1stzUZJQtx2mvdxzPUp4T5VpSjhZTaz+clGzcXGLm0r5fqlzm/Uc71Pmug6kUr0qta1lUnGMd30YRSuvVv2GyGDR+ChQpQpU77EFZXzbd7tvq22fSezGfnMj5/pr61aQigOnBAMAqbBYoQEtCaKEwIaJZbRLAkBgAWEMAM4DABFIQ0AwsCGAAAAAhgAhFCAQDADR+1Wg/ktGvHJ0a1r8lNb/bGJquq2mIuKp1FdQ2tnitiW+L5pN+xo6Hrxh1UwFaD3Xpv+9HGfnMDVvJXhtJxlbcuKfoeb1nb/AOvV4Wyd/wCHRcHKlh5bNONOnT322INW8mGltLRcNmNWKbvfYhThvd2s78Ty8LpTC4il85stcb8DDVr4CntOEVe+V/FlZP2XMpq8ermbZeRjhiadClOahGMIrvJqNltz3Rj1beXlfkLslwc62OxGLndqlGe1PNKVaq816R2vajVdYdYO9koQSUdrasuisvZd+0652X4dQ0XQaSUqkq1STtm25tXfpFI28s/va83+R6d/I2sBgeh4wAAAAAAIBhYKliY2DAlkspiYEAMQAAwAzAAAA0IYFAAAMAAAAAAQAACAmtVjCLnOUYQirylJqMYrm28kaVp7tPwGHvGi5YypypNRpJ9arya/hUgj49f9Yaix+D0fTezTa73EtW8d4z7uD6JxUurceROkNFwrUmmk8jl+sGs1XGY14xxjRqfN7EYNtRUElHN73lm+PJHSNU9YaeMhZ2hWil3kL/3x5x+HvPP/AJGL2aenw1OfLn2mdBzoNuk5KD3pM8CcZ8Zz+B2PSmjs3ldM1DSWhLvKObZnn0/rTWP41nRWB25X4b3xOg9k2sNRY6vo+cnKhOMp0It37upTinJR5KS2nbnG/Fng4vDxwVDanbaf0Y/WlyNR0XpqrhsTDFUZJV6cpSi5R2o3aad1xVm0b+XdW1j68kkfqkDlmgO2GnK0cdhnTeSdXDvbh1bpye1FeTkzoeiNPYTFq+FxNKs7XcYy+ciusH4l6o24weiAAQAAAAIYmAMllMTCpJZRLAkAYAADADKAgAYybjQFDJGAxiABgTOSSbbSSTbbdkkt7ZxXXntGq4mU8Pgpyo4VbUZVItxq11uunvjDos3x5Fk6Ok6e12wGDco1aynVW+jRXe1E+TtlH7TRoGme1vESvHCUKdCOdp1X3tTz2cop/wBRzRvP33JlL4nfzEelpfTWKxctrE16tbO6U5eCL/dgvDH0R5k3l52RSZD4erKjHWXFDhpapQlCdGThVTupLfG3Dr5MySjfLofLPD3efHhlvObFje8F2lynsxxGHhs2SlOlOSn/ABbDy9Lnpac1qweHjtqqsRVcVKnTpu6d1eLlLdFe/ocylg47878r5GN4NPO9+L5GN/x82tp7a4zaS01WxMpVK0ryk3spZKMfqxXBGGjCyu9+RccMlm73S81bmZdncuebNpGVqlk/YzJRk1K8W1KLvGSbUovmmtxHH3Dhvfkjpy2/RPaHpPDJL5R38Fls4iPe/wB+U/7jfNXu1fDVXGGMpvCzdl3kW6lFvr+tH2NdTi7ZHHyVl5slkH6toVozjGcJRnCSUozi1KMlzTWTRZ+c9RtcKujsRFtznhJeCtR2m4pN3c4R3Ka39btdV+h8LiIVYQq05KdOpGM4SjmpRaumjizisoguBFIQxMBMljZLAQAADAQAZGxAK4DGmTcaYFpjITHcCrhcQAc67YNZHRpRwNKVp147ddrfGheyj9pp+kXzONt893NcD39fdIvEaTxk98Y1ZUYdI0vB8Yt+p4KaNJPxyUt3vMc3l+fzwL3ZcHu6GNfH/wCFFoS4eTKhuQRQDInTV728S3MsGBjbLdNpJu3iTas08rtcPJkLf7fz7yn0+4DFOG1LPgil9J9Mhx3vqFPdfm2FFgSz9v595QuQQSF9/wANxN836CUv8vkvxCm/cjr3YrrDt06mj6kvFTvVw93vpt+OC8pZ/afI5Da/ly/E+7VzSrwmNw+Ji8qVaDl1p/RqL1i5IlH6hFcSaeazT3PmhXM1USFxMAZLBiYAAguBQEgBkbJuDZIDuNMm4IDJcdzHcdwMiZFetsQnN7oRlN+UVf7gueZrRV2cBjZcsJif9uQH5tq4iU5SnP6U5Sk3zcnd39WD95OafPoC5rdxXI1clN8PY+pijLK/KTMks0Y1x8veiK+iIyKcrpFlQCYyWBMt69Sm8iJ8PMbTW9WT3OzzSdnb1ATlvfR2KiskY3ut1X4mVgBFR5LzQ5MxVZZATKfif2TJFW89/qYaa2pNrha3nbeZZyUer5cSKU78XZfEmUfC3uysrlwpt+KfouCMMpucrL6KFH6i1bxKq4LB1U77eFw8r+cIno3NW7NMRt6IwX7tOdP+ipKP3Gz3M1O4hXC4AJhclsAuO5NxXAyXEK4AUxNgyGwHcpMx3GmBkuBNxgM8TXeVtGY9/wDi1verHtXPE13/AOmY/wDlqvwEH56eeaBx4oEhuTNnLDUXHg9/4mFuzXvPpk7/AHny1Uc1V0nbLqZrnzRkZosSjIJk3E2VBPh5ourWclFN3UVaKySW5cFvyWfQx1H4WNyAS4GVyMKZUpAEpGGpIcpGOViKzYePhy3vMy06aXViprJLoiqjsst/AqMGIk5PYj9p/cVTppF06eyvj1YNAdv7Hal9FRj9TE4iPtal/wCxu9zQOxZ/8Oq/zdX/AEUzfbmddKuIQMgGyWDJbAGxpkgmBYCAC5GOTLkY5MAuNMlDQFXHcQAVc8nW2N9H45c8JiP9DZ6qPk0vS28NiIfXoVo+2EkB+b6e4pox0qmW4qU0lduy6mzhinHij7dD6t4vHO2Hp7UFOMalRuKjTvxed3Zckz4HXg/14+06z2NW+S4pxmtr5Ta3Tu4f5MvXXznsaeee3lahpjs1xuHg50nDFwS8XdJxmvsNu/o79DUM02mmmm008mmuDXA/TNRrO/hfNbmaTrtqzQrqU6kY067i+6xFNWcpJZRqL9ZfnI8+ff8A7PTfDv8AtcdcguS1z3rJ+Y7nrjyG9z8gTyW/gOEbmaFFWs3w4cyo+W+dhVKiR9kaEeRaihw685z6GOTNi0XqriMXGU8O6GzGWy1OcoSTtdZKL5noR7NsbZudXDwau7bU5Xt12UY69My8tazz1Z2Rr1xXVyKs0lnu/ORjjXlf6MVHjtSSkbdZPpZ89WrfKPtLavmn94pIDsHYlU/QsTH6uLb9tOH4HRDm3Yh/yuM/mYf7aOkmddHcTATIExDJYCYJiBMDIIEAFyMcgABIpAAAigAAHa+T3Pf5AAH5nx1Huq1al+zq1If0ycfuPmq3dopJyeeauklxGBq4L5Itz8T4uS+C4Hq6F0hVwd/k89jad3e8r9LPgAC5l/LFmrL+Pura1Y+c1N4uqmouKUdmMLPnBLZfm02YNJ6xYrEQhSrVpTjG7XhhB+rilcAJ8Z/i/ev68mdNPerhGKW6PwADtyXdq99lX58QeW4QEDnMxTm+fsACDcuynF/pdag91Wht+TpySXuqP2Gxaya6UKLlSw67+tGTjUup04U7b82ryfll1EB5/wDSzr0vW/3c4nHMFBZ3zz6ZdEY2tnNZx4riuvUYHpYMUoK914X03PzQ5PmICK7B2Ix/QsTLni37qVP8TogwM66BIAQJiYgATEMAKQAAH//Z',
            workerName: 'Arham',
        },
        {
            workerPic: 'data:image/jpeg;base64,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',
            workerName: 'Subhan',
        },
        {
            workerPic: 'data:image/jpeg;base64,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',
            workerName: 'Akbar',
        },
        {
            workerPic: 'data:image/jpeg;base64,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',
            workerName: 'Afzal',
        },
    ])
    const [taskList, setTaskList] = useState([
        {}, {}, {}, {}, {}, {},
    ])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setDrawerVisible(false)
            // alert(" Re-Fresh")
            checkCrashlytics()
        });

        return unsubscribe;
    }, [navigation])

    const checkCrashlytics = () => {
        crashlytics().log('Home Screen Admin side');
        try {
            console.log("==== Home Screen Admin side crashlytics====")
        } catch (error) {
            crashlytics().recordError(error);
            console.log("=== crash error ===", error)
        }
    }

    const handleProductsButton = () => {
        navigation.navigate("ProductsScreen"),
            setDrawerVisible(false)
    }

    return (
        <View style={styles.container}>
            <CustomStatusBar BarStyleColor='dark' />

            <View style={styles.wrapper}>
                <Header_Dashboard
                    HeaderTitle='Hi, Admin!'
                    HeaderGreetings='Welcome back'
                    OnMenuPress={() => { setDrawerVisible(true) }}
                    OnBellPress={() => { navigation.navigate("NotificationScreens") }}
                    MenuImg={require('../../Assets/Images/Dashboard/MenuIcon.png')}
                    BellImg={require('../../Assets/Images/Dashboard/notification.png')}
                />

                <TouchableOpacity
                    onPress={() => { }}
                    activeOpacity={0.6}
                >
                    <LinearGradient colors={[Colors.PRIMARY_COLOR, Colors.PRIMARY_BLUE]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 2, y: 1.5 }}
                        style={styles.topCard}>

                        <View style={styles.cardSection}>
                            <View style={styles.cardSectionTextBox}>
                                <Text style={styles.cardText1}>Maintenance Required</Text>
                                <Text style={styles.cardText2}>Water Plant 1</Text>
                            </View>

                            <Image resizeMode='contain' style={styles.bellImg}
                                source={require('../../Assets/Images/Dashboard/bell.png')}
                            />
                        </View>

                        <View style={styles.cardSection2}>
                            <Image resizeMode='contain' style={styles.warningIcon}
                                source={require('../../Assets/Images/Dashboard/location.png')}
                            />
                            <Text style={styles.cardText1}>29-D Fazeelat Town, RYK </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={styles.listHeader}>
                    <Text style={styles.listTitle}>Available Workers</Text>

                    <TouchableOpacity onPress={() => { navigation.navigate("AvailableWorker") }}
                        style={styles.listNavBox}>
                        <Text style={styles.listNavText}>See all</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: wp(10), marginTop: hp(1), }}>
                    <FlatList
                        data={workerList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{ flexGrow: 1, }}
                        renderItem={({ item, index }) => {
                            return (
                                <WorkerList_Dashboard
                                    WorkerImage={item.workerPic}
                                    WorkerName={item.workerName}
                                />
                            )
                        }}
                    />
                </View>


                <View style={styles.listHeader}>
                    <Text style={styles.listTitle}>All Clients</Text>

                    <TouchableOpacity onPress={() => { navigation.navigate("SeeAllTasksScreen") }}
                        style={styles.listNavBox}>
                        <Text style={styles.listNavText}>See all</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 1,
                    marginTop: hp(1),
                }}>
                    <FlatList
                        data={taskList}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{ paddingBottom: hp(5) }}
                        renderItem={({ item, index }) => {
                            return (
                                <Main_FlatlistTab
                                    TabTitle={`Purification Plant ${index + 1}`}
                                    TabDescription={"Last Maintenance"}
                                    TabDate={"Jan 20 2023 -10:00 AM"}
                                    TabAddress={"29-D Fazeelat Town, Rahim Yar Khan"}
                                    OnPress={() => { navigation.navigate("WaterPlantDetails") }}
                                    CircleProgress={progress}
                                    CircleColor={Colors.PROGRESS_COLOR}
                                    CircleDays={`${12} Days`}
                                />
                            )
                        }}
                    />

                </View>

            </View>

            {/* =============== Model ================= */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={drawerVisible}
                onRequestClose={() => {
                    setDrawerVisible(!drawerVisible);
                }}>
                <View style={{ flex: 1, backgroundColor: Colors.BLACK_HEX_COLOR, }}>
                    <View style={styles.drawerBox} >

                        <View style={{
                            paddingBottom: hp(5),
                            borderBottomWidth: 1,
                            borderBottomColor: Colors.GRAY_BAR,
                            marginBottom: hp(3),
                            paddingTop: hp(2),
                            justifyContent: 'center',
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingLeft: wp(2),
                            }}>
                                <Image resizeMode='contain' style={styles.logo}
                                    source={{ uri: 'data:image/jpeg;base64,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' }}
                                />

                                <View style={{ flex: 1, marginHorizontal: wp(3) }}>
                                    <Text style={{
                                        fontSize: hp(2.5),
                                        color: Colors.BLACK_TEXT_COLOR,
                                        fontWeight: '600',
                                    }}>Jhon Smith</Text>
                                    <Text style={{
                                        fontSize: hp(2),
                                        color: Colors.BLACK_TEXT_COLOR,
                                        // fontWeight: '600',
                                    }}>Admin</Text>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => { handleProductsButton() }}
                            style={styles.drawerTab}>
                            <Image resizeMode='cover' style={styles.drawerTabIcon}
                                source={require('../../Assets/Images/Drawer/products.png')} />
                            <Text style={styles.drawerTabTitle}>Manage Products</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { navigation.navigate("FAQScreen") }}
                            style={styles.drawerTab}>
                            <Image resizeMode='cover' style={styles.drawerTabIcon}
                                source={require('../../Assets/Images/Drawer/faq.png')} />
                            <Text style={styles.drawerTabTitle}>FAQ's</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { navigation.navigate("PrivacyPolicy") }}
                            style={styles.drawerTab}>
                            <Image resizeMode='cover' style={styles.drawerTabIcon}
                                source={require('../../Assets/Images/Drawer/policy.png')} />
                            <Text style={styles.drawerTabTitle}>Privacy Policy</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { navigation.navigate("TermConditions") }}
                            style={styles.drawerTab}>
                            <Image resizeMode='cover' style={styles.drawerTabIcon}
                                source={require('../../Assets/Images/Drawer/policy.png')} />
                            <Text style={styles.drawerTabTitle}>Term and Conditions</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { navigation.navigate("RatingsScreen") }}
                            style={styles.drawerTab}>
                            <Image resizeMode='cover' style={styles.drawerTabIcon}
                                source={require('../../Assets/Images/Drawer/rating.png')} />
                            <Text style={styles.drawerTabTitle}>Ratings</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { helper.showTextToast("Not Sharing Now") }}
                            style={styles.drawerTab}>
                            <Image resizeMode='cover' style={styles.drawerTabIcon}
                                source={require('../../Assets/Images/Drawer/invite.png')} />
                            <Text style={styles.drawerTabTitle}>Invite Friends</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { navigation.navigate("AboutScreen") }}
                            style={styles.drawerTab}>
                            <Image resizeMode='cover' style={styles.drawerTabIcon}
                                source={require('../../Assets/Images/Drawer/about.png')} />
                            <Text style={styles.drawerTabTitle}>About Water Purification</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { setDrawerVisible(false) }}
                            style={styles.drawerTab}>
                            <Image resizeMode='cover' style={styles.drawerTabIcon}
                                source={require('../../Assets/Images/Drawer/close.png')} />
                            <Text style={styles.drawerTabTitle}>Close Drawer</Text>
                        </TouchableOpacity>

                        <View style={styles.versionBox}>
                            <TouchableOpacity
                                onPress={() => { helper.resetAndGo(navigation, "LoginScreen") }}
                                style={styles.drawerTab}>
                                <Image resizeMode='cover' style={styles.drawerTabIcon}
                                    source={require('../../Assets/Images/Drawer/logout.png')} />
                                <Text style={styles.drawerTabTitle}>Goodbye for Now</Text>
                            </TouchableOpacity>


                            {/* <Text style={styles.version}>Version 1.0</Text> */}
                        </View>
                    </View>
                </View>
            </Modal>


        </View >
    )
}

export default connect(ReducerProps, ReducerAction)(HomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BG_LIGHT,
    },
    drawerBox: {
        flex: 1,
        width: wp(80),
        backgroundColor: Colors.BG_LIGHT,
        paddingVertical: hp(2),
        paddingHorizontal: wp(4),
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    drawerBackArrow: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp(1),
        width: hp(4),
        height: hp(4),
        backgroundColor: Colors.BLACK_HEX_COLOR,
    },
    logo: {
        width: hp(11),
        height: hp(11),
        borderRadius: hp(100),
        // alignSelf: 'center',
    },
    drawerTab: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(3),
    },
    drawerTabIcon: {
        width: hp(3.2),
        height: hp(3.2),
    },
    drawerTabTitle: {
        fontSize: hp(2.3),
        color: Colors.LIGHTBLACK_TEXT_COLOR,
        marginLeft: wp(3),
        fontWeight: '500',
    },
    versionBox: {
        flex: 1,
        paddingBottom: hp(2),
        justifyContent: 'flex-end',
        // alignItems: 'center',
        // alignSelf:'baseline',
    },
    version: {
        fontSize: hp(1.8),
        color: Colors.BLACK_TEXT_COLOR,
        textAlign: 'center',
        marginTop: hp(2),
    },
    wrapper: {
        flex: 1,
        marginTop: hp(7),
    },
    topCard: {
        width: wp(80),
        height: hp(20),
        backgroundColor: Colors.PRIMARY_COLOR,
        borderRadius: hp(1.5),
        marginTop: hp(4),
        alignSelf: 'center',
    },
    cardSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: wp(3),
    },
    cardSectionTextBox: {
        flex: 1.5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginRight: wp(2),
    },
    cardText1: {
        fontSize: hp(1.9),
        color: Colors.WHITE_TEXT_COLOR,
        textAlign: 'left',
    },
    cardText2: {
        fontSize: hp(3.2),
        color: Colors.WHITE_TEXT_COLOR,
        textAlign: 'left',
        fontWeight: '500',
        letterSpacing: 1
    },
    bellImg: {
        width: hp(12),
        height: hp(12),
    },
    cardSection2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: wp(3),
        marginTop: hp(2),
    },
    warningIcon: {
        width: hp(2.2),
        height: hp(2.2),
        marginRight: wp(1),
    },
    listHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp(80),
        marginTop: hp(2),
        alignSelf: 'center',
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
    }
})


