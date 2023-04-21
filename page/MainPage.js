import * as React from 'react';
import {useEffect, useContext} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import LogoImage from '../components/images/LogoImage';
import Button from '../components/recyclecomponents/Button';
import Content from '../components/recyclecomponents/Content';
import Banner from '../components/maincomponents/Banner';
import CustomerCallComponent from '../components/maincomponents/CustomerCallComponent';
import MonthlyHistoryComponent from '../components/maincomponents/MonthlyHistoryComponent';
import MyInfomationComponent from '../components/maincomponents/MyInfomationComponent';
import CustomerServiceCenterComponent from '../components/maincomponents/CustomerServiceCenterComponent';
import titles from '../modules/TitleModule';
import {kakaoLoginAccessTokenStateAxios} from '../modules/socialloginmodule/KakaoLoginAxiosModule';

export default function MainPage({navigation}) {
  kakaoLoginAccessTokenStateAxios(navigation);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoBox}>
        <LogoImage />
      </View>

      <Banner />

      <Content
        contentTitle={titles.applicationTitle}
        innerContent={<CustomerCallComponent />}
      />

      <Content
        contentTitle={titles.monthlyHistoryTitle}
        innerContent={<MonthlyHistoryComponent />}
      />

      <Content
        contentTitle={titles.myInfomationTitle}
        innerContent={<MyInfomationComponent navigation={navigation} />}
      />

      <Content
        contentTitle="고객 센터"
        innerContent={<CustomerServiceCenterComponent />}
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
