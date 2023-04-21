import { View, StyleSheet, Text } from 'react-native';
import defaultStyles from '../../modules/DefaultStylesModule';
import titles from '../../modules/TitleModule';
import Button from '../recyclecomponents/Button';
export default function CustomerCallComponent() {
  return (
    <View>
      <Text style={[styles.mediumTitle, styles.marginBottom]}>
        아파트 동 호수 api
      </Text>
      <View style={styles.center}>
        <Button text={titles.applicationTitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mediumTitle: defaultStyles.defaultMediumTitle,
  center: { width: '100%', alignItems: 'center' },
  marginBottom: { marginBottom: 20 },
});
