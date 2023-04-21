import { View, StyleSheet, Text } from 'react-native';
import defaultStyles from '../../modules/DefaultStylesModule';

export default function BoardComponent() {
  return (
    <View>
      <View style={{ borderBottomWidth: 1 }}></View>
      <View style={styles.boardBox}>
        <Text style={styles.mediumTitle}>공지사항</Text>
      </View>
      <View style={styles.boardBox}>
        <Text style={styles.mediumTitle}>로그아웃</Text>
      </View>
      <View style={styles.boardBox}>
        <Text style={styles.mediumTitle}>ddd</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mediumTitle: defaultStyles.defaultMediumTitle,
  boardBox: {
    paddingTop: 20,
    paddingBottom: 20,
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
});
