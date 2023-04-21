import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PromotionPage from './page/PromotionPage';
import MainPage from './page/MainPage';
import LoginPage from './page/LoginPage';
import MyInfomationPage from './page/MyInfomationPage';
import MyInfomationModifyPage from './page/myinfomation/MyInfomationModifyPage';
import KakaoLoginWebViewPage from './page/webview/socialloginwebview/KakaoLoginWebViewPage';
import AddressSearchWebViewPage from './page/webview/AddressSearchWebViewPage';
import TicketPurchasePage from './page/ticket/TicketPurchasePage';
import TicketPurchaseWebViewPage from './page/webview/TicketPurchaseWebViewPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BASE_URL} from '@env';
import LoadingPage from './page/LoadingPage';
import {UserInfoContext} from './context/UserInfoContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppLoadingContext} from './context/AppLoadingContext';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [address, setAddress] = useState('');
  const [buildingName, setBuildingName] = useState('');
  const [socialId, setSocialId] = useState('');
  const [nickname, setNickname] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [buildingPassword, setBuildingPassword] = useState('');

  const [appLoading, setAppLoading] = useState(true);

  return appLoading ? (
    <AppLoadingContext.Provider
      value={{
        setAppLoading,
      }}>
      <UserInfoContext.Provider
        value={{
          address,
          setAddress,
          buildingName,
          setBuildingName,
          socialId,
          setSocialId,
          nickname,
          setNickname,
          detailAddress,
          setDetailAddress,
          buildingPassword,
          setBuildingPassword,
        }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="App"
            screenOptions={{
              headerShown: false,
              contentStyle: {backgroundColor: 'black'},
            }}>
            {/* Payment Page */}
            <Stack.Screen name="Loading" component={LoadingPage} />
            <Stack.Screen name="Main" component={MainPage} />
            <Stack.Screen name="Login" component={LoginPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserInfoContext.Provider>
    </AppLoadingContext.Provider>
  ) : (
    <UserInfoContext.Provider
      value={{
        address,
        setAddress,
        buildingName,
        setBuildingName,
        socialId,
        setSocialId,
        nickname,
        setNickname,
        detailAddress,
        setDetailAddress,
        buildingPassword,
        setBuildingPassword,
      }}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="App"
              screenOptions={{
                headerShown: true,
                contentStyle: {backgroundColor: 'black'},
              }}>
              {/* Payment Page */}
              <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Main"
                component={MainPage}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="TicketPurchase"
                component={TicketPurchasePage}
              />
              <Stack.Screen name="MyInfomation" component={MyInfomationPage} />
              <Stack.Screen name="Promotion" component={PromotionPage} />

              <Stack.Screen
                name="Register"
                component={MyInfomationModifyPage}
              />
              <Stack.Screen
                name="MyInfomationModify"
                component={MyInfomationModifyPage}
              />
              {/* WebView Page */}
              <Stack.Screen
                name="KaKaoLoginWebView"
                component={KakaoLoginWebViewPage}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="AddressSearchWebView"
                component={AddressSearchWebViewPage}
              />

              <Stack.Screen
                name="TicketPurchaseWebView"
                component={TicketPurchaseWebViewPage}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <StatusBar barStyle={'light-content'} />
      </SafeAreaView>
    </UserInfoContext.Provider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    margin: 20,
  },
});
