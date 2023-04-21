import { View, StyleSheet, Text } from 'react-native';
import Button from "../recyclecomponents/Button"
import defaultStyles from '../../modules/DefaultStylesModule'

export default function MyInfomationComponent({navigation}) {
  function MyInfomationModifyNavigation(){
    navigation.navigate("MyInfomationModify")
  }
  return (
    <View style={styles.center}>
      <Text style={[styles.marginBottom, styles.xLargeTitle]}>이름</Text>
      <Text style={[styles.marginBottom, styles.xLargeTitle]}>아파트</Text>
      <Text style={[styles.marginBottom, styles.xLargeTitle]}>동/호수</Text>
      <Text style={[styles.marginBottom, styles.xLargeTitle]}>
        공동현관비밀번호
      </Text>
      <Button text="수정하기" click={MyInfomationModifyNavigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { alignItems: 'center' },
  marginBottom: { marginBottom: 20 },
  xLargeTitle: defaultStyles.defaultXLargeTitle,
});
