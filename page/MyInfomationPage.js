import * as React from 'react';
import {useEffect, useContext} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import LogoImage from '../components/images/LogoImage';
import Content from '../components/recyclecomponents/Content';
import MyInfomationComponent from '../components/myinfomationcomponents/MyInfomationComponent';
import TicketComponent from '../components/myinfomationcomponents/TicketComponent';
import BoardComponent from '../components/myinfomationcomponents/BoardComponent';
import CostInfomationComponent from '../components/myinfomationcomponents/CostInfomationComponent';

export default function MyInfomationPage({navigation}) {
  return (
    <ScrollView>
      <View style={styles.logoBox}>
        <LogoImage />
      </View>

      <Content
        innerContent={<MyInfomationComponent navigation={navigation} />}
      />

      <Content
        contentTitle="TICKET"
        innerContent={<TicketComponent navigation={navigation} />}
      />

      <Content innerContent={<BoardComponent />} />

      <Content
        contentTitle="비용 안내"
        innerContent={<CostInfomationComponent />}
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
