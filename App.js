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

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loading, setLoading] = useState(true);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="App"
            screenOptions={{
              headerShown: false,
              contentStyle: {backgroundColor: 'black'},
            }}>
            {/* Payment Page */}
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Loading" component={LoadingPage} />
            <Stack.Screen name="Main" component={MainPage} />
            <Stack.Screen
              name="TicketPurchase"
              component={TicketPurchasePage}
            />
            <Stack.Screen name="MyInfomation" component={MyInfomationPage} />
            <Stack.Screen name="Promotion" component={PromotionPage} />

            <Stack.Screen name="Register" component={MyInfomationModifyPage} />
            <Stack.Screen
              name="MyInfomationModify"
              component={MyInfomationModifyPage}
            />
            {/* WebView Page */}
            <Stack.Screen
              name="KaKaoLoginWebView"
              component={KakaoLoginWebViewPage}
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
    // paddingTop: Constants.statusBarHeight,
  },
});
