import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import defaultStyles from '../../modules/DefaultStylesModule';
import {kakaoLoginUrlAxios} from '../../modules/socialloginmodule/KakaoLoginAxiosModule';
export default function KakaoLogin({navigation}) {
  const kakaoLoginWebViewOpen = async () => {
    const kakaoLoginUrl = await kakaoLoginUrlAxios();
    await navigation.navigate('KaKaoLoginWebView', {
      kakaoLoginUrl: kakaoLoginUrl,
    });
  };
  return (
    <TouchableOpacity
      style={[styles.loginBox, styles.kakao]}
      onPress={kakaoLoginWebViewOpen}>
      <Text>카카오 로그인</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginBox: {
    width: '100%',
    height: '100%',
    borderRadius: defaultStyles.defaultBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kakao: {
    backgroundColor: 'yellow',
  },
});
