import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Button from "../recyclecomponents/Button"
import defaultStyles from '../../modules/DefaultStylesModule'

export default function TicketComponent({navigation}) {
    function TicketPurchaseNavigation() {
    navigation.navigate('TicketPurchase');
  }
  return (
    <View style={styles.center}>
            <Text style={[styles.marginBottom, styles.xLargeTitle]}>없음</Text>
            <View>
              <Button text="구매하기" click={TicketPurchaseNavigation} />
            </View>
          </View>
  );
}

const styles = StyleSheet.create({
  center: { alignItems: 'center' },
  marginBottom: { marginBottom: 20 },
  xLargeTitle: defaultStyles.defaultXLargeTitle,
});
