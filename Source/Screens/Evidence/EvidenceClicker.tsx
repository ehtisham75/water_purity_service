import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/Colors/Colors';
import crashlytics from '@react-native-firebase/crashlytics';
import CustomStatusBar from '../../Components/CustomStatusBar';
import { useNavigation } from '@react-navigation/native';
import SimpleHeader from '../../Components/SimpleHeader';
// import Entypo from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';
import SimpleButton from '../../Components/SimpleButton';


const EvidenceClicker = () => {
  const navigation = useNavigation();

  const [pickImage, setPickImage] = useState("")
  const [imageArray, setImageArray] = useState([])
  const [newImages, setNewImages] = useState("")

  useEffect(() => {
    // const unsubscribe = navigation.addListener('focus', () => {
    //   setImageArray([])
    // });

    // return unsubscribe;
    // cameraImageController()
  }, [])


  const cameraImageController = () => {
    try {
      crashlytics().log(`Camera Image Mounted`);
      ImagePicker.openCamera({
        width: wp(100),
        height: hp(70),
        multiple: true,
        compressImageQuality: 0.1
      }).then(image => {
        const newImages = [image];
        navigation.navigate("EvidenceDetailScreen", { ImagesList: newImages })
      });
    } catch (error) {
      console.log('====Camera Image Error=====>', error);
    }
  }

  const galleryImageController = () => {
    try {
      crashlytics().log(`Gallery Images Mounted`);
      ImagePicker.openPicker({
        width: 0,
        height: 0,
        multiple: true,
        mediaType: 'photo',
        compressImageQuality: 0.1,
      }).then(images => {
        const newImages = [...images];
        navigation.navigate("EvidenceDetailScreen", { ImagesList: newImages })
      });
    } catch (error) {
      console.log('====Gallery Images Error=====>', error);
    }
  }

  return (
    <View style={styles.container}>
      <CustomStatusBar BarStyleColor='dark' />

      <View style={styles.wrapper}>
        <SimpleHeader IsTitle={true} HeaderTitle='Evidence' />

        <View style={styles.buttonWrapper}>
          <SimpleButton
            OnAction={() => { cameraImageController() }}
            ButtonTitle="Take a picture of your task"
            ButtonStyle={{
              width: wp(80), height: hp(6.5),
              backgroundColor: Colors.PRIMARY_COLOR,
            }}
            ButtonTitleStyle={{ fontSize: hp(2), color: Colors.WHITE_TEXT_COLOR }}
          />
        </View>

        <View style={styles.galleryBoxWrap}>
          <View style={styles.galleryBox}>
            <Image source={require('../../Assets/Images/Dashboard/upload.png')}
              style={styles.docsIcon} />

            <View style={styles.galleryTextWrap}>
              <Text style={styles.uploadText}>Upload from</Text>
              <Text style={styles.galleryText}>My gallery</Text>
            </View>

            <TouchableOpacity onPress={() => { galleryImageController() }}
              style={styles.galleryAddButton}>
              <Text style={styles.addIcon}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  )
}

export default EvidenceClicker

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_LIGHT,
    alignItems: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: '15%',
  },
  wrapper: {
    flex: 1,
    marginTop: hp(6),
  },
  galleryBoxWrap: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: hp(12),
    // backgroundColor: 'plum',
  },
  galleryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.BLUE_BG_HEX,
    width: wp(80),
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderRadius: hp(1.5),
    marginTop: hp(10),
  },
  docsIcon: {
    width: hp(4.5),
    height: hp(4.5),
    borderRadius: hp(1)
  },
  galleryTextWrap: {
    marginHorizontal: wp(2),
    flex: 1
  },
  uploadText: {
    fontSize: hp(1.7),
    color: Colors.WHITE_TEXT_COLOR,
  },
  galleryText: {
    fontSize: hp(2),
    fontWeight: '600',
    color: Colors.WHITE_TEXT_COLOR,
  },
  galleryAddButton: {
    width: hp(4.5),
    height: hp(4.5),
    backgroundColor: Colors.PRIMARY_BLUE,
    borderRadius: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: hp(2.8),
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.WHITE_TEXT_COLOR,
  },
})
