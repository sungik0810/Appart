import { View, Text, ScrollView, StyleSheet } from 'react-native';
import LogoImage from '../../components/images/LogoImage';
import Content from '../../components/recyclecomponents/Content';
import Button from '../../components/recyclecomponents/Button';
import InnerContentCenter from '../../components/recyclecomponents/InnerContentCenter';
import TicketPurchaseComponent from '../../components/purchase/TicketPurchaseComponent';
import titles from '../../modules/TitleModule';
export default function TicketPurchasePage({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoBox}>
        <LogoImage />
      </View>

      <Content
        contentTitle="주간 이용권"
        styled={{ backgroundColor: 'coral' }}
        innerContent={
          <TicketPurchaseComponent price={9900} navigation={navigation} />
        }
      />

      <Content
        contentTitle="월간 이용권"
        styled={{ backgroundColor: 'yellow' }}
        innerContent={
          <TicketPurchaseComponent price={27900} navigation={navigation} />
        }
      />

      <Content
        contentTitle="연간 이용권"
        styled={{ backgroundColor: 'skyblue' }}
        innerContent={
          <TicketPurchaseComponent price={309800} navigation={navigation} />
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logoBox: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
