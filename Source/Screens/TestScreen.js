import { View, Text, Image } from 'react-native'
import React from 'react'

import Onboarding from 'react-native-onboarding-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';




// import Entypo from 'react-native-vector-icons/Entypo';
// import ImagePicker from 'react-native-image-crop-picker';

// const [pickImage, setPickImage] = useState("")
// const [imageArray, setImageArray] = useState([])


// const galleryImageController = () => {
//   // setPhotoLoading(true)
//   ImagePicker.openPicker({
//       width: 0,
//       height: 0,
//       multiple: true,
//       // includeBase64: true,
//       cropping: Platform.OS == "ios" ? false : true,
//       compressImageQuality: 0.1
//   }).then(images => {
//       const newImages = [...imageArray, ...images];
//       // this.setState({ imageArray: newImages });
//       setImageArray(newImages)

//       // console.log('\x1b[32m=======IMAGE PICKER =========>', image)
//       // this.setState({
//       //     pickImage: {
//       //         // Photolink : `data:${image.mime};base64,` + image.data,
//       //         // Photolink: image.data,
//       //         Photolink: image.path,
//       //         Photomime: image.mime,
//       //     },
//       // })
//   });
// }
// const cameraImageController = () => {
//   // this.setState({ generalModalVisibility: false })

//   ImagePicker.openCamera({
//       width: 0,
//       height: 0,
//       includeBase64: true,
//       cropping: Platform.OS == "ios" ? false : true,
//       compressImageQuality: 0.1
//   }).then(image => {
//       console.log('\x1b[32m=======IMAGE PICKER =========>', image)

//       // this.setState({
//       //     pickImage: {
//       //         // link : `data:${image.mime};base64,` + image.data,
//       //         link: image.data,
//       //         photomime: image.mime,
//       //     },
//       // })

//       // setPickImage({
//       //     link: image.data,
//       //     photomime: image.mime,
//       // })

//       // console.log('\x1b[33m=======IMAGE_URL_BASE64=========>', UpdatePhoto.photo_path)
//   });
// }
// const imageRemover = () => {
//   ImagePicker.clean().then(() => {
//       console.log('==== removed all tmp images from tmp directory ====');
//       // setPhotoPath("")
//       // helper.showTextToast("Photo Removed", Colors.theme)
//   }).catch(e => {
//       console.log('==== Error removing images====');
//       // alert(e);
//       // helper.showTextToast(e, Colors.theme)
//   });
// }
// const removeImage = (index) => {
//   const newImages = [...imageArray];
//   newImages.splice(index, 1);
//   setImageArray(newImages)
//   // this.setState({ imageArray: newImages });
// };



 {/* ================= Gallery Image View ================ */}
//  <View>
//  <View
//      style={{
//          // backgroundColor: 'pink',
//          marginTop: hp(3),
//      }}>
//      <TouchableOpacity
//          activeOpacity={0.5}
//          onPress={() => { this.galleryImageController() }}
//      >
//          <Image
//              resizeMode='cover'
//              source={require('../../assets/imges/add-image.png')}
//              style={{
//                  width: hp(10),
//                  height: hp(10)
//              }}
//          />
//      </TouchableOpacity>

//  </View>

//  <View
//      style={{
//          borderBottomWidth: 1,
//          borderTopWidth: 1,
//          borderColor: Colors.BLACK,
//          height: hp(12),
//          marginVertical: hp(1),
//          justifyContent: 'center',
//      }}
//  >
//      <FlatList
//          horizontal={true}
//          showsHorizontalScrollIndicator={false}
//          data={imageArray}
//          keyExtractor={(item, index) => index.toString()}
//          renderItem={({ item, index }) => {
//              return (
//                  <View
//                      style={{
//                          alignItems: 'center',
//                          justifyContent: 'center',
//                          marginVertical: hp(1.5),
//                          marginRight: wp(2),
//                          // backgroundColor: 'plum',
//                      }}>
//                      <Image
//                          resizeMode='cover'
//                          source={{ uri: item.path }}
//                          // source={{ uri: pickImage.Photolink }}
//                          style={{
//                              width: hp(10),
//                              height: hp(10),
//                              borderRadius: hp(1.5)
//                          }}
//                      >
//                      </Image>

//                      <TouchableOpacity
//                          onPress={() => { this.removeImage(index) }}
//                          activeOpacity={0.5}
//                          style={{
//                              alignItems: 'center',
//                              justifyContent: 'center',
//                              borderRadius: hp(50),
//                              backgroundColor: 'red',
//                              position: 'absolute',
//                              right: -1,
//                              top: hp(-0.5)
//                          }}>
//                          <Entypo name={'cross'} size={18} color={'white'} />
//                      </TouchableOpacity>
//                  </View>
//              );
//          }}
//      />
//  </View>
// </View>









const swiperImage = (Img) => {
  return (
    <Image
      source={Img}
      style={{
        width: hp(40),
        height: hp(40),
        borderRadius: hp(1.5)
      }}
    />
  )
}

const TestScreen = () => {

  // function OnboardSwiper() {
  //   return (
  //     <Onboarding
  //       showSkip={false}
  //       // showPagination={false}
  //       bottomBarHighlight={false}
  //       // bottomBarColor={Colors.PRIMARY_COLOR}
  //       onDone={navigateAction}

  //       titleStyles={{
  //         color: Colors.WHITE_TEXT_COLOR,
  //         fontSize: hp(5),
  //         fontFamily: NewFonts.font2,
  //         marginTop: hp(2),
  //       }}

  //       pages={[
  //         {
  //           backgroundColor: Colors.PRIMARY_COLOR,
  //           image: swiperImage(require('../../Assets/Images/IntroScreen/Intro1.png')),
  //           title: 'Share your feelings',
  //         },
  //         {
  //           backgroundColor: Colors.c,
  //           image: swiperImage(require('../../Assets/Images/IntroScreen/Intro2.png')),
  //           title: 'Face Login',
  //           //   subtitle: 'This is the subtitle.',
  //         },
  //         {
  //           backgroundColor: Colors.e,
  //           image: swiperImage(require('../../Assets/Images/IntroScreen/Intro3.png')),
  //           title: 'Live Chatting',
  //         },
  //         {
  //           backgroundColor: Colors.f,
  //           image: swiperImage(require('../../Assets/Images/IntroScreen/Intro4.png')),
  //           title: 'Video Calling',
  //         }
  //       ]}
  //     />
  //   )
  // }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.PRIMARY_COLOR,
      }}>
      <StatusBar
        backgroundColor={Colors.TRANSPARENT}
        barStyle={"light-content"}
        translucent={true}
      />

      {/* {OnboardSwiper()} */}
    </View>
  )
}

export default TestScreen





