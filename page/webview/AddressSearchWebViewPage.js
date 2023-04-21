import {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text, TextInput} from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
export default function AddressSearchWebViewPage({navigation, route}) {
  console.log(route.params);
  const {setAddress, setBuildingName} = route.params;
  useEffect(() => {
    navigation.setOptions({
      setAddress: setAddress,
      setBuildingName: setBuildingName,
    });
  }, []);
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
