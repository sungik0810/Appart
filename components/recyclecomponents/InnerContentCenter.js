import { View, StyleSheet, Text } from 'react-native';
import defaultStyles from '../../modules/DefaultStylesModule';
import titles from '../../modules/TitleModule';
import Button from '../recyclecomponents/Button';
export default function InnerContentCenter({title}) {
  return (
    <View style={[styles.center, styles.optionalCenterTitle]}>
      <Text style={styles.xLargeTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  xLargeTitle: defaultStyles.defaultXLargeTitle,
  center: { width: '100%', alignItems: 'center' },
  optionalCenterTitle: {
    marginTop: 20,
    marginBottom: 20,
  },
});
