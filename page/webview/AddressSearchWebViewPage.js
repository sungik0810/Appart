import {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text, TextInput} from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
import {UserInfoContext} from '../../context/UserInfoContext';
export default function AddressSearchWebViewPage({navigation}) {
  const userInfo = useContext(UserInfoContext);
  const {setAddress, setBuildingName} = userInfo;

  const getAddressData = data => {
    let defaultAddress = ''; // 기본주소
    let defaultBuildingName = ''; // 기본주소

    if (data.buildingName === 'N') {
      defaultAddress = data.apartment;
      defaultBuildingName = data.buildingName;
    } else {
      defaultAddress = data.address;
      defaultBuildingName = data.buildingName;
    }
    setAddress(defaultAddress);
    setBuildingName(defaultBuildingName);

    navigation.goBack();
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Postcode
        style={{width: '100%', height: '100%'}}
        jsOptions={{animation: true}}
        onSelected={getAddressData}
      />
    </View>
  );
}
