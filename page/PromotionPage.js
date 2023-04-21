import { useContext } from 'react';
import { View, ScrollView, StyleSheet, Alert, Link } from 'react-native';
// components
import Button from '../components/recyclecomponents/Button';
import TestImage from '../components/images/TestImage';

// image
import LogoImage from '../components/images/LogoImage';
export default function PromotionPage({ navigation }) {
  const testClick = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.promotionPage}>
      <View style={styles.logoBox}>
        <LogoImage />
      </View>
      <View style={styles.promotionBox}>
        <ScrollView
          style={styles.promotionImage}
          showsVerticalScrollIndicator={false}>
          <TestImage />
        </ScrollView>
        <View style={styles.promotionButtonBox}>
          <Button text="로그인" theme="white" click={testClick} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  promotionPage: {
    flex: 1,
  },
  logoBox: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  promotionBox: {
    flex: 0.9,
    position: 'relative',
  },
  promotionImage: {
    flex: 1,
    width: '100%',
  },
  promotionButtonBox: {
    width: '100%',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});
