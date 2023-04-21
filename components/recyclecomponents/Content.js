import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import defaultStyles from '../../modules/DefaultStylesModule';

export default function Content({
  contentTitle=null,
  styled={},
  innerContent,
}) {
  return (
    <View style={[styles.container,styled]}>
      {contentTitle !== null ?
      <Text style={[styles.xLargeTitle, styles.margin]}>{contentTitle}</Text>
      :null}
      {innerContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: defaultStyles.defaultBorderRadius,
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
  },
  margin: { marginBottom: 20 },
  xLargeTitle: defaultStyles.defaultXLargeTitle,
});
