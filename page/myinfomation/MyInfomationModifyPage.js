import {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import Content from '../../components/recyclecomponents/Content';
import Button from '../../components/recyclecomponents/Button';
import Input from '../../components/recyclecomponents/Input';
import TicketComponent from '../../components/myinfomationcomponents/TicketComponent';
import AddressModify from '../../components/myinfomationModifycomponents/AddressModify';
import defaultStyles from '../../modules/DefaultStylesModule';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dbModifyAxios} from '../../modules/DbModifyAxiosModule';
export default function MyInfomationModifyPage({navigation, route}) {
  // --- warning
  const [address, setAddress] = useState('test');
  const [buildingName, setBuildingName] = useState('test');
  // ---
  const [socialId, setSocialId] = useState('test');
  const [nickname, setNickname] = useState('test');
  const [detailAddress, setDetailAddress] = useState('test');
  // const [zonecode, setZonecode] = useState('');
  const [buildingPassword, setBuildingPassword] = useState('test');

  async function getUserInfo() {
    const userInfoData = await AsyncStorage.getItem('userInfoStorage');
    const userInfo = JSON.parse(userInfoData);
    const userInfoValue = userInfo.value.userInfo;
    setSocialId(userInfoValue.social_id);
    setNickname(userInfoValue.nickname);
    setAddress(userInfoValue.address);
    setBuildingName(userInfoValue.building_name);
    setDetailAddress(userInfoValue.detail_address);
    setBuildingPassword(userInfoValue.building_password);
    return;
  }
  useEffect(() => {
    getUserInfo();
  }, []);

  function modifySubmit() {
    const newUserInfo = {
      socialId,
      address,
      detailAddress,
      buildingName,
      buildingPassword,
    };
    dbModifyAxios(newUserInfo);
    console.log('address', address);
    console.log('buildingName', buildingName);
    console.log('detailAddress', detailAddress);
    console.log('buildingPassword', buildingPassword);
  }

  return (
    <ScrollView>
      <Content
        innerContent={
          <View>
            <Input title="이름" editable={false} defaultValue={nickname} />
            <AddressModify
              navigation={navigation}
              route={route}
              address={address}
              setAddress={setAddress}
              detailAddress={detailAddress}
              setDetailAddress={setDetailAddress}
              buildingName={buildingName}
              setBuildingName={setBuildingName}
            />

            <Input
              title="공동 현관 비밀번호"
              defaultValue={buildingPassword}
              onChangeTextSetState={setBuildingPassword}
            />
            <View style={styles.buttonBox}>
              <Button text="수정하기" click={modifySubmit} />
            </View>
          </View>
        }
      />
      <Content contentTitle="TICKET" innerContent={<TicketComponent />} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  buttonBox: {
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
