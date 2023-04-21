import { View, Text, StyleSheet } from 'react-native';
import defaultStyles from '../../modules/DefaultStylesModule';
import PagerView from 'react-native-pager-view';

export default function Banner() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>Page 1</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Page 2</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Page 3</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: defaultStyles.defaultBorderRadius,
    backgroundColor: 'white',
    // padding: 20,
    marginBottom: 20,
    aspectRatio: 16 / 9,
    overflow: 'hidden',
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
