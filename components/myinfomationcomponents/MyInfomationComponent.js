import {View, StyleSheet, Text} from 'react-native';
import Button from '../recyclecomponents/Button';
import defaultStyles from '../../modules/DefaultStylesModule';
import {useContext} from 'react';
import {UserInfoContext} from '../../context/UserInfoContext';

export default function MyInfomationComponent({navigation}) {
  const userInfo = useContext(UserInfoContext);
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
  } = userInfo;
  console.log(buildingName);
  function MyInfomationModifyNavigation() {
    navigation.navigate('MyInfomationModify');
  }
  return (
    <View style={styles.center}>
      <Text style={[styles.marginBottom, styles.xLargeTitle]}>{nickname}</Text>
      <Text style={[styles.marginBottom, styles.xLargeTitle]}>
        {buildingName}
      </Text>
      <Text style={[styles.marginBottom, styles.xLargeTitle]}>
        {detailAddress}
      </Text>
      <Text style={[styles.marginBottom, styles.xLargeTitle]}>
        {buildingPassword}
      </Text>
      <Button text="수정하기" click={MyInfomationModifyNavigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {alignItems: 'center'},
  marginBottom: {marginBottom: 20},
  xLargeTitle: defaultStyles.defaultXLargeTitle,
});
