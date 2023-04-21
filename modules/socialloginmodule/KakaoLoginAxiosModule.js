import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://192.168.0.12:3000';

// 카카오 로그인 버튼을 클릭하면 서버에서 url을 보내준다.
export const kakaoLoginUrlAxios = async data => {
  const kakaoLoginUrl = await axios.get(`${baseUrl}/api/auth/kakao`);
  return kakaoLoginUrl.data;
};

// WebView가 실행되는 동안 code를 통해 token을 발급한다.
export const kakaoLoginRequestTokenAxios = async (code, navigation) => {
  const tokenResponse = await axios.post(
    `${baseUrl}/api/auth/kakao/requestToken`,
    {code: code},
  );
  const navigationRoute = tokenResponse.data.value.navigation;
  const userInfo = tokenResponse.data;
  try {
    const userInfo_JSON = JSON.stringify(userInfo);
    await AsyncStorage.setItem('userInfoStorage', userInfo_JSON);
    console.log('userInfoStorage 저장');
  } catch (e) {
    console.log('AsyncStorage Error');
  }
  return navigation.navigate(navigationRoute);
};

// 어플 실행시 무조건 실행, 엑세스 토큰을 검증하고 처리한다.
export const kakaoLoginAccessTokenStateAxios = async navigation => {
  let userInfoData;
  let ACCESS_TOKEN;
  let ACCESS_TOKEN_EXIST;
  try {
    const userInfo_JSON = await AsyncStorage.getItem('userInfoStorage');
    const userInfo = JSON.parse(userInfo_JSON);
    userInfoData = userInfo;
    ACCESS_TOKEN = userInfo.ACCESS_TOKEN;
    // ACCESS_TOKEN 존재 여부 확인
    if (ACCESS_TOKEN === null) {
      ACCESS_TOKEN_EXIST = false;
    } else {
      ACCESS_TOKEN_EXIST = true;
    }
  } catch (e) {
    return console.log("getItem('userInfoStorage') Error");
  }

  if (ACCESS_TOKEN_EXIST) {
    // ACCESS_TOKEN이 존재하면 아래 코드를 실행한다.
    const userSocialId = userInfoData.value.userInfo.social_id;
    let ACCESS_TOKEN_STATE;
    try {
      // ACCESS_TOKEN이 유효한지 서버를 통해 확인한다.
      ACCESS_TOKEN_STATE = await axios.post(
        `${baseUrl}/api/auth/kakao/accessTokenState`,
        {
          ACCESS_TOKEN,
          userSocialId,
        },
      );
    } catch (e) {
      return console.log('/api/auth/kakao/accessTokenState SERVER ERROR');
    }

    const ACCESS_TOKEN_STATE_VALUE = ACCESS_TOKEN_STATE.data.state;
    if (ACCESS_TOKEN_STATE_VALUE === 'ACCESS_TOKEN_VALID') {
      // ACCESS_TOKEN이 유효할 경우
      return navigation.navigate('Main');
    } else if (ACCESS_TOKEN_STATE_VALUE === 'ACCESS_TOKEN_REISSUE') {
      // ACCESS_TOKEN이 재발급 됐을 경우
      const NEW_ACCESS_TOKEN = ACCESS_TOKEN_STATE.data.NEW_ACCESS_TOKEN;
      const newUserInfo = {...userInfoData, ACCESS_TOKEN: NEW_ACCESS_TOKEN};
      try {
        const newUserInfo_JSON = JSON.stringify(newUserInfo);
        await AsyncStorage.setItem('userInfoStorage', newUserInfo_JSON);
        return navigation.navigate('Main');
      } catch (e) {
        return console.log('ACCESS_TOKEN_STATE_VALUE AsyncStorage Error');
      }
    } else if (ACCESS_TOKEN_STATE_VALUE === 'REFRESH_TOKEN_INVALID') {
      // refresh_token이 정상적이지 않을 경우
      try {
        await AsyncStorage.removeItem('userInfoStorage');
        return navigation.navigate('Login');
      } catch (e) {
        return console.log("removeItem('userInfoStorage') Error");
      }
    }
  } else {
    // ACCESS_TOKEN이 존재하지 않으면 아래 코드를 실행한다.
    return navigation.navigate('Login');
  }
};
