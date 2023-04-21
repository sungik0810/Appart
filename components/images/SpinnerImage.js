import { Image } from 'react-native';
export default function SpinnerImage({style}) {
  return (
      <Image
        source={require('../../assets/spinner.gif')}
        style={style}
      />
  );
}
