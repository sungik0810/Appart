import { StyleSheet, Image } from 'react-native';
export default function TestImage() {
  return (
    <Image
      source={require('../../assets/Test.png')}
      style={styles.image}
      contentFit="cover"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
});
