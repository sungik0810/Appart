import { View, StyleSheet, Text } from 'react-native';
import defaultStyles from '../../modules/DefaultStylesModule';
import titles from '../../modules/TitleModule';
import Button from '../recyclecomponents/Button';
export default function MyInfomationComponent({ navigation }) {
  function myInfomationNavigation() {
    navigation.navigate('MyInfomation');
  }
  return (
    <View>
      <Text style={[styles.mediumTitle, styles.marginBottom]}>
        {titles.myInfomationTitleSubTitle}
      </Text>
      <View style={styles.center}>
        <Button
          text={titles.myInfomationButtonTitle}
          click={myInfomationNavigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mediumTitle: defaultStyles.defaultMediumTitle,
  center: { width: '100%', alignItems: 'center' },
  marginBottom: { marginBottom: 20 },
});
