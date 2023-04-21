import {View, StyleSheet} from 'react-native';
import {kakaoLoginAccessTokenStateAxios} from '../modules/socialloginmodule/KakaoLoginAxiosModule';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

export default function LoadingPage({navigation}) {
  let userInfo;
  const userInfoStorageCheck = async () => {
    let socialService;
    try {
      const userInfo_JSON = await AsyncStorage.getItem('userInfoStorage');
      userInfo = JSON.parse(userInfo_JSON);
      socialService = userInfo.socialService;
    } catch (e) {}
    if (userInfo === null) {
      navigation.navigate('Login');
    } else if (socialService === 'Kakao') {
      kakaoLoginAccessTokenStateAxios(navigation);
    } else if (socialService === 'Google') {
    } else if (socialService === 'Apple') {
    }
  };
  useEffect(() => {
    userInfoStorageCheck();
  });

  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 20,
    backgroundColor: 'green',
  },
});
