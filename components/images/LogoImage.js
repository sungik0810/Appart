import { StyleSheet, Image } from 'react-native';
export default function LogoImage() {
  return (
      <Image
        source={require('../../assets/appart_logo.png')}
        style={styles.logoImage}
      />
  );
}

const styles = StyleSheet.create({
  logoImage: {
    flex: 1,
    width: '100%',
    resizeMode:"contain",
  }
});
