import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const baseUrl = 'http://192.168.0.12:3000';

export const dbModifyAxios = async newUserInfo => {
  Alert.alert('정보를 수정하시겠습니까?', undefined, [
    {
      text: '네',
      onPress: async () => {
        const dbModify = await axios.post(
          `${baseUrl}/api/user/detail`,
          newUserInfo,
        );
        let userInfo;
        try {
          const userInfoData = await AsyncStorage.getItem('userInfoStorage');
          userInfo = JSON.parse(userInfoData);
        } catch (e) {
          return console.log(e);
        }

        const newUserInfoValue = dbModify.data;

        const newUserInfoData = {
          ...userInfo,
          value: {userInfo: newUserInfoValue},
        };
        console.log('dbModifyAxios', newUserInfoData);
        try {
          const newUserInfo_JSON = JSON.stringify(newUserInfoData);
          const newUserInfoSave = await AsyncStorage.setItem(
            'userInfoStorage',
            newUserInfo_JSON,
          );
          return;
        } catch (e) {
          return console.log(e);
        }
      },
    },
    {
      text: '아니오',
      onPress: () => {
        return;
      },
    },
  ]);
};
