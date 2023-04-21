import {View, StyleSheet} from 'react-native';
import {kakaoLoginAccessTokenStateAxios} from '../modules/socialloginmodule/KakaoLoginAxiosModule';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext, useEffect} from 'react';
import {UserInfoContext} from '../context/UserInfoContext';
import {AppLoadingContext} from '../context/AppLoadingContext';

export default function LoadingPage({navigation, route}) {
  const appLoadingContextData = useContext(AppLoadingContext);
  const {setAppLoading} = appLoadingContextData;
  const userInfoContextData = useContext(UserInfoContext);
  const {
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
  } = userInfoContextData;

  const getUserInfoStorage = async () => {
    let userInfo;
    try {
      const userInfo_JSON = await AsyncStorage.getItem('userInfoStorage');
      userInfo = JSON.parse(userInfo_JSON);
      return userInfo;
    } catch (e) {
      console.log('LoadingPage | getUserInfoStorage Error');
    }
  };

  const userSocialService = async () => {
    const userInfo = await getUserInfoStorage();
    let socialService;
    if (userInfo === null) {
      socialService = null;
    } else {
      socialService = userInfo.socialService;
    }
    if (socialService === 'null') {
      navigation.navigate('Login');
    }
    if (socialService === 'Kakao') {
      return kakaoLoginAccessTokenStateAxios(navigation);
    }
    if (socialService === 'Google') {
    }
    if (socialService === 'Apple') {
    }
  };
  async function getUserInfo() {
    const userInfo = await getUserInfoStorage();
    if (userInfo !== null) {
      const userInfoValue = userInfo.value.userInfo;
      setSocialId(userInfoValue.social_id);
      setNickname(userInfoValue.nickname);
      setAddress(userInfoValue.address);
      setBuildingName(userInfoValue.building_name);
      setDetailAddress(userInfoValue.detail_address);
      setBuildingPassword(userInfoValue.building_password);
    }
    return;
  }
  useEffect(() => {
    const appLoadingItem = async () => {
      await userSocialService();
      await getUserInfo();
      console.log('11111');
      return setAppLoading(false);
    };
    appLoadingItem();
  });

  //   useEffect(() => {
  //     getUserInfo();
  //   }, []);
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 20,
    backgroundColor: 'green',
  },
});
