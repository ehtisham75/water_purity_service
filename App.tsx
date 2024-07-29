import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//-------Redux-------------
import { Provider } from 'react-redux';
import { store, persistor } from './Source/Data/Redux/MyReducer'
import { PersistGate } from 'redux-persist/integration/react'
//---------Screens------------
import SplashScreen from './Source/Screens/WelcomeScreens/SplashScreen';
import IntroductionScreen from './Source/Screens/WelcomeScreens/IntroductionScreen';
import LoginScreen from './Source/Screens/AuthScreens/LoginScreen';
import RegisterScreen from './Source/Screens/AuthScreens/RegisterScreen';
import IntroductionScreenTwo from './Source/Screens/WelcomeScreens/IntroductionScreenTwo';
import IntroductionScreenThree from './Source/Screens/WelcomeScreens/IntroductionScreenThree';
import BottomTab from './Source/Screens/BottomTab/BottomTab';
import MaintenanceHistory from './Source/Screens/Maintenance/MaintenanceHistory';
import WaterPlantDetails from './Source/Screens/WaterPlant/WaterPlantDetails';
import NotificationScreens from './Source/Screens/Notifications/NotificationScreens';
import RecoverPassword from './Source/Screens/AuthScreens/RecoverPassword';
import SeeAllTasksScreen from './Source/Screens/Dashboard/SeeAllTasksScreen';
import AvailableWorker from './Source/Screens/Workers/AvailableWorker';
import AvailableWorkerDetails from './Source/Screens/Workers/AvailableWorkerDetails';
import ProductDetails from './Source/Screens/Products/ProductDetails';
import ProductsScreen from './Source/Screens/Dashboard/ProductsScreen';
import AddNewProducts from './Source/Screens/Products/AddNewProducts';
import FAQScreen from './Source/Screens/DrawerScreens/FAQScreen';
import PrivacyPolicy from './Source/Screens/DrawerScreens/PrivacyPolicy';
import TermConditions from './Source/Screens/DrawerScreens/TermConditions';
import RatingsScreen from './Source/Screens/DrawerScreens/RatingsScreen';
import AboutScreen from './Source/Screens/DrawerScreens/AboutScreen';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {/* ========== Admin SIDE ========== */}
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>

              {/* ===== Splash and Onboarding Screens ====== */}
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="IntroductionScreen" component={IntroductionScreen} />
              <Stack.Screen name="IntroductionScreenTwo" component={IntroductionScreenTwo} />
              <Stack.Screen name="IntroductionScreenThree" component={IntroductionScreenThree} />

              {/* ===== Auth Screens ====== */}
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="RecoverPassword" component={RecoverPassword} />

              {/* ===== Dashboards Screens ====== */}
              <Stack.Screen name="Dashboard" component={BottomTab} />
              <Stack.Screen name="NotificationScreens" component={NotificationScreens} />
              <Stack.Screen name="WaterPlantDetails" component={WaterPlantDetails} />
              <Stack.Screen name="SeeAllTasksScreen" component={SeeAllTasksScreen} />

              {/* ===== Admin Screens ====== */}
              <Stack.Screen name="AvailableWorker" component={AvailableWorker} />
              <Stack.Screen name="AvailableWorkerDetails" component={AvailableWorkerDetails} />
              <Stack.Screen name="MaintenanceHistory" component={MaintenanceHistory} />

              {/* ===== Drawer Screens ====== */}
              <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
              <Stack.Screen name="AddNewProducts" component={AddNewProducts} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
              <Stack.Screen name="FAQScreen" component={FAQScreen} />
              <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
              <Stack.Screen name="TermConditions" component={TermConditions} />
              <Stack.Screen name="RatingsScreen" component={RatingsScreen} />
              <Stack.Screen name="AboutScreen" component={AboutScreen} />
              {/* <Stack.Screen name="FAQScreen" component={FAQScreen} /> */}

            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}