import {TextInput, View, StyleSheet} from 'react-native';
import Input from '../recyclecomponents/Input';
import Button from '../recyclecomponents/Button';
import defaultStyles from '../../modules/DefaultStylesModule';
import {useEffect} from 'react';

export default function AddressModify({
  navigation,
  route,
  address,
  setAddress,
  detailAddress,
  setDetailAddress,
  buildingName,
  setBuildingName,
}) {
  function AddressSearchWebViewOpen(navigation) {
    navigation.navigate('AddressSearchWebView', {
      setAddress,
      setBuildingName,
    });
  }
  return (
    <View>
      <Input title="주소" editable={false} defaultValue={address} />

      <TextInput
        style={[styles.inputTextInput, styles.xLargeTitle, styles.inputBox]}
        editable={false}
        defaultValue={buildingName}
      />

      <TextInput
        style={[styles.inputTextInput, styles.xLargeTitle, styles.inputBox]}
        onChangeText={text => {
          setDetailAddress(text);
        }}
        value={detailAddress}
      />
      <View style={styles.buttonBox}>
        <Button
          text="주소 검색"
          click={() => {
            AddressSearchWebViewOpen(navigation);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputBox: {
    marginTop: -15,
    marginBottom: 20,
  },
  inputTextInput: {
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: defaultStyles.defaultBorderRadius,
  },
  xLargeTitle: defaultStyles.defaultXLargeTitle,
});
